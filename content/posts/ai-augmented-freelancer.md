---
title: "The AI-Augmented Freelancer: My 2026 Workflow"
date: "2026-01-09"
slug: "ai-augmented-freelancer"
tags: ["ai", "freelance", "productivity", "career"]
---

I built a state-aware ML regression algorithm for my espresso app. AI helped me ship it in a fraction of the time -- but only because I understood every line.

Since leaving Spring Health in late 2025 to freelance, I've been building a workflow that combines 15+ years of engineering experience with AI tools that genuinely change how fast I can move. Not AI as a gimmick. AI as an accelerant for someone who already knows what they're doing.

Here's what that actually looks like day to day.

## My Daily Workflow: Gemini for Thinking, Claude Code for Building

I use different AI tools for different phases of work, and the distinction matters.

**Gemini is my thinking partner.** When I'm working through a problem -- refining requirements, exploring approaches, debating tradeoffs -- I talk it through with Gemini. It's the best tool I've found for ideation and refinement. I'll describe what I'm trying to build, what constraints I have, and what I'm unsure about. The back-and-forth helps me clarify my own thinking before I write a single line of code.

**Claude Code is my building partner.** Once I know what I want to build, Claude Code helps me build it fast. I set up a CLAUDE.md file with the requirements and context, use plan mode to review the approach, and then execute. If something needs refinement mid-build, I'll sometimes hop back to Gemini, clarify my thinking, then return to Claude Code with sharper direction.

**GitHub Copilot fills the gaps.** For inline code completion while I'm in the editor, Copilot handles the small stuff -- autocompleting patterns, suggesting the next line, filling in boilerplate. It's the background hum of AI assistance.

**Codex for specific tasks.** When I need to understand an unfamiliar codebase quickly or generate targeted implementations, Codex has its place.

> The mistake most people make is trying to find one AI tool that does everything. The right approach is using each tool for what it's best at.

## Why Requirements Matter MORE With AI, Not Less

Here's the counterintuitive thing about working with AI: **the faster you can build, the more important it is to know what you're building.**

Without AI, building the wrong thing costs you weeks. With AI, building the wrong thing costs you days -- but you can build the wrong thing in five different directions before you realize none of them are right.

I've seen developers hand vague requirements to AI tools and accept whatever comes back. The code compiles, the tests pass, and it's completely wrong. Not wrong in a "this crashes" way. Wrong in a "this solves the wrong problem" way.

My process: requirements first, always. Before I open Claude Code, I know:

- What problem I'm solving
- What "done" looks like
- What the edge cases are
- What I'm NOT building (scope boundaries)

This discipline existed before AI. But AI makes it more important, not less. When your implementation speed is essentially unlimited, your bottleneck becomes the quality of your specifications.

## The Burrfect Case Study: What I Built and How AI Helped

Burrfect is my espresso app. It uses ML and statistical algorithms to predict espresso recipes and auto dial-in based on over 10,000 recorded shots.

The core challenge was building a state-aware regression algorithm. It needed to:

- Cache data for high performance (espresso enthusiasts don't wait for loading spinners)
- Combine several regression models to maximize recipe relevance
- Maintain state awareness across sessions so predictions improve over time
- Handle edge cases like new beans, new grinders, and changing environmental conditions

Claude Code helped me iterate through approaches rapidly. I could describe an algorithm variation, get an implementation, test it against real data, and try a different approach -- all within hours instead of days.

**But here's the critical part: I couldn't have built this without understanding every function.**

When the algorithm produced a weird prediction -- recommending 18 grams of coffee for a bean that clearly needed 20 -- I needed to know exactly where to look. Was it the regression weighting? The state cache? A data normalization issue? AI can't debug domain-specific problems if you don't understand the domain.

> AI didn't write this algorithm for me. AI helped me write this algorithm faster. The difference is everything.

I started with the hardest problem first at the lowest scale possible -- one bean, one grinder, one set of parameters. Got the model working. Verified it against real shots. Then scaled up. This "hard first, small first" approach saved me from building scaffolding for an approach that might not work.

## Testing With AI: Making Sure It Actually Works

Testing with AI tools is both easier and more dangerous than without.

**Easier** because you can generate comprehensive test suites quickly. Claude Code can write unit tests, edge case tests, and integration tests alongside the implementation. The coverage you get is often better than what you'd write manually.

**More dangerous** because the AI writes tests that validate its own assumptions. If the implementation is wrong in a subtle way, the tests will be wrong in the same subtle way. They'll pass. You'll feel confident. And you'll be wrong.

My approach: AI writes the tests, but I validate against real-world data. For Burrfect, that meant testing predictions against thousands of actual espresso shots. The algorithm either predicts a good recipe or it doesn't -- no test suite can fake that.

For client work, this means testing against real user flows, real API responses, and real edge cases -- not just the happy paths the AI anticipated.

## What AI Changes About Freelancing

**Scope.** As a solo freelancer, I can now take on projects that would have required a small team. Building a full-stack mobile app with a backend, an ML pipeline, and a marketing site? That used to be a three-person job. With the right AI workflow, it's a one-person job that moves at a competitive speed.

**Speed.** Client timelines that would have been aggressive are now comfortable. Not because I'm cutting corners, but because the implementation phase -- the part where you're translating a known solution into code -- is dramatically faster.

**Competitiveness.** I can compete on price with less experienced developers while delivering senior-level architecture and code quality. Or I can compete on quality with developers at the same price point. AI amplifies whatever advantage you already have.

> The freelancers who will thrive in 2026 aren't the ones who use the most AI. They're the ones who combine real expertise with AI to deliver outcomes that neither could produce alone.

## What AI Doesn't Replace: Domain Expertise and Judgment

After 15 years building software, I've developed judgment that no AI tool can replicate.

**Knowing when to stop.** AI will happily keep building. It will add features, refactor code, and suggest improvements forever. Knowing when the solution is good enough -- when more complexity will hurt more than it helps -- requires experience.

**Knowing what to build.** AI can build anything you describe. Describing the right thing requires understanding users, markets, and business constraints that come from years of shipping products and watching them succeed or fail.

**Knowing when the AI is wrong.** Claude Code produces code with the same confidence whether it's perfect or subtly broken. Recognizing the difference requires understanding the domain well enough to smell when something is off.

**Architecture decisions.** Should this be a microservice or a monolith? Should the state live on the client or the server? Is this level of abstraction helping or hurting? These are judgment calls that AI can inform but shouldn't make.

The developers I worry about aren't the ones ignoring AI. They're the ones who think AI replaces the need to deeply understand their craft. It doesn't. It raises the bar.

> AI is a force multiplier. Multiply zero expertise by any amount of AI and you still get zero. Multiply 15 years of experience by the right AI tools and you get something powerful.

That's the bet I'm making as a freelancer in 2026. So far, it's paying off.
