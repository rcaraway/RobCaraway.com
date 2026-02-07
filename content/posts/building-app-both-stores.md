---
title: "Building an App for Both Stores: Lessons from 2M+ Downloads"
date: "2026-01-23"
slug: "building-app-both-stores"
tags: ["apps", "mobile-development", "flutter", "entrepreneurship"]
---

I've launched apps that hit 2 million downloads and apps that got zero traction. Here's what I learned about building for both app stores from over a decade of shipping.

My first few apps were disasters. Nobody wanted them. I spent months building in isolation, launched to crickets, and wondered what went wrong. Then I built GifShare, had 500 users signed up before it even hit the App Store, and eventually sold the company after 2 million downloads.

The difference wasn't talent. It was process.

## Choose Your Stack Wisely

I've built production apps in native iOS (Swift/Objective-C), native Android (Kotlin/Java), React Native, Flutter, and even survived a Xamarin disaster recovery project. Here's when each makes sense:

**Native (Swift/Kotlin):** When you're targeting a single platform and performance is critical. When your app relies heavily on platform-specific APIs like ARKit or advanced camera processing. When you need the absolute best user experience on one platform and have the budget for separate teams later.

**Flutter:** When you need both platforms from day one with a small team. When you want a single codebase that actually performs well. When you might expand to web or desktop later. This is my recommendation for most new projects in 2026.

**React Native:** When your team is primarily JavaScript developers. When you have an existing React web app and want to share code. But be aware -- as your app grows, you'll increasingly need native expertise anyway.

> I've watched an EdTech client abandon React Native out of frustration. The React Native bridge -- the translator between your code and the native platform -- created bugs that were near impossible to diagnose. The bigger the app got, the worse it became.

Flutter avoids the bridge architecture entirely. It renders directly, similar to how game engines work. That's why I'm bullish on it.

## Validate Before You Build

With GifShare, I did something I hadn't done with my previous failures: **I validated the idea before writing a single line of production code.**

I built landing pages. I ran targeted marketing to test whether people actually wanted a better GIF creation app. I collected email addresses. Within a week of testing, I had over 500 people signed up and waiting for the app to launch.

Compare that to Valt, my password manager app. I spent six months building what I thought was a better product than the competition. Prettier UI, smoother experience, better architecture. I launched to silence. Nobody cared. The assumption that "better" would win was wrong.

> The next app I built after Valt, I spent one week on an MVP and already had users lined up. That's a six-month lesson compressed into one sentence.

Here's my validation checklist before building anything:

- **Can you describe the value in one sentence?** If you can't, your users won't understand it either.
- **Will strangers sign up based on a landing page?** Not friends. Not family. Strangers who have no reason to be polite.
- **Is there existing demand?** Check app store reviews of competitors. The complaints are your roadmap.
- **Can you build an MVP in 2-4 weeks?** If not, your scope is too big for validation.

## Start With One Platform, Then Expand

Even if you're using a cross-platform framework, I recommend focusing your energy on one platform first.

When I built GifShare, I went iOS first. The iOS App Store had better discovery at the time, and my target audience skewed iPhone. Once GifShare proved the model on iOS, expanding to Android was a known-quantity investment, not a gamble.

At Spring Health, we had both platforms from day one because the business required it. But even there, we'd often prototype on one platform, validate the approach, and then build for both. **The key is reducing the number of unknowns you're dealing with simultaneously.**

If you're using Flutter, you get both platforms nearly free -- but you still need to test on both. Android fragmentation is real. What looks perfect on a Pixel might break on a Samsung. Budget time for platform-specific QA even with cross-platform tools.

## The Release Pipeline Matters More Than You Think

At Spring Health, one of the first things I built was an automated pipeline for releasing QA builds and publishing to the App Stores.

This sounds boring compared to building features. But **the teams that ship fast are the teams that have removed friction from shipping.**

Before the pipeline, releasing a build was a manual process that took hours and required specific people to be available. After, it was automated. QA builds went out on every merge. App Store submissions were one button.

The result: we kept time between releases very low. When we found a bug, we could fix and ship within days instead of weeks. When a feature was ready, it didn't sit in a queue waiting for someone to manually build and upload.

Here's what a good release pipeline includes:

- **Automated QA/beta builds** on every merge to main
- **Automated App Store submission** with one-click publishing
- **Crash reporting** integrated from day one (Crashlytics, Sentry)
- **Feature flags** so you can ship code that's not yet visible to users

At HEB, we achieved 99.8% crash-free on over 3 million monthly sessions. That doesn't happen by accident. It happens because you have the infrastructure to catch, fix, and ship fast.

## Design for Mobile-First, Not Web-Shrunk

When I joined Spring Health as a mobile engineer, the app was essentially a poor copy of the web experience crammed into a phone. Our competitors were using our 2.2 star rating against us in sales calls.

**The problem wasn't the code. It was the approach.** Shrinking a web app into a mobile screen doesn't work. Mobile users have different contexts, different expectations, and different patience thresholds.

Over the next two years, we rebuilt the mobile experience to be mobile-forward:

- Navigation patterns that made sense for thumbs, not mice
- Content prioritization for small screens
- Performance optimization for spotty cellular connections
- Push notification strategies that drove engagement without annoying users

The app went from a 2.2 to a 4.9 -- the highest-rated in our industry. What was a sales liability became a selling point. Microsoft signed with us shortly after.

> The lesson isn't "make it pretty." It's "design for the context your users are actually in." A healthcare app on someone's phone is being used in a waiting room, on a lunch break, at 2 AM when they can't sleep. Design for that.

## The Metrics That Matter at Launch vs Growth

**At launch, you care about:**

- **Retention** (Day 1, Day 7, Day 30). Are people coming back? If not, nothing else matters.
- **Core action completion rate.** Whatever the main thing your app does -- are users actually doing it?
- **Crash-free rate.** Below 99% and you're losing users to frustration.

**At growth, you care about:**

- **Conversion funnel metrics.** Where do users drop off? Where can you intervene?
- **Cohort analysis.** Are newer users retaining better than older ones? Your product should improve over time.
- **Revenue per user.** Downloads are vanity. Revenue is sanity.

GifShare taught me this the hard way. We hit 2 million downloads, which sounds incredible. But downloads without retention and monetization are just a number. The apps that won long-term were the ones that obsessed over keeping users, not just acquiring them.

## What I'd Do Differently Today

If I were building GifShare today, I'd use Flutter and ship to both platforms from day one. I'd use Claude Code to accelerate development and spend more time on validation and less on implementation. I'd build the analytics and experimentation infrastructure from week one instead of bolting it on later.

I'd also be more aggressive about killing features that don't move metrics. We kept features in GifShare for months because "users might miss them." Most of them added complexity without adding value.

**The fundamentals haven't changed though.** Validate before you build. Start small. Ship fast. Measure everything. Listen to your users more than your assumptions.

> The apps that win aren't the ones with the most features or the prettiest UI. They're the ones that solve a real problem for a specific group of people and iterate faster than the competition.

That was true when I launched GifShare in 2014. It's true in 2026. The tools are better, but the game is the same.
