import Link from "next/link";

import { Container } from "@/components/shared/Container";
import { Logo } from "@/components/shared/Logo";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <Logo />
        <p className="text-sm text-muted-foreground">
          Remote technical interviews, done properly.
        </p>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <Link href="/docs" className="hover:text-primary">
            Docs
          </Link>
          <Link href="/contact" className="hover:text-primary">
            Contact
          </Link>
        </div>
      </Container>
    </footer>
  );
}
