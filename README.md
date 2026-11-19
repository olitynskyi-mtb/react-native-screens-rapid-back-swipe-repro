# Rapid iOS back swipes with react-native-screens

A minimal bare React Native app for testing rapid back swipes on iOS 26 and later.
The outer native stack is `Previous → Home → Support`. Home contains a nested
native stack and uses `gestureEnabled: false` on its outer route.

## Build on an iPhone

Use Node 22.22.3, Ruby 3.3.10, and Xcode with support for your iPhone's iOS
version. The lockfiles pin React Native 0.88.1 and react-native-screens 4.30.1.

```sh
npm ci
bundle install
(cd ios && bundle exec pod install)
npm start
```

With Metro running, open `ios/ScreensBackSwipeRepro.xcworkspace` in Xcode.
Select your development team under Signing & Capabilities, choose your iPhone
as the destination, then run the `ScreensBackSwipeRepro` scheme in Debug.

## Reproduce

1. Tap **Open Home** on Previous.
2. Once Home has settled, swipe back once from the left edge. Home should stay visible.
3. Tap **Open Support**.
4. Swipe back twice from the left edge as quickly as possible. Repeat a few times
   with the second swipe starting while the first transition is settling.

Expected result is Home. If Previous appears, the second swipe dismissed the
route whose back gesture was disabled. Verified on a physical iPhone.
[Upstream report #5281](https://github.com/software-mansion/react-native-screens/issues/5281)

The native scaffold comes from the React Native Community template.
[Template license](LICENSE.react-native-template)
