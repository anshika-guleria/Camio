"use client";

import { Check, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    name: "Free Developer",
    priceMonthly: "$0",
    priceYearly: "$0",
    detail: "Ideal for individual practice and small trial sessions.",
    features: [
      "1 Concurrent Active Room",
      "Up to 5 Interviews / Month",
      "Real-time Collaborative Code Editor",
      "Shared Whiteboard Canvas",
      "Standard Audio & HD Video",
    ],
    popular: false,
    cta: "Start Free",
    href: "/signup",
  },
  {
    name: "Team Pro",
    priceMonthly: "$29",
    priceYearly: "$22",
    detail: "For scaling engineering teams and active hiring pipelines.",
    features: [
      "Unlimited Concurrent Rooms",
      "Unlimited Live Interviews",
      "Advanced Code Execution Sandbox",
      "Private Interviewer Scorecards & Notes",
      "HD Screen Share & Call Recording",
      "Custom Question Templates Library",
    ],
    popular: true,
    cta: "Start 14-Day Free Trial",
    href: "/signup?plan=team",
  },
  {
    name: "Enterprise Org",
    priceMonthly: "$99",
    priceYearly: "$79",
    detail: "Custom security, SSO, dedicated support, and analytics.",
    features: [
      "SAML / Okta Single Sign-On (SSO)",
      "Organization-wide Admin Control",
      "Custom Branding & Domain Link",
      "Advanced Audit Logs & Analytics",
      "Dedicated Customer Success Manager",
      "99.99% Guaranteed SLA",
    ],
    popular: false,
    cta: "Contact Sales",
    href: "#contact",
  },
];

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="px-6 py-24 border-b border-border/40 relative">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="text-center space-y-4">
          <Badge variant="outline" className="border-primary/40 text-primary">
            Simple & Transparent Pricing
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Predictable plans for every stage
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground text-sm sm:text-base">
            Start for free, then scale up as your interview volume grows. No hidden fees.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <span className={cn("text-xs font-semibold", !isYearly ? "text-foreground" : "text-muted-foreground")}>
              Monthly Billing
            </span>
            <button
              onClick={() => setIsYearly((prev) => !prev)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary/20 p-1 transition-colors hover:bg-primary/30"
              aria-label="Toggle annual billing"
            >
              <span
                className={cn(
                  "h-4 w-4 rounded-full bg-primary transition-transform duration-200 shadow-md",
                  isYearly ? "translate-x-5" : "translate-x-0"
                )}
              />
            </button>
            <span className={cn("text-xs font-semibold flex items-center gap-1.5", isYearly ? "text-foreground" : "text-muted-foreground")}>
              Annual Billing
              <span className="rounded-full bg-green-500/15 text-green-400 border border-green-500/30 text-[10px] px-2 py-0.5 font-bold">
                Save 25%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid gap-6 md:grid-cols-3 items-stretch">
          {PLANS.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "relative flex flex-col justify-between p-8 transition-all duration-300 rounded-3xl",
                plan.popular
                  ? "border-2 border-primary bg-gradient-to-b from-primary/10 via-background to-background shadow-2xl scale-[1.02]"
                  : "border-border/80 bg-background/80 hover:border-border hover:shadow-lg"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground shadow-md flex items-center gap-1">
                  <Sparkles className="h-3 w-3 fill-current" /> Most Popular
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="mt-2 text-xs leading-relaxed">{plan.detail}</CardDescription>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold tracking-tight">
                    {isYearly ? plan.priceYearly : plan.priceMonthly}
                  </span>
                  <span className="text-xs text-muted-foreground">/ month</span>
                </div>

                <div className="space-y-3 pt-2 border-t border-border/50">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Included Features
                  </p>
                  <ul className="space-y-2.5 text-xs text-muted-foreground">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <Check className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                        <span className="text-foreground/90">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <Link
                  href={plan.href}
                  className={cn(
                    buttonVariants({
                      variant: plan.popular ? "default" : "outline",
                      size: "lg",
                    }),
                    "w-full font-semibold rounded-xl"
                  )}
                >
                  {plan.cta}
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
