# Marker Tracking Demo

This repo shows the [WebXR marker tracking](https://immersive-web.github.io/marker-tracking/) feature in a React Native application using [Babylon React Native](https://github.com/BabylonJS/BabylonReactNative).

Print out a copy of the [marker](./marker.png) before proceeding with the instructions below. Using a tablet on a flat surface to display the marker will also work.

## Install the pre-built app

### Android
Download and install the [Android Package (apk)](./dist/android/MarkerTrackingDemo.apk). There are multiple ways to do this. One option is to download the apk to a separate computer and use adb to install the apk onto the Android device.
1. Plug in the Android device to the computer.
1. Install the [Android Debug Bridge (adb)](https://developer.android.com/studio/command-line/adb).
1. Install the apk using adb.
   ```
   adb install MarkerTrackingDemo.apk
   ```

### iOS
Download and install the [iOS Archive](./dist/ios/MarkerTrackingDemo.ipa). There are multiple ways to do this. One option is to download the ipa to a Mac and install the ipa using Xcode.
1. Plug in the iOS device to the Mac.
1. Install [Xcode](https://developer.apple.com/xcode/).
1. Open Xcode and select Window -> Devices and Simulator.
1. Select the iOS device on the left pane.
1. Drag and drop the .ipa file to the `Installed Apps` section.

## Build from source

Users who are new to React Native development should follow the `React Native CLI Quickstart` instructions from https://reactnative.dev/docs/environment-setup first.

### Android

#### Prerequisites
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/)
- [Android Studio](https://developer.android.com/studio/)
- Android device with AR capabilities

#### Build
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

### iOS

#### Prerequisites
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/)
- [Xcode](https://developer.apple.com/xcode/)
- [CocoaPods](https://cocoapods.org/)
- iOS device with AR capabilities

#### Build
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
