"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { waitlistSchema, type WaitlistEntry } from "@/lib/waitlist-schema";

export function WaitlistForm() {
  const [error, setError] = useState("");
  const [accepted, setAccepted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<WaitlistEntry>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: { fullName: "", email: "", website: "" },
  });

  const submit = handleSubmit(async (values) => {
    setError("");
    setAccepted(false);
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
      });
      const body = await response.json();
      if (!response.ok || body.accepted !== true) {
        throw new Error(body.error || "Signup is temporarily unavailable. Please try again later.");
      }
      setAccepted(true);
    } catch (cause) {
      setError(
        cause instanceof Error
          ? cause.message
          : "Signup is temporarily unavailable. Please try again later.",
      );
    }
  });

  if (accepted) {
    return (
      <section className="form card waitlist-success" role="status" aria-live="polite">
        <span className="success-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="m5 12.5 4.3 4.3L19 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h2>Thanks for Joining the Sparrow Waitlist!</h2>
        <p>You&apos;re on the list! Thank you for joining Sparrow Love Edit. We&apos;re excited to have you with us.</p>
        <Link className="btn" href="/">Back to Home</Link>
      </section>
    );
  }

  return (
    <form className="form card" onSubmit={submit} noValidate>
      <label htmlFor="waitlist-name">Full Name</label>
      <input
        id="waitlist-name"
        autoComplete="name"
        aria-invalid={!!errors.fullName}
        aria-describedby={errors.fullName ? "waitlist-name-error" : undefined}
        {...register("fullName")}
      />
      {errors.fullName && <small id="waitlist-name-error" role="alert">Enter your full name.</small>}

      <label htmlFor="waitlist-email">Email Address</label>
      <input
        id="waitlist-email"
        type="email"
        autoComplete="email"
        aria-invalid={!!errors.email}
        aria-describedby={errors.email ? "waitlist-email-error" : undefined}
        {...register("email")}
      />
      {errors.email && <small id="waitlist-email-error" role="alert">Enter a valid email address.</small>}

      <label className="trap" aria-hidden="true">
        Leave blank
        <input tabIndex={-1} autoComplete="off" {...register("website")} />
      </label>
      <button className="btn" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Joining..." : "Join Waitlist"}
      </button>
      <p className="status" role="status" aria-live="polite">{error}</p>
    </form>
  );
}
