import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <PageHeader
        title="Rob Caraway"
        subtitle="Engineering Leader for Full Stack Teams"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Summary */}
        <section className="mb-12">
          <p className="text-lg leading-relaxed">
            Engineering manager and mobile leader with 15+ years of experience and 5+ years managing cross-functional teams.
            I build high-performing engineering teams that ship products users love &mdash; from healthcare SaaS to consumer apps
            with millions of downloads.
          </p>
        </section>

        {/* Highlights */}
        <section className="mb-12">
          <h2 className="text-2xl mb-6">Career Highlights</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg mb-2" style={{ color: "var(--color-primary)" }}>Spring Health</h3>
              <p className="text-sm">Built mobile team from scratch, driving app from 2.2 to industry-leading 4.9 rating. Later led Covered Lives team to dramatically increase member conversions through rapid experimentation.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg mb-2" style={{ color: "var(--color-primary)" }}>2M+ Downloads</h3>
              <p className="text-sm">Founded GifShare &amp; GifLab, achieving over 2 million downloads. Sold to Daneco LTD in 2016. Featured on Fox Business, IndieHackers, and Yahoo.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg mb-2" style={{ color: "var(--color-primary)" }}>Enterprise Clients</h3>
              <p className="text-sm">Consulted with Oracle (Moat), Macmillan (iClicker), HEB, and Kubota. Achieved 99.8% crash-free rate on 3M+ monthly sessions at HEB.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg mb-2" style={{ color: "var(--color-primary)" }}>Community</h3>
              <p className="text-sm">Top 5% iOS contributor on StackOverflow. Over 100k pageviews on technical articles. Founded &ldquo;Ship Your Side Projects&rdquo; meetup in Austin.</p>
            </div>
          </div>
        </section>

        {/* How I Can Help */}
        <section className="mb-12">
          <h2 className="text-2xl mb-4">How I Can Help</h2>
          <ul className="space-y-3 list-none pl-0">
            <li className="flex gap-3">
              <span style={{ color: "var(--color-primary)" }} className="font-bold text-lg leading-snug">&bull;</span>
              <span>Manage, mentor, and grow a team of engineers across mobile, web, and backend</span>
            </li>
            <li className="flex gap-3">
              <span style={{ color: "var(--color-primary)" }} className="font-bold text-lg leading-snug">&bull;</span>
              <span>Improve app scalability with strong architecture and engineering standards</span>
            </li>
            <li className="flex gap-3">
              <span style={{ color: "var(--color-primary)" }} className="font-bold text-lg leading-snug">&bull;</span>
              <span>Increase productivity through automation, CI/CD, and experimentation frameworks</span>
            </li>
            <li className="flex gap-3">
              <span style={{ color: "var(--color-primary)" }} className="font-bold text-lg leading-snug">&bull;</span>
              <span>Engineer apps from scratch &mdash; greenfield and skunkworks specialist</span>
            </li>
          </ul>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="text-2xl mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "React", "TypeScript", "Ruby on Rails", "AWS", "Flutter", "Swift",
              "Kotlin", "React Native", "Node.js", "GraphQL", "MongoDB",
              "Firebase", "Redis", "CI/CD", "Claude Code", "GitHub Copilot",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-sm border"
                style={{ borderColor: "var(--color-primary)", color: "var(--color-primary)" }}
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-12">
          <h2 className="text-2xl mb-6">What People Say</h2>
          <div className="space-y-6">
            <blockquote className="border-l-4 pl-5 italic" style={{ borderLeftColor: "var(--color-primary)" }}>
              <p className="mb-2">&ldquo;Rob is a superstar. He&apos;s a true leader &mdash; well organized, well thought out and a great communicator.&rdquo;</p>
              <footer className="text-sm not-italic" style={{ color: "var(--color-muted)" }}>
                &mdash; Steve Miller, Founder/CEO Pragmatic Software (Sold to SmartBear)
              </footer>
            </blockquote>
            <blockquote className="border-l-4 pl-5 italic" style={{ borderLeftColor: "var(--color-primary)" }}>
              <p className="mb-2">&ldquo;Intelligent, insightful, and most important of all thorough. You can be confident that any task he starts will be a resounding success.&rdquo;</p>
              <footer className="text-sm not-italic" style={{ color: "var(--color-muted)" }}>
                &mdash; Gant Laborde, Chief Technology Strategist of Infinite Red
              </footer>
            </blockquote>
            <blockquote className="border-l-4 pl-5 italic" style={{ borderLeftColor: "var(--color-primary)" }}>
              <p className="mb-2">&ldquo;Rob is great! I highly recommend working with him if you get the chance!&rdquo;</p>
              <footer className="text-sm not-italic" style={{ color: "var(--color-muted)" }}>
                &mdash; Noah Goodhart, Cofounder of Moat (acquired by Oracle)
              </footer>
            </blockquote>
            <blockquote className="border-l-4 pl-5 italic" style={{ borderLeftColor: "var(--color-primary)" }}>
              <p className="mb-2">&ldquo;Rob&apos;s determination to systematically try different approaches until he found the right path is inspiring, informative, and definitely worth emulating!&rdquo;</p>
              <footer className="text-sm not-italic" style={{ color: "var(--color-muted)" }}>
                &mdash; Charlyn Keating, Founder, Appreneur Summit
              </footer>
            </blockquote>
            <blockquote className="border-l-4 pl-5 italic" style={{ borderLeftColor: "var(--color-primary)" }}>
              <p className="mb-2">&ldquo;On my short list of people to ping if I ever started a company.&rdquo;</p>
              <footer className="text-sm not-italic" style={{ color: "var(--color-muted)" }}>
                &mdash; Bryan Joseph, Revelry Labs
              </footer>
            </blockquote>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 text-center">
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg font-semibold no-underline transition-colors"
            style={{ backgroundColor: "var(--color-primary)", color: "white", fontFamily: "var(--font-sans)" }}
          >
            Get in Touch
          </Link>
        </section>
      </div>
    </>
  );
}
