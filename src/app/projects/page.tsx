import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Projects",
};

interface Project {
  name: string;
  role: string;
  description: string;
  tags: string[];
}

const projects: Project[] = [
  {
    name: "Spring Health",
    role: "Senior Engineering Manager",
    description:
      "Led mobile team that brought the app from a 2.2 to an industry-leading 4.9 rating. Later managed the Covered Lives team, building experimentation frameworks and personalized funnels to dramatically increase member conversions.",
    tags: ["React", "TypeScript", "Ruby on Rails", "AWS"],
  },
  {
    name: "Burrfect",
    role: "Founder & Developer",
    description:
      "Personal espresso app using complex ML and statistical algorithms to predict espresso recipes and auto dial-in. Over 10,000 espresso shots recorded.",
    tags: ["Flutter", "ML", "Statistics"],
  },
  {
    name: "GifShare & GifLab",
    role: "Founder",
    description:
      "Built from scratch and grew to over 2 million downloads. Acquired by Daneco LTD in September 2016. Featured on Fox Business, IndieHackers, and Yahoo.",
    tags: ["Swift", "Objective-C", "Node.js", "Firebase"],
  },
  {
    name: "iClicker (Macmillan)",
    role: "Engineering Manager / Mobile Lead",
    description:
      "Managed architecture, CI/CD, and full development lifecycle for iOS & Android. Found product opportunities to help iClicker adjust to the pandemic.",
    tags: ["Flutter", "React Native", "iOS", "Android"],
  },
  {
    name: "HEB / MyHEB",
    role: "Senior iOS Architect",
    description:
      "Designed architecture for grocery search UI and networking layer for greenfield projects. Achieved 99.8% crash-free rate on over 3M+ monthly sessions.",
    tags: ["Swift", "iOS", "Architecture"],
  },
  {
    name: "Kubota",
    role: "iOS Lead & Client PoC",
    description:
      "Refactored app architecture to drastically reduce bugs and crashes. Grew the team from 2 to 6 developers. Led client sprint review meetings.",
    tags: ["Swift", "Azure", "AWS", "MongoDB"],
  },
  {
    name: "Moat (Oracle)",
    role: "Consultant",
    description:
      "Built greenfield and skunkworks-style projects working directly with the founder of the #1 ad search engine in the world.",
    tags: ["iOS", "Full Stack"],
  },
  {
    name: "Memorandom & Syft",
    role: "CTO / Technical Founder",
    description:
      "Technical founder of a funded social app startup. Built a private social network similar to Snapchat. Featured on Yahoo!, LinkedIn blogs, and Nola.com.",
    tags: ["iOS", "Android", "Node.js", "Objective-C"],
  },
  {
    name: "Ship Your Side Projects",
    role: "Founder & Organizer",
    description:
      "Austin-based meetup helping people advance their careers on the side. Members founded LLCs, wrote novels, created high-traffic blog posts, and landed jobs.",
    tags: ["Community", "Mentorship"],
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHeader title="Projects" subtitle="A selection of products and teams I've built" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="space-y-8">
          {projects.map((project) => (
            <div key={project.name} className="border border-gray-200 rounded-lg p-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h2 className="text-xl" style={{ color: "var(--color-heading)" }}>
                  {project.name}
                </h2>
                <span className="text-sm" style={{ color: "var(--color-muted)" }}>
                  {project.role}
                </span>
              </div>
              <p className="mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: "#e8f4f8", color: "var(--color-primary)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
