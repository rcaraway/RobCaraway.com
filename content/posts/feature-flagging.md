---
title: "Feature Flagging"
date: "2020-07-02"
slug: "feature-flagging"
tags: ["growth-engineering", "feature-flags", "strategy"]
---

> This article is part of the complete **[Growth Engineering Guide](https://blog.trendcraft.io/Growth-Engineering/)**.

**A big change to your app can hurt your revenue** -- even with beta testing and focus groups you can't guarantee humans are going to act on a mass scale the way they acted in a contained environment.

**Feature Flagging** - hiding a feature or change behind a on/off switch so you can test it more strategically.

You can even turn it OFF by default, then turn in ON between certain times to test against a limited user base.

###### The Benefits of Feature Flagging:

- Launch features to user segments who will be receptive to it
- Hide feature from certain users who won't benefit from them
- Reduce risk if a feature doesn't improve your metrics the way you thought
- Test out feature ideas to small groups of your users to test if anyone will use it

If you think a feature might not work well immediately or to all users, Feature Flagging can save you risk and make you money.

**My Favorite Feature Flagging Software:**

One of my favorite software is [Rollout.io](https://rollout.io) -- it has a very forgiving pricing structure. For more advance solutions, I'll write about that in an upcoming post on Advanced Analytics. Optimizely & Apptemize will fill that role.

###### The Most Important Capabilities of Feature Flagging

Big apps like Snapchat, Instagram, Amazon and more NEVER release to all users at once. My fiance will see a completely different look on the Amazon app while I have been targeted for the old experience.

**Show a Feature based on a Users Characteristics:**

> If you have an ecommerce app, and they buy products at 8 times more than your average user, you might tag them as a Power User -- then test features that Power Users might like that would otherwise alienate a regular user

Rollout.io and other software will allow you to add certain Properties to your users so you can do this.

Finding creative ways to divide your Users not only reduces risk -- you might find certain users ALWAYS prefer a certain experience and other users NEVER want that experience -- Feature Flagging can remain permanent.

**Target Users who you know the name of:**

If a user didn't fit the mold, but asks to opt in, you can target their specific account too. Rollout supports targeting features by account as do most Feature flagging software.

###### *7 Ideas You Might Consider Feature Flagging for*

**Screen size:** If you're implementing features that might make smaller screens too crowded.

**Device:** When targeting features that might require high performing devices or features for lower end devices.

**OS version or browser type:** When a feature is more likely to work better in a certain browser or operating system. Example: an AR clothes try on feature for your ecommerce app that uses tech not supported on older version of Droid.

**Email, username:** You might even randomly add users to test if a feature is ready for full release.

**The amount of times they opened the app:** You can track properties like "App Opened 5 times" and only show to users who've shown they come back.

**Paying customers only:** Show special features for those who've shown they're willing to pay.

**The language of the app they're using:** Some settings and features work better in some markets and not in others. Why do you think BMW keeps their 3 series station wagons out of the US?

**Any metric you can measure, you can feature flag.**

I've used Feature flags to reduce the risk of optimized code that meant to improve the performance and crash rate of the app by hiding it behind a feature flag.

You never know when launching to millions of users.

###### *How do you know what you should feature flag?*

**Just about every new feature should be behind a feature flag** especially if its a bigger feature.

Once you get your app to a certain amount of users, every slight change is a risk -- your crash free rate going from 99% to 97% might seem like not much, but if you have 500,000 users, that's 10,000 users now experiencing a crash.

## Case Study: Reddit

Reddit has one my favorite examples of Feature Flagging of all time.

In fact, you can still see it.

> **The Situation:** They learned from their mobile app that a new design with faster speed and modern design could drastically improve the retention of their app, and they wanted to do this for the web, too.

> **The problem:** a vast majority of their users were loyal to the current web design.

Even if it wasn't great, they were using it for years and were married to it.

> **The Solution:** Reddit chose to Feature Flag the new design. That's right -- they feature flagged their WHOLE WEBSITE.

They went a step further though. Users also had to agree to opt into the new experience.

This gave them several advantages:

- they were able to work out the kinks in the new design with relatively low risk.
- once kinks were ironed out, they could show it to new users who didn't have experience with the old site
- it kept their old users happy to use their old site as long as they wanted

Eventually, the new experience became SO much better than the old experience they started aggressively pushing the new version.

Many old users eventually made the switch when they were ready.

You can still access both versions:
New: reddit.com
old: Old.reddit.com

For new versions that make sweeping changes to a site, you can imagine this to be the new standard. Showing the new version to a set of users most likely to be okay with it is very important so you don't alienate everyone.

### Next: A/B Testing (Coming Soon)

> This article is part of the complete **[Growth Engineering Guide](https://blog.trendcraft.io/Growth-Engineering/)**.
