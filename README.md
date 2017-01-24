## Mobile Cordova Samples

Sample project showing [CartoMobileSDK's](https://carto.com/engine/mobile/) Cordova plugin

### Structure

* Everything related to building the views and controllers of our SDK, and Cordova in general, is located under `www/`. 

* **CARTO MapView** initialization and usage is under `www/js/index.js/`

* Contains **2** Cordova plugins

 * com.carto.plugin.sdk 0.0.1 "CartoMobileSDK"
 * cordova-plugin-device 1.1.5-dev "Device"

### Setup

* `cordova prepare` – Platforms and plugins are automatically restored from config.xml when the 'cordova prepare' command is run.
* `cordova run android` & `cordova run ios` – automatically locates an available device and runs the app (prefers real device to emulator/simulator)

##### NB! If installing iOS plugin for the first time, you need to change compiler flags the Cordova project's XCode project

* Open the workspace file (XCode) under `platforms/ios/HelloCordova/`, open build settings and make the following changes:

  * Set `C++ Language Dialect` to `C++11`
  * Set `C++ Standard Library` to `libc++`
  
### Feature Description

* Identifies platform (that's why we need the device plugin) for license registration
* Registers platform-specific license
* Initializes MapView (html element as parameter)
* Sets click listener on the map view
* Listens to map view clicks (gets latitude, longitude, click type) and places custom SDK balloon popup to click coordinates

### Contributing

As you can see, this sample is rather bare-bones, and the lacking is mostly on the plugin-side (we're not just too lazy to create proper samples).

If you wish to contribute (our plugin is open source), contact us or check out [the plugin's souce](https://github.com/CartoDB/mobile-sdk-cordova)

## Other Samples

* [Android Studio (Android samples in Java)](https://github.com/CartoDB/mobile-android-samples)
* [XCode (iOS samples in Objective-C and Swift)](https://github.com/CartoDB/mobile-ios-samples)
* [Xamarin (iOS, Android and Windows Phone samples in C#](https://github.com/CartoDB/mobile-dotnet-samples)
