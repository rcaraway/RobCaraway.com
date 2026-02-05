---
title: "Simple Guide to Adding Firebase to Flutter"
date: "2021-02-18"
slug: "firebase-flutter"
tags: ["flutter", "firebase", "tutorial"]
---

Writing this because I had to rely on too many resources to get this done.

**This assumes you already have a Firebase project ready to go.**

### 1. Open your Flutter's Xcode project

Open your Terminal and go to the root of your Flutter Project.

Type in: `cd .ios/`

Then type in: `open Runner.xcworkspace`

Assuming you have Xcode or AppCode, this should open your Flutter's iOS project.

### 2. Add your `GoogleService-Info.plist` file to Xcode

Your `GoogleService-Info.plist` file is something you can download from your Firebase's project settings.

Drag your `GoogleService-Info.plist` to the `Runner` folder. Your project should now look like this.

![Your Flutter project](/images/posts/flutterFirebase.png)

### 3. Add the frameworks you need.

**Make sure your frameworks support the minimum iOS versions required.**

Add the Firebase frameworks you need to your `pubspec.yaml` file like this:

```
dependencies:
    flutter:
        sdk: flutter
    firebase_core: '0.5.3'
    firebase_analytics: '6.3.0'
    firebase_crashlytics: '0.2.4'
```

### 4. Update your `main.dart` file to support it.

Change your `main.dart`'s `main()` function to look like this or similar:

```
void main() async {
    WidgetsFlutterBinding.ensureInitialized();
    await Firebase.initializeApp();
    runApp(App());
}
```

And that should do it!
