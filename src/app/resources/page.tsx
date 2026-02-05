import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Resources to Build Your Career On",
};

interface Resource {
  title: string;
  url: string;
  description: string;
}

interface ResourceCategory {
  name: string;
  resources: Resource[];
}

const categories: ResourceCategory[] = [
  {
    name: "On Time Management and Productivity",
    resources: [
      {
        title: "The Power of Full Engagement",
        url: "https://www.amazon.com/Power-Full-Engagement-Managing-Performance/dp/0743226755",
        description:
          "Early in my career I worked long hours till I learned it isn't about working hard, it's about using your energy effectively. Go out and have some fun, your work life will be better for it.",
      },
      {
        title: "The Effective Executive",
        url: "https://www.amazon.com/Effective-Executive-Definitive-Harperbusiness-Essentials/dp/0060833459",
        description:
          "What separates highly effective people is their ability to prioritize the right things.",
      },
      {
        title: "The Power of Habit",
        url: "https://www.amazon.com/Power-Habit-What-Life-Business/dp/081298160X",
        description:
          "Learning how to manipulate your habits leads to plenty of power over your life.",
      },
      {
        title: "James Clear's talk on getting better",
        url: "https://www.youtube.com/watch?v=mNeXuCYiE0U",
        description:
          "If you want to be the best, it'll happen through one small tweak to your life at a time.",
      },
    ],
  },
  {
    name: "On Programming",
    resources: [
      {
        title: "The Pragmatic Programmer",
        url: "https://www.amazon.com/Pragmatic-Programmer-Journeyman-Master/dp/020161622X",
        description: "This classic is a classic for a reason.",
      },
      {
        title: "Clean Code",
        url: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882",
        description:
          "I read this as one of my first programming books, and have never not been a stickler for readable code.",
      },
      {
        title: "Advanced Swift",
        url: "https://www.objc.io/books/advanced-swift/",
        description:
          "One of the best books on a specific programming language I've ever read.",
      },
      {
        title: "Cracking the Coding Interview",
        url: "https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850",
        description:
          "The best preparation book you'll find for getting a job in tech.",
      },
    ],
  },
  {
    name: "On Design",
    resources: [
      {
        title: "Design for Hackers",
        url: "https://www.amazon.com/Design-Hackers-Reverse-Engineering-Beauty/dp/1119998956",
        description:
          "As programmers, we often work closely with design, and it's important we understand the basic mechanics of how they do what they do.",
      },
      {
        title: "Logo Design Love",
        url: "https://www.amazon.com/Logo-Design-Love-Creating-Identities/dp/0321985206",
        description:
          "A deeper look into the process of how a designer uncovers all the important research and exercises to represent a brand through logos.",
      },
    ],
  },
  {
    name: "On Communicating Better",
    resources: [
      {
        title: "The Boron Letters",
        url: "https://www.amazon.com/Boron-Letters-Gary-C-Halbert/dp/1484825985",
        description:
          "The best work on learning how to sell through writing which you do ALL THE TIME in emails, presentations, and more.",
      },
      {
        title: "How To Sell Anything to Anybody",
        url: "https://www.amazon.com/How-Sell-Anything-Anybody-Girard/dp/0743273966",
        description:
          "When done right, good sales are more about trust and relationships.",
      },
      {
        title: "How to Win Friends and Influence People",
        url: "https://www.amazon.com/How-Win-Friends-Influence-People/dp/0671027034",
        description:
          "One of the most effective things a programmer can do to stand out is be an enjoyable person to be around.",
      },
    ],
  },
  {
    name: "On Discipline",
    resources: [
      {
        title: "The Obstacle is the Way",
        url: "https://www.amazon.com/Obstacle-Way-Timeless-Turning-Triumph/dp/1591846358",
        description:
          '"The impediment to action advances action. What stands in the way becomes the way." - Marcus Aurelius',
      },
      {
        title: "Tao Te Ching",
        url: "https://www.amazon.com/Tao-Te-Ching-Lao-Tzu/dp/1537196472",
        description:
          "An excellent book to keep at your bedside for wisdom before sleep.",
      },
      {
        title: "Jiro Dreams Of Sushi",
        url: "https://www.youtube.com/watch?v=0VB_DrsHDQ0",
        description:
          "An inspiring documentary on Jiro who mastered the craft of sushi.",
      },
    ],
  },
  {
    name: "On Happiness",
    resources: [
      {
        title: "The Conquest of Happiness",
        url: "https://www.amazon.com/Conquest-Happiness-Bertrand-Russell/dp/087140673X",
        description:
          "Bertrand Russell lays out how he believes happiness is achieved in an early twentieth century writing that feels remarkably contemporary.",
      },
      {
        title: "Alain de Botton's talk on Pessimism",
        url: "https://www.youtube.com/watch?v=Aw1oLtuJOXQ",
        description:
          "As someone who's always identified as an optimist, this talk first made me want to reject it, but the more I've thought about it, the more I've agreed with it.",
      },
      {
        title: "John Cleese talk on being serious",
        url: "https://www.youtube.com/watch?v=h7fyOLe-xn4",
        description:
          "There's nothing wrong with being serious and having serious goals as long as you don't take them too seriously.",
      },
    ],
  },
  {
    name: "On General Self Improvement",
    resources: [
      {
        title: "I Will Teach You to be Rich",
        url: "https://www.amazon.com/Will-Teach-You-Be-Rich/dp/0761147489",
        description:
          "Despite its scammy title, the most practical book I've read on personal finance.",
      },
      {
        title: "The Truth",
        url: "https://www.amazon.com/The-Truth/dp/B00RMGSJY4",
        description:
          "A great look at creating a lasting relationship for wildly ambitious people.",
      },
      {
        title: "4 Hour Body",
        url: "https://www.amazon.com/4-Hour-Body-Uncommon-Incredible-Superhuman-ebook/dp/B003EI2EH2",
        description:
          "The best diet and workout program is the one you sustain.",
      },
      {
        title: "The Prosperous Coach",
        url: "https://www.amazon.com/Prosperous-Coach-Increase-Income-Clients/dp/B01COOE34S",
        description:
          "Knowing how to coach and teach others professionally is a huge way to make yourself better at the thing you're teaching.",
      },
    ],
  },
  {
    name: "On Career Growth",
    resources: [
      {
        title: "Show Your Work",
        url: "https://www.amazon.com/Show-Your-Work-Creativity-Discovered-ebook/dp/B00GU2RGGI",
        description:
          "An easy read book that will help you find strategies to GET YOUR WORK OUT THERE.",
      },
      {
        title: "Outliers",
        url: "https://www.amazon.com/Outliers-Story-Success-Malcolm-Gladwell-ebook/dp/B001ANYDAO",
        description:
          "A fun read that teaches how success really happens.",
      },
      {
        title: "48 Laws of Power",
        url: "https://www.amazon.com/48-Laws-Power-Robert-Greene-ebook/dp/B0024CEZR6",
        description:
          "This book might make you feel uneasy after reading, but it's important to understand the power games being played around you.",
      },
    ],
  },
  {
    name: "On Startups",
    resources: [
      {
        title: "Crossing the Chasm",
        url: "https://www.amazon.com/Crossing-Chasm-3rd-Disruptive-Mainstream-ebook/dp/B00DB3D81G",
        description:
          "Probably the biggest reason most promising startups fail.",
      },
      {
        title: "Disciplined Entrepreneurship",
        url: "https://www.amazon.com/Disciplined-Entrepreneurship-Steps-Successful-Startup-ebook/dp/B00DQ97TWO",
        description:
          "Perhaps the most scientific take I've read on creating a company from scratch, written from the perspective of MIT grads.",
      },
      {
        title: "The Lean Startup",
        url: "https://www.amazon.com/s?k=the+lean+startup",
        description:
          "More than just showing how effective entrepreneurship works, this book can be applied to just about ANY business process.",
      },
    ],
  },
  {
    name: "On Personal Entrepreneurship",
    resources: [
      {
        title: "Lean Analytics",
        url: "https://www.amazon.com/Lean-Analytics-Better-Startup-Faster-ebook/dp/B00AG66LTM",
        description:
          "One of the absolute best looks at building a company by interviewing customers and looking at the right metrics.",
      },
      {
        title: "Running Lean",
        url: "https://www.amazon.com/s?k=running+lean",
        description:
          "Another fantastic book on interviewing people and staying nimble when creating a company.",
      },
      {
        title: "Zero To Launch (Online Course)",
        url: "https://growthlab.com/products/zerotolaunch/",
        description:
          "Amazing for learning to separate yourself as a thought leader and creating a business through content.",
      },
    ],
  },
  {
    name: "My 3 Favorite Biographies and Memoirs",
    resources: [
      {
        title: "Sam Walton: Made in America",
        url: "https://www.amazon.com/Sam-Walton-Made-America/dp/0553562835",
        description:
          "While Walmart has come to be something we hate, Sam Walton's work ethic and approach to life is inspiring.",
      },
      {
        title: "Steve Jobs",
        url: "https://www.amazon.com/Steve-Jobs-Walter-Isaacson/dp/1501127624",
        description:
          "He was an imperfect human, potentially even worth despising, but his life is a fascinating read.",
      },
      {
        title: "The Score Takes Care of Itself",
        url: "https://www.amazon.com/Score-Takes-Care-Itself-Philosophy/dp/1591843472",
        description:
          "One of the best books on leadership and achieving mastery.",
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        title="Resources to Build Your Career On"
        subtitle="Books, talks, and courses that have shaped my thinking"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <p className="text-lg leading-relaxed mb-4">
          I believe one of the most important traits of having success is being well rounded.
          And a huge part of being well rounded is educating yourself on a lot of different topics that make you better.
        </p>
        <blockquote className="border-l-4 pl-5 italic mb-8" style={{ borderLeftColor: "var(--color-primary)" }}>
          <p>
            You can be the best programmer in the world, but if you don&apos;t know how to find work,
            communicate your skill to others, work effectively with a team, or keep your wits about
            you in stressful situations, then it doesn&apos;t matter.
          </p>
        </blockquote>

        <div className="space-y-10">
          {categories.map((category) => (
            <section key={category.name}>
              <h2 className="text-xl mb-4">{category.name}</h2>
              <ol className="list-decimal pl-6 space-y-3">
                {category.resources.map((resource) => (
                  <li key={resource.title}>
                    <a href={resource.url} target="_blank" rel="noopener noreferrer">
                      {resource.title}
                    </a>
                    {" "}&mdash; {resource.description}
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
