"use client";

import { Mail, MessageSquare, PhoneCall } from "lucide-react";

import { ContactForm } from "@/components/auth/ContactForm";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24 relative">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="text-center space-y-4">
          <Badge variant="outline" className="border-primary/40 text-primary">
            Get In Touch
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Have questions? We are here to help.
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground text-sm sm:text-base">
            Whether you want a custom enterprise demo or technical assistance, send us a message.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start max-w-5xl mx-auto">
          {/* Info Side */}
          <div className="lg:col-span-2 space-y-4">
            <Card className="p-6 space-y-4 border-border/80 bg-background/80 backdrop-blur-md rounded-2xl">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-foreground">Email Support</div>
                  <div className="text-xs text-muted-foreground">support@camio.app</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 space-y-4 border-border/80 bg-background/80 backdrop-blur-md rounded-2xl">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-foreground">Live Chat</div>
                  <div className="text-xs text-muted-foreground">Available Mon–Fri, 9am–6pm EST</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 space-y-4 border-border/80 bg-background/80 backdrop-blur-md rounded-2xl">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                  <PhoneCall className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-foreground">Sales Hotline</div>
                  <div className="text-xs text-muted-foreground">+1 (800) 555-CAMIO</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Form Side */}
          <Card className="lg:col-span-3 p-8 border-border/80 bg-background/90 backdrop-blur-2xl shadow-xl rounded-3xl">
            <h3 className="text-lg font-bold mb-4">Send a Direct Note</h3>
            <ContactForm />
          </Card>
        </div>
      </div>
    </section>
  );
}
