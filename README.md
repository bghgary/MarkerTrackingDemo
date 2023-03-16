# Marker Tracking Demo

This repo shows the [WebXR marker tracking](https://immersive-web.github.io/marker-tracking/) feature in a React Native application using [Babylon React Native](https://github.com/BabylonJS/BabylonReactNative).

Users who are new to React Native development should follow the `React Native CLI Quickstart` instructions from https://reactnative.dev/docs/environment-setup first.

Print out a copy of the [marker](./marker.png) before proceeding with the instructions below. Using a tablet on a flat surface to display the marker will also work.

## Android

### Prerequisites
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/)
- [Android Studio](https://developer.android.com/studio/)
- Android device with AR capabilities

### Build
1. Clone this repo.
   ```
   git clone https://github.com/bghgary/MarkerTrackingDemo
   ```
1. Install npm dependencies from the root of the repo.
   ```
   npm install
   ```
1. Build and run the app with the following command.
   ```
   npm run android
   ```
   Or open the [android](./android) folder with Android Studio.

## iOS

### Prerequisites
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/)
- [Xcode](https://developer.apple.com/xcode/)
- [CocoaPods](https://cocoapods.org/)
- iOS device with AR capabilities

### Build
1. Clone this repo.
   ```
   git clone https://github.com/bghgary/MarkerTrackingDemo
   ```
1. Install npm dependencies from the root of the repo.
   ```
   npm install
   ```
1. Install cocoa pods.
   ```
   pod install --project-directory=ios
   ```
1. Open the Xcode workspace from the ios folder.
   ```
   open ios/MarkerTrackingDemo.xcworkspace
   ```
1. Build and deploy by clicking the start button.  
   _Note that a signing development team is required to deploy to a physical device._
