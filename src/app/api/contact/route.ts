import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";
import { checkRateLimit } from "@/lib/rate-limit";

const MAX_ATTEMPTS = 5;
const MAX_BODY_BYTES = 12_000;

function deliveryUnavailable(status: number) {
  return NextResponse.json({ error: "We're unable to send your enquiry right now. Please try again later." }, { status });
}

export async function POST(request: Request) {
  let rawBody: string;
  try { rawBody = await request.text(); }
  catch { return NextResponse.json({ error: "Please check the information and try again." }, { status: 400 }); }
  if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Your enquiry is too long. Please shorten it and try again." }, { status: 413 });
  }
  let input: unknown;
  try { input = JSON.parse(rawBody); }
  catch { return NextResponse.json({ error: "Please check the information and try again." }, { status: 400 }); }

  const parsed = contactSchema.safeParse(input);
  if (!parsed.success || parsed.data.website) {
    return NextResponse.json({ error: "Please check the information and try again." }, { status: 400 });
  }
  const address = request.headers.get("cf-connecting-ip")?.trim() || request.headers.get("x-real-ip")?.trim() || request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  try {
    if (await checkRateLimit("contact", address, MAX_ATTEMPTS, 15 * 60)) {
      return NextResponse.json({ error: "We couldn't accept more enquiries from your connection right now. Please try again later." }, { status: 429 });
    }
  } catch { return deliveryUnavailable(503); }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) return deliveryUnavailable(503);
  try {
    const result = await new Resend(apiKey).emails.send({
      from, to, replyTo: parsed.data.email,
      subject: `Sparrow Love Edit enquiry: ${parsed.data.category}`,
      text: [`Name: ${parsed.data.fullName}`, `Email: ${parsed.data.email}`, `Company / Organization: ${parsed.data.company || "Not provided"}`, `Category: ${parsed.data.category}`, "", "Message:", parsed.data.message].join("\n"),
    });
    if (result.error || !result.data?.id) return deliveryUnavailable(502);
    return NextResponse.json({ accepted: true }, { status: 202 });
  } catch { return deliveryUnavailable(502); }
}
