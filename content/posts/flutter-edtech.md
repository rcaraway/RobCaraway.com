---
title: "Why this native developer of 10 years is bullish on Flutter"
date: "2021-08-11"
slug: "flutter-edtech"
tags: ["flutter", "react-native", "mobile-development", "edtech"]
---

![Bullish on Flutter](/images/posts/bullFlutter.jpeg)

One of my clients came to me with a project they needed salvaging from a disaster state.

The code was written in Xamarin which was causing them huge problems. They had a hard deadline because they promised to show it off during a conference.

The previous developers tried to hack together something quick (without a designer) so they used the language they knew and just levered Xamarin to "move fast".

We had no choice but to stick with it. I identified the biggest glaring issues and focused all efforts on them.

> Like many other experiences with cross-platform frameworks, doing something that would take a minute in Native code took an hour.

Developer resources were scarce -- The Xamarin community was not very helpful so we had to figure out on our own a lot.

We somehow survived that experience and made an app the client was happy enough with but also convinced them to rebuild the app in native Android and iOS for a better product.

I couldn't even recommend React Native, but **had Flutter been around then, I would've recommended it to the client.**

## Why I haven't put my reputation on the line for Cross-Platform

Cross-platform comes in many different flavors, but I will focus on the most popular -- React Native because most cross-platform frameworks try to do what React Native does.

React Native is trusted and used by LOTS of big companies including parts of Instagram, Facebook, recently [Coinbase](https://blog.coinbase.com/announcing-coinbases-successful-transition-to-react-native-af4c591df971), and many others.

React Native is massively popular, very mature, supported by both Facebook and Microsoft, and uses one of the easiest languages to hire for -- Javascript.

So why haven't I trusted it?

React native has three major issues that have kept me away, and in many cases, I think **React Native costs businesses more money than what appears on the surface.**

An Edtech client I worked with built a React Native app for teachers, but later abandoned it out of frustration.

Let's investigate.

### 1. **The React Native Bridge is a business's worst nightmare**

![React Native Bridge](/images/posts/bridge.jpeg)

Here's the way RN creates native apps, over-simplified:

- RN will take the code the developer writes in React Native
- The code will run through the React Native Bridge
- the Bridge will translate that code into Javascript the native platform (like iOS) can understand.
- that Javascript will then run on the native environment for use

> The RN Bridge acts as a translator between React Native and native platforms. And like with any translator, sometimes things get lost in translation.

This causes several issues:

- The bridge can get overwhelmed -- too much to translate at once will slow it down
- The Bridge can throw bugs and crashes that are near impossible to find for developers
- This means developers have to take shot-in-the-dark trial and error attempt to solve these bugs

> **The result is slowing productivity that is hard to forecast and an awful experience for developers and managers.**

When Edtech apps need to rely on engaging students and instructors with little bugs and high performance, this can be a big issue.

The bigger your app gets, the worse these problems get, too.

### 2. React Native doesn't adapt to new business challenges well

![React Native Stressful](/images/posts/stressful.jpeg)

Apps often require adaptation -- its a big bonus to be able to engage students on whatever platform they're using.

React Native uses something called the React Native Command Line Interface (RN CLI) which developers use to use the framework.

> The React Native CLI, however, is too complicated and complex for many use cases, and if used, will require costly onboarding for new developers.

[Expo](https://expo.dev/) was created to avoid the complexity the RNCLI created -- onboarding newbie developers becomes much easier.

The problem here -- **Expo can't access all the code components that are built for regular React Native or might be used to specifically target problems on Android or iOS.**

I've been in project hell where the first developers to build an app committed to using Expo to move fast, but as the project evolved, **Expo became a liability because we needed more complex functionality.**

We would think React Native, being built in React, would make it easy to reuse with Web. But in reality, extending React Native to other platforms like the Web or Desktop, while getting better over time, has been a big pain.

### 3. React Native becomes increasingly platform dependent

The bigger the codebase gets, the more that solutions will require the native codebases (Xcode for iOS for example) to handle edge cases.

Airbnb, [who transitioned away from React Native](https://medium.com/airbnb-engineering/sunsetting-react-native-1868ba28e30a), complained that as the React Native teams grew, they needed to hire more native developers anyway.

Instead of managing one codebase for two platforms, they needed to maintain THREE codebases per platform.

**Lots of business value can come from the ability to reach users on the current platform they are on.**

Instructors often need to adapt to the constraints of the platforms of that their university or school allows.

> React Native is a well developed framework that has plenty of opportunity, but for some, React Native is a risky bet.

## Flutter avoids or reduces impact of all of these problems

Flutter, being later in the game and funded by Google, has had the advantage of viewing every problem that all other cross platform solutions run into and solving them well from the start.

One of the bigger problems Flutter does better than any cross-platform solution is *making the developer experience a delight.*

Ebay developers [reported](https://tech.ebayinc.com/product/ebay-motors-accelerating-with-fluttertm/) two important things:

- They could **move almost twice as fast compared to native development**
- **Developers enjoyed the experience more than native (!)**

By far the most in depth report on the best Cross Platform framework was created by NuBank where they attempted to be as [scientific of a cross-platform comparison](https://cdn.nubank.com.br/mobile/taskforce/nubank-mobile-architecture-task-force-mission-report.pdf) as possible.

What they found was that Flutter was:

- easiest for beginners (onboarding)
- still amazing for experts
- **best at avoiding writing platform-specific code** (Ebay found this too)
- best for scaling
- had the best documentation
- had the most stable and flexible tools

Flutter also avoids the Bridge Architecture -- they built their architecture similar to the way game engines work. This allows Flutter to easily support anything that runs games (so every platform).

> Flutter's best value proposition is that no cross-platform solution makes it easier to develop for new platforms as Flutter -- **iOS, Android, Web, Windows, Mac, Linux are all supported with one command.**

Flutter's UI architecture is also built in a way that makes it much easier to accommodate different sized screens and flexible UI requirements.

## The biggest economic opportunities for Flutter

![Flutter Growth](/images/posts/growth.jpeg)

The overall impact for business' is **higher productivity, better forecasting, less management overhead, and happier developers.**

Since Flutter is able to extend itself to anything with low stress, Flutter has allowed teams to try new strategies:

- Release an app to every platform at once, using only one team of developers
- Adapt to uncertain economic conditions faster by adjusting which market you target faster
- Flutter enables a CP framework to even compete on single platforms well, making it less risk to target a single platform
- Makes experimenting into new markets much lower overhead and less risky

Let's take an Edtech app that allows a student to create notecards and test themselves. We now don't have to make any assumptions about which device they'll be using and they can jump to the app on their Macbook then their iPhone.

And this experience can be supported using one codebase very simply.

**Flutter is great, but it has its problems.**

It has problems, such as a reliance on dependencies that can cause versioning problems.

It's hard for a UI framework to serve each platform as perfectly as the native code, and you will often still need to find developers who have native experience (or at least understand native release processes).

But for many situations, **Flutter will help business' outcompete their competition.**

> Over the next 5 years, I think we'll see Flutter dominate the app ecosystem as the preferred tooling.
