---
title: "From 2.2 to 4.9: How We Built the Highest-Rated App in Our Industry"
date: "2026-01-16"
slug: "app-rating-turnaround"
tags: ["mobile-development", "engineering-management", "apps", "strategy"]
---

Our competitors were using our app rating against us in sales calls. Two years later, Microsoft signed with us. Here's how we turned it around.

When I joined Spring Health as a senior mobile engineer in late 2021, the mobile app was rated 2.2 stars. For a healthcare platform competing for enterprise contracts, that rating was a liability. Sales teams were fielding objections in every pitch. Competitors would pull up our App Store page and say "this is who you're considering?"

I was brought on as the first dedicated mobile hire. Within months I was building the team, and by the time I became Engineering Manager, I had a clear mandate: make this app something we're proud of.

## The Starting Point: A Web App Crammed Into a Phone

The app wasn't bad because the engineers were bad. It was bad because **nobody had treated mobile as a first-class platform.**

The mobile app was essentially a wrapper around the web experience. Screens that made sense on a desktop were squeezed onto a phone. Navigation patterns were designed for mouse clicks, not thumb taps. Performance wasn't optimized for mobile constraints. And bugs were piling up because mobile wasn't anyone's primary focus.

The reviews told the story. Users complained about crashes, slow loading, confusing navigation, and features that just didn't work on their phones. For a mental health platform -- where users might be reaching out during vulnerable moments -- a frustrating app experience was more than a product problem. It was a care problem.

> When your app is the front door to mental healthcare, a crash isn't just a bug. It's a person who might not try again.

## Step 1: Build the Team to Move Fast

The first priority wasn't design or architecture. It was **velocity.**

I built a cross-functional mobile-centric team of over 10 people: mobile developers, QA engineers, backend developers, and web developers who supported the mobile experience. The team worked in native iOS, Android, and Flutter.

My philosophy was productivity over perfection in the early months. We needed to reach feature parity with the web app, close the gap on critical bugs, and prove that the mobile team could ship reliably. Perfectionism would have slowed us down when speed mattered most.

This meant ruthless prioritization. We categorized every issue into three buckets:

1. **Blocking:** Crashes, broken core flows, things that make the app unusable
2. **Painful:** Slow screens, confusing UX, things that make users frustrated
3. **Polish:** Nice-to-haves that improve the experience but aren't urgent

We attacked them in that order and didn't let anyone work on bucket 3 until buckets 1 and 2 were under control.

I also invested heavily in the team's growth. Everyone on the team had to be growing. I coached team members to improve their skills, and several got promoted during this period. **A team that's learning is a team that's accelerating.** The returns compound -- developers who improve their craft ship better code faster, which means fewer bugs, which means fewer fires, which means more time for improvement.

## Step 2: Ruthlessly Fix Performance and Bugs

We built an automated release pipeline early. QA builds went out automatically. App Store submissions were streamlined. The time between releases dropped dramatically.

This infrastructure was critical because **fixing bugs fast only matters if you can ship the fixes fast.**

We instrumented everything with crash reporting and analytics. Every crash got triaged. Every ANR (Application Not Responding) got investigated. We set crash-free rate targets and held ourselves to them.

The unglamorous work of fixing bugs and improving performance doesn't make for exciting sprint reviews. But it's the foundation everything else sits on. Users don't notice when your app doesn't crash. They absolutely notice when it does.

We also built an operating model for coordinating mobile releases across several teams. At Spring Health, multiple teams contributed to the mobile app. Without a clear model for who owns what, when things ship, and how conflicts are resolved, releases turn into chaos. We built that model and maintained it.

> The best teams aren't the ones that build the most features. They're the ones that build the right things and ship them without breaking what already works.

## Step 3: Partner With Design for Mobile-Forward UX

Once we had velocity and stability, we shifted focus to the experience.

I worked closely with the design team to rethink the mobile experience from the ground up. Not "how do we make the web screens fit on a phone?" but **"what should this experience feel like when someone opens it on their phone?"**

Those are fundamentally different questions. The first one leads to compromises. The second one leads to good products.

We redesigned navigation for thumb-friendly patterns. We simplified screens that had too much information competing for attention. We optimized flows for the mobile context -- someone on their phone in a waiting room, someone checking in during a lunch break, someone reaching out at 2 AM.

The design partnership was essential. As an engineering team, we could build anything. But building the right thing required understanding user behavior, and that required design thinking. I made it a point to wear both the engineering hat and the UX hat, and I expected my team to do the same.

## The Compounding Effect of Velocity + Quality

Something interesting happens when you combine fast shipping with improving quality: **it compounds.**

Every bug fix improved the rating slightly. Every UX improvement reduced negative reviews. As the rating climbed, new users arrived with better first impressions. Better first impressions meant better retention. Better retention meant more positive reviews.

The cycle accelerated. Going from 2.2 to 3.5 was grinding work -- closing bugs, fixing crashes, shipping reliability improvements. Going from 3.5 to 4.5 was faster because the foundation was solid and we could focus on the experience. Going from 4.5 to 4.9 was about refinement and consistency.

We also became the most productive team by raw output in the entire company. That wasn't a goal we set -- it was a consequence of building the right infrastructure, hiring and growing the right people, and removing friction from the development process.

## The Result: From Sales Liability to Competitive Advantage

The mobile app went from being an obstacle for the sales team to being a key talking point.

Instead of competitors pulling up our App Store page to undermine us, our sales team was pulling it up to showcase us. "Look at our 4.9 rating. Look at what our users say." The app became proof that Spring Health invested in the member experience.

**Microsoft signed shortly after we hit the highest rating in our industry.** I'm not saying the app rating was the only reason -- enterprise sales are complex. But I know the app rating was no longer a reason NOT to sign. And in competitive deals, removing objections is just as important as adding selling points.

## What I'd Tell Any EM Inheriting a Struggling Mobile App

**Don't try to fix everything at once.** Categorize problems by severity and work in order. Users will forgive an ugly screen if the app doesn't crash.

**Invest in your release pipeline immediately.** You can't iterate fast if shipping is slow. Automated builds, automated testing, streamlined App Store submissions -- build this infrastructure on day one.

**Treat your app rating as a lagging indicator, not a goal.** You can't directly control the rating. You can control crash rates, performance, and UX quality. Fix those and the rating follows.

**Partner with design, don't fight with design.** The best mobile experiences come from engineering and design working as one team, not from engineers implementing mockups they disagree with.

**Grow your people.** The technical work matters, but the team matters more. People who are growing are motivated. Motivated people build better products. Better products lead to better ratings. Coach your team, fight for their promotions, and build a culture where everyone is getting better.

> Two years. 2.2 to 4.9. It wasn't magic. It was prioritization, infrastructure, design partnership, and a team that never stopped improving.

If your mobile app is struggling, the good news is: it's fixable. The bad news is: there's no shortcut. But the work is worth it.
