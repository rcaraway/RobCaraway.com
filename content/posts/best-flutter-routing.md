---
title: "Evaluating the Best Flutter Navigation APIs"
date: "2021-08-25"
slug: "best-flutter-routing"
tags: ["flutter", "mobile-development", "navigation"]
---

![Flutter Routing](/images/posts/routing.jpeg)

A team of people found that Flutter Routing APIs, once known as Navigation 2.0, gave developers trouble and challenges -- especially with how it relates to the Web experience, but I found this is important if you're trying to build code that supports everything from the beginning.

They investigated the best of the proposed community solutions, and asked three core questions:

- What are the most common navigation problems
- How is the community proposing we address these problems
- Are those solutions easy to use?

They took a scenario-driven approach.

So they identified the most common navigation problems in Flutter and then tried to get the community-based Router solutions to solve those given scenarios. We'll see what those problems are as I dive into the results.

VRoute, AutoRoute, and Beamer were the chosen options for study which were chosen from a group of 12 because they met all the initial criteria [(you can see that here)](https://github.com/flutter/uxr/tree/master/nav2-usability/comparative-analysis). I've used Beamer so was deeply curious how this turns out.

We will walk through the problem and which package addresses the problems the best. Here are the findings.

##### **Technical problem 1: Deep linking**

All three support deep linking with path parameters way better than standard APIs. Beamer was the easiest to use but AutoRoute provided the most concise code for this problem.

**Their recommendation**: Any of them

##### **Technical problem 2: Sign-In routing**

Where users might need to be redirected to sign in if they try to access a page they aren't authenticated for.

All three packages offer exact APIs to handle this problem.

**Their recommendation (paired with Deep Linking):** VRouter

##### **Technical problem 3: Nested Routing**

When your path has multiple layers -- for example: /users/books and /users/friends may share the same user UI but provide unique nested UI for the books and friends.

These three APIs are all great because they all continue to improve massively over the default APIs.

In a trend, Beamer tended to be the easiest to use and achieve the goal but was the worst when more nuanced behavior was required.

**Their recommendation (paired with Deep Linking):** Beamer or VRouter

**Summary**

My Takeaway is **if you've chosen any one of these three, you've got a good enough solution.**

They seemed to think Beamer was the easiest to plug in but handled edge cases more awkwardly.

VRouter might be ugly if you dislike Regex, and AutoRoute might turn you away if you don't like Codegen.

Shout out to the team for putting this together. I'll probably stick with Beamer for my projects but I'm going to take a deeper dive into VRouter.
