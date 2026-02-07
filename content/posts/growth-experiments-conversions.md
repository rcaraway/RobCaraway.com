---
title: "How We Ran Growth Experiments That Dramatically Increased Conversions"
date: "2026-01-30"
slug: "growth-experiments-conversions"
tags: ["growth-engineering", "experimentation", "engineering-management", "strategy"]
---

I inherited a chaotic growth team. Within months, we had an experimentation machine that dramatically increased member conversions. Here's exactly how we did it.

At Spring Health, I took over the Covered Lives team -- the team responsible for converting people into platform users. When I arrived, the team was struggling. Projects were disorganized, priorities were unclear, and the conversion funnel was underperforming. The team had every type of developer you could ask for -- backend, frontend, mobile, full stack -- plus daily collaboration with data science and marketing. But raw talent doesn't matter without direction.

**The first thing I did was build a system, not launch a feature.**

## The State of the Team When I Took Over

The team had the right people but no framework. Experiments were ad hoc. Someone would have an idea, it would get half-built, results would be ambiguous, and the next idea would start before anyone learned from the last one.

There was no queue. No process for deciding what to test next. No consistent way to measure whether an experiment actually worked.

> When you don't have a system for experimentation, you're not experimenting. You're guessing with extra steps.

The team also lacked infrastructure for personalization. We were showing every user the same experience regardless of who they were, where they worked, or what they needed. For a B2B2C healthcare platform where users ranged from construction workers to office employees, that's a massive missed opportunity.

## Building the Experimentation Framework

I focused on three things:

**1. Always have experiments queued and ready to launch.** We built a pipeline where the next experiment was always designed, reviewed, and staged before the current one finished. No dead time between experiments. When one concluded, the next one launched within days, not weeks.

**2. Build the infrastructure for personalization.** We invested in the plumbing to personalize funnels based on different personas. This meant adding fields to our PostgreSQL database via rake tasks, building data preparation pipelines, and wiring up LaunchDarkly for feature flagging and Mixpanel for measurement.

**3. Make decisions from data, not opinions.** Every experiment had a clear hypothesis, a defined success metric, and a predetermined sample size before we launched. No moving the goalposts after seeing early results.

The framework wasn't complicated. But it was disciplined. And discipline is what turns a chaotic team into an experimentation machine.

## Experiment 1: Personalized Onboarding by Industry

**The hypothesis:** If we show users content relevant to their industry during onboarding, more of them will complete the signup flow.

Our platform served companies across many industries. A construction worker signing up for mental health benefits has very different motivations and concerns than a software engineer. But we were showing both of them the same generic onboarding experience.

**What we built:** We pulled industry data from our Rails backend and used it to personalize the onboarding copy and imagery. Construction workers saw people in hard hats and yellow vests. Office workers saw something that looked like their world. The copy adjusted to speak to industry-specific concerns.

The technical work wasn't glamorous. We added industry classification fields to our user data pipeline, built the conditional rendering logic on the frontend, and set up the LaunchDarkly flags to control the rollout.

> The best growth experiments aren't technically impressive. They're the ones that correctly identify what users need to see to take the next step.

**The result:** Signups increased significantly. The personalization made users feel like the platform was built for people like them -- not for some generic corporate wellness checkbox.

## Experiment 2: The Dependent Pre-Qualification Screen

**The hypothesis:** If we ask users whether they have dependents BEFORE showing them the invite screen, we can increase dependent conversions by filtering out noise and creating intent.

Spring Health allows members to add their dependents -- spouses, kids -- to the platform. The more covered lives, the more value for both the employer and the users. But the dependent invite flow was underperforming.

**What we built:** A simple pre-qualification screen. Before showing the full dependent invite experience, we asked: "Do you have dependents you'd like to add?" Users who said yes were primed and ready for the invite flow. Users who said no skipped it entirely.

This sounds almost too simple. But that's what made it powerful. **The screen filtered out users who would have bounced anyway and created commitment from users who did have dependents.** By the time they reached the invite screen, they'd already said "yes" once.

**The result:** Dependent conversions increased. The pre-qualification step eliminated the friction of showing an irrelevant flow to uninterested users while simultaneously priming interested users to convert.

## Experiment 3: The Dependent Reminder (The Biggest Win)

**The hypothesis:** Users who have already signed up and are actively using the platform are the best candidates to add dependents -- if we remind them at the right time.

This was the experiment that moved the needle the most.

We had thousands of active users who had dependents but hadn't added them to the platform. These users already trusted Spring Health. They already used it. They just hadn't thought about extending it to their family.

**What we built:** A prompt for already-signed-up users reminding them that they might have dependents eligible for coverage. The timing was deliberate -- we showed it after users had established engagement with the platform, not during their first session.

The technical implementation leveraged our existing personalization infrastructure. We identified users who likely had dependents based on available data, then served the prompt through our experimentation pipeline.

> Sometimes the biggest growth wins aren't about acquiring new users. They're about unlocking value from users you already have.

**The result:** This dramatically increased covered lives. Users who were already bought in on the platform were far more receptive to adding their families than users who hadn't even finished signing up themselves.

## The Technical Infrastructure That Made It Possible

None of these experiments would have worked without the plumbing we built first:

- **LaunchDarkly** for feature flagging and controlled rollouts. Every experiment was behind a flag. We could kill anything instantly if something went wrong.
- **Mixpanel** for event tracking and funnel analysis. We instrumented every step of every flow so we knew exactly where users dropped off.
- **PostgreSQL field additions via rake tasks** for new data points. When an experiment needed user data we didn't have, we added it to the pipeline.
- **Data preparation pipeline** built in collaboration with data science. Raw data became experiment-ready segments.

The infrastructure investment upfront meant that launching a new experiment went from weeks of setup to days. That speed compounded -- more experiments per quarter meant more learning, more wins, and faster iteration on losers.

## Lessons: What Makes a Good Growth Experiment

After running this team and watching experiments succeed and fail, here's what I've learned:

**Start with behavior, not features.** The best experiments change what users see or when they see it -- not what the product does. All three of our biggest wins were about showing the right thing to the right person at the right time.

**Simple beats clever.** The dependent pre-qualification screen was one screen with one question. It outperformed far more complex experiments. Don't over-engineer your hypothesis.

**Sequence matters.** We ran the personalized onboarding experiment first because it improved the top of the funnel. That gave us more users flowing into the dependent experiments downstream. Order your experiments to compound.

**Invest in infrastructure early.** The personalization pipeline and experimentation framework took time to build. But once they existed, every subsequent experiment was faster and cheaper to run. If your team is constantly rebuilding experiment infrastructure from scratch, you'll never build the cadence you need.

**Measure what matters, not what's easy.** Signup completions and dependent conversions were our north stars. We didn't get distracted by vanity metrics like page views or time on page.

> The difference between a chaotic team and an experimentation machine isn't talent. It's having a system that turns ideas into validated outcomes as fast as possible.

We went from a team that was struggling to ship anything coherent to one that had experiments always running, always learning, always improving. The conversions followed.
