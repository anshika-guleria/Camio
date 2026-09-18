"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { contactSchema } from "@/lib/schemas";

type Values = z.infer<typeof contactSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<Values>({
    resolver: zodResolver(contactSchema),
  });

  if (isSubmitSuccessful) {
    return <p className="mt-10 text-sm text-muted-foreground">Thanks — we will get back to you.</p>;
  }

  return (
    <form onSubmit={handleSubmit(() => undefined)} className="mt-10 space-y-4" noValidate>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" {...register("email")} />
        {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <textarea
          id="message"
          rows={5}
          className="w-full rounded-xl border border-input bg-surface px-3 py-2 text-sm outline-none focus-visible:border-primary"
          {...register("message")}
        />
        {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
      </div>
      <Button type="submit" isLoading={isSubmitting}>
        Send
      </Button>
    </form>
  );
}
