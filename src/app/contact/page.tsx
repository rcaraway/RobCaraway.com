import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Get in Touch"
        subtitle="Let's talk about your next project"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <section className="mb-12">
          <p className="text-lg leading-relaxed mb-8">
            I&apos;m currently available for freelance consulting and full-time engineering leadership roles.
            Whether you need to build a mobile team, scale your engineering org, or ship a product from scratch &mdash;
            I&apos;d love to hear from you.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 mt-1 shrink-0" style={{ color: "var(--color-primary)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <h3 className="text-lg mb-1">Email</h3>
                <a href="mailto:robecaraway@gmail.com">robecaraway@gmail.com</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 mt-1 shrink-0" style={{ color: "var(--color-primary)" }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <div>
                <h3 className="text-lg mb-1">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/rob-caraway/" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/rob-caraway
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 mt-1 shrink-0" style={{ color: "var(--color-primary)" }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              <div>
                <h3 className="text-lg mb-1">GitHub</h3>
                <a href="https://github.com/rcaraway" target="_blank" rel="noopener noreferrer">
                  github.com/rcaraway
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 mt-1 shrink-0" style={{ color: "var(--color-primary)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <h3 className="text-lg mb-1">Location</h3>
                <p>Austin, Texas</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
