"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactCategories,
  contactSchema,
  type ContactValues,
} from "@/lib/contact-schema";

export function ContactForm() {
  const [notice, setNotice] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      category: "General Enquiry",
      message: "",
      website: "",
    },
  });

  const submit = handleSubmit(async (values) => {
    setNotice("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
      });
      const body = await response.json();
      if (!response.ok || body.accepted !== true) {
        throw new Error(body.error || "We couldn't send your enquiry. Please try again later.");
      }
      setNotice("Thank you. Your enquiry has been sent.");
    } catch (error) {
      setNotice(error instanceof Error ? error.message : "We couldn't send your enquiry. Please try again later.");
    }
  });

  return (
    <form className="form card contact-form" onSubmit={submit} noValidate>
      <label htmlFor="contact-name">Full Name</label>
      <input
        id="contact-name"
        autoComplete="name"
        aria-invalid={!!errors.fullName}
        aria-describedby={errors.fullName ? "contact-name-error" : undefined}
        {...register("fullName")}
      />
      {errors.fullName && <small id="contact-name-error" role="alert">{errors.fullName.message}</small>}

      <label htmlFor="contact-email">Email Address</label>
      <input
        id="contact-email"
        type="email"
        autoComplete="email"
        placeholder="Enter your professional email address."
        aria-invalid={!!errors.email}
        aria-describedby={errors.email ? "contact-email-error" : undefined}
        {...register("email")}
      />
      {errors.email && <small id="contact-email-error" role="alert">{errors.email.message}</small>}

      <label htmlFor="contact-company">Company / Organization (Optional)</label>
      <input
        id="contact-company"
        autoComplete="organization"
        aria-invalid={!!errors.company}
        aria-describedby={errors.company ? "contact-company-error" : undefined}
        {...register("company")}
      />
      {errors.company && <small id="contact-company-error" role="alert">{errors.company.message}</small>}

      <label htmlFor="contact-category">Enquiry Category</label>
      <select id="contact-category" aria-invalid={!!errors.category} {...register("category")}>
        {contactCategories.map((category) => <option key={category} value={category}>{category}</option>)}
      </select>

      <label htmlFor="contact-message">Your Message</label>
      <textarea
        id="contact-message"
        placeholder="Tell us about your enquiry or proposed collaboration."
        rows={6}
        maxLength={5000}
        aria-invalid={!!errors.message}
        aria-describedby={errors.message ? "contact-message-error" : undefined}
        {...register("message")}
      />
      {errors.message && <small id="contact-message-error" role="alert">{errors.message.message}</small>}

      <label className="trap" aria-hidden="true">
        Leave blank
        <input tabIndex={-1} autoComplete="off" {...register("website")} />
      </label>
      <button className="btn contact-submit-button" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Submit Enquiry"}
      </button>
      <p className="status" role="status" aria-live="polite">{notice}</p>
    </form>
  );
}
