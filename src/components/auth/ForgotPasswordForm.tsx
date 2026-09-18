"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { emailSchema } from "@/lib/schemas";

type Values = z.infer<typeof emailSchema>;

export function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<Values>({
    resolver: zodResolver(emailSchema),
  });

  if (isSubmitSuccessful) {
    return (
      <p className="text-sm text-muted-foreground">
        If that email exists, a reset link will be sent once email is connected.
      </p>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit(() => undefined)} className="space-y-4" noValidate>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" autoComplete="email" {...register("email")} />
          {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
        </div>
        <Button type="submit" className="w-full" isLoading={isSubmitting}>
          Send link
        </Button>
      </form>
      <Link href="/login" className="text-sm text-primary hover:underline">
        Back to sign in
      </Link>
    </>
  );
}
