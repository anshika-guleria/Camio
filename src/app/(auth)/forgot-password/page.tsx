import { ForgotPasswordForm } from "@/components/auth/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <>
      <div>
        <h1 className="text-2xl font-semibold">Reset password</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          We will email a reset link when auth is connected.
        </p>
      </div>
      <ForgotPasswordForm />
    </>
  );
}
