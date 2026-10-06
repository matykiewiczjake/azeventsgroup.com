"use client";

import { useState, type FormEvent } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const eventTypeOptions = [
  "Corporate Event",
  "Private Party / Celebration",
  "Sponsorship / Vendor Inquiry",
  "Festival or Public Event",
  "Other",
];

function encodeForm(data: Record<string, string>) {
  return Object.entries(data)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
    )
    .join("&");
}

export function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [eventType, setEventType] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    try {
      // Posts to the static detection target (public/__forms.html), not
      // this page — see that file for why.
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeForm(data),
      });
      if (!res.ok) throw new Error(`${res.status}`);
      setStatus("success");
      form.reset();
      setEventType("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border-copper/30 bg-copper/5 rounded-lg border p-8 text-center">
        <h3 className="font-display text-navy text-2xl">MESSAGE SENT</h3>
        <p className="text-navy/70 mt-2">
          Thanks for reaching out — we&apos;ll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      action="/__forms.html"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required autoComplete="name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="event-type">Event Type</Label>
          <Select
            name="event-type"
            value={eventType}
            onValueChange={(value) => setEventType(value ?? "")}
          >
            <SelectTrigger id="event-type" className="w-full">
              <SelectValue placeholder="Select one" />
            </SelectTrigger>
            <SelectContent>
              {eventTypeOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your event..."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-700">
          Something went wrong sending your message — email us directly at{" "}
          <a href="mailto:info@azeventsgroup.com" className="underline">
            info@azeventsgroup.com
          </a>
          .
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className="w-full font-semibold sm:w-auto"
      >
        {status === "submitting" && <Loader2 className="size-4 animate-spin" />}
        Send Message
      </Button>
    </form>
  );
}
