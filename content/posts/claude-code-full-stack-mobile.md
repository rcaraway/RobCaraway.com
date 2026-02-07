---
title: "How I Use Claude Code as a Full Stack Mobile Developer"
date: "2026-02-06"
slug: "claude-code-full-stack-mobile"
tags: ["ai", "mobile-development", "productivity", "claude-code"]
---

I've shipped an ML-powered espresso app, a full website, and client work -- all with Claude Code as my copilot. Here's the workflow I've landed on after months of real production use.

This isn't a tutorial. It's the system I use every day, battle-tested on real projects with real deadlines. Some of these habits took me embarrassingly long to figure out.

## The CLAUDE.md Philosophy

Every project starts with an empty `CLAUDE.md` file.

CLAUDE.md is a markdown file that sits in your project root. Claude Code reads it automatically and treats it as living context -- your requirements, your rules, your decisions. I don't try to write the perfect one upfront. I start blank and **add to it as I go.**

Working on an API integration? I'll add the endpoint patterns and auth approach to CLAUDE.md after we nail it down. Found a weird edge case? That goes in too. Over time, the file becomes the single source of truth for the project.

> The key insight: CLAUDE.md isn't documentation. It's a conversation memory that keeps Claude Code from repeating mistakes or asking you the same questions.

This means when I come back to a project after a week away, Claude Code already knows the decisions we made. No re-explaining. No context loss.

## Cross-Stack Project Organization

Here's something that changed how I work: **I keep everything in the same parent folder.**

My Burrfect project has the Flutter app, the backend APIs, marketing materials, and design references all under one parent directory. Claude Code can see all of it. When I'm building a feature that touches the mobile UI, the API, and the data model, I don't have to context-switch between separate repos or explain how they connect.

I define projects cross-stack. My CLAUDE.md might reference the API schema when I'm working on the mobile client. It might reference the marketing copy when I'm building onboarding screens. Everything is connected because in reality, everything IS connected.

I also develop agents and define project-level context for different concerns -- marketing, designs, APIs -- so Claude Code understands what role it's playing at any given time.

## Start Hard, Start Small

This is the habit that saves me the most time: **hardest problems first, lowest scale possible.**

When I was building the regression algorithm for Burrfect -- a state-aware ML system that predicts espresso recipes based on 10,000+ recorded shots -- I didn't start by trying to make it work across every coffee bean and grinder combination. I started with one bean, one grinder, one set of parameters.

Get the model working on a single case. Verify it. Understand it. Then scale up.

> If a model or API doesn't work on one thing, it won't magically work on a thousand things. But we waste enormous time discovering that after we've built all the scaffolding for scale.

This applies to everything. New API integration? Get it working for one endpoint first. New UI pattern? Build it for one screen before creating the reusable component. Low scale before scaling up -- make sure the foundation is solid.

## Why Plan Mode Over Auto Mode

I always use plan mode. I do NOT use auto mode or fully autonomous workflows.

This is a strong opinion, and I know it's not the popular one. A lot of developers are excited about letting AI run on its own, make decisions, chain actions together autonomously. I get the appeal.

But here's what I've found: **Claude Code is at its best when humans review everything.**

Plan mode means Claude Code proposes a plan, I review it, and then it executes. At every step, I can course-correct. I can catch a bad assumption before it cascades into five files of wrong code. I can say "actually, let's use this pattern instead" before any code is written.

Auto mode might feel faster. But the time you save by skipping review, you lose tenfold when you have to untangle autonomous decisions that went sideways three steps ago.

> The developers I've seen struggle most with AI tools are the ones who treat them like magic. The developers who thrive treat them like a very fast, very capable junior engineer who needs clear direction.

Requirements are everything. Testing is everything. AI amplifies your process -- if your process is "let it figure things out," that's what gets amplified.

## Testing as Part of the Workflow

Testing isn't something I do after building with Claude Code. It's part of the building.

When I define a feature in CLAUDE.md, I include what "working" looks like. When I ask Claude Code to build something, I ask it to write tests alongside the implementation. When the tests pass, I still verify manually because **tests prove the code does what we asked -- not that we asked for the right thing.**

This is especially important with AI-assisted development. Claude Code can produce code that looks right, passes the tests it wrote, and still misses the point entirely. The human review layer catches that.

For Burrfect's algorithm, I had test data from thousands of real espresso shots. I could verify that the regression predictions actually matched reality. That's the gold standard -- testing against real-world data, not just unit tests.

## Real Examples

**Burrfect:** The regression algorithm was the hardest thing I've built with Claude Code. It caches data for high performance, combines several regression models to maximize recipe relevance, and maintains state awareness across sessions. Claude Code helped me iterate through approaches rapidly -- but I had to understand every function. When the algorithm produced a weird prediction, I needed to know exactly where to look.

**RobCaraway.com:** I built this entire site with Claude Code. Hexo static site, blog posts, project pages, deployment pipeline. The cross-stack organization meant Claude Code could work on the content, the templates, and the configuration all in context.

**Consulting work:** For client projects, CLAUDE.md becomes even more valuable. It captures client-specific requirements, API contracts, design system rules. When I come back to a client project after working on something else, the context is preserved.

## Pitfalls and What to Watch For

**Don't skip understanding.** This is the biggest one. I couldn't have built Burrfect's algorithm without understanding every function, every regression model, every edge case. AI doesn't replace understanding -- it accelerates building once you have it.

**Don't let CLAUDE.md get stale.** If your requirements change and you don't update the file, Claude Code will keep working from outdated context. Treat it like code -- keep it current.

**Don't trust the first solution.** Claude Code's first suggestion is often good, sometimes great, occasionally wrong in subtle ways. Plan mode gives you the chance to evaluate before committing.

**Watch for confident wrongness.** Claude Code won't tell you it's unsure. It will produce code with the same confidence whether it's a trivial string operation or a complex algorithm it's getting subtly wrong. Your job is knowing the difference.

> The developers who will thrive in the AI era aren't the ones who delegate the most to AI. They're the ones who use AI to amplify the judgment they've spent years developing.

I've been building software for over 15 years. Claude Code is the most impactful tool I've added to my workflow in a decade. But it's a tool -- and like any tool, it's only as good as the hands guiding it.
