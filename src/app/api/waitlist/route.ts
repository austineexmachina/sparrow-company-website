import { NextResponse } from "next/server";
import { Resend } from "resend";
import { waitlistSchema } from "@/lib/waitlist-schema";
import { waitlistStore } from "@/lib/waitlist-store";
import { checkRateLimit } from "@/lib/rate-limit";

const MAX_BODY_BYTES = 8_000;
const RATE_LIMIT_MAX = 6;

export async function POST(request: Request) {
  let rawBody: string;
  try {
    rawBody = await request.text();
  } catch {
    return NextResponse.json({ error: "Enter your full name and a valid email address." }, { status: 400 });
  }
  if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Please shorten your registration and try again." }, { status: 413 });
  }
  let input: unknown;
  try { input = JSON.parse(rawBody); }
  catch { return NextResponse.json({ error: "Enter your full name and a valid email address." }, { status: 400 }); }

  const parsed = waitlistSchema.safeParse(input);
  if (!parsed.success) return NextResponse.json({ error: "Enter your full name and a valid email address." }, { status: 400 });
  if (parsed.data.website) return NextResponse.json({ error: "Unable to process this request." }, { status: 400 });

  const address = request.headers.get("cf-connecting-ip")?.trim() || request.headers.get("x-real-ip")?.trim() || request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  try {
    if (await checkRateLimit("waitlist", address, RATE_LIMIT_MAX, 60 * 60)) {
      return NextResponse.json({ error: "Too many attempts. Please try again later." }, { status: 429 });
    }
  } catch {
    return NextResponse.json({ error: "We couldn't process your registration. Please try again later." }, { status: 503 });
  }

  try {
    const result = await waitlistStore().save({ fullName: parsed.data.fullName, email: parsed.data.email });
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL;
    if (apiKey && from && result === "created") {
      try {
        await new Resend(apiKey).emails.send({
          from,
          to: parsed.data.email,
          subject: "Thanks for joining the Sparrow Waitlist!",
          text: "You're on the list! Thank you for joining Sparrow Love Edit. We're excited to have you with us.",
        });
      } catch { /* Confirmation email is optional after SQL has confirmed registration. */ }
    }
    return NextResponse.json({ accepted: true, alreadyRegistered: result === "already_registered" }, { status: result === "created" ? 201 : 200 });
  } catch {
    return NextResponse.json({ error: "We couldn't save your registration. Please try again later." }, { status: 503 });
  }
}
