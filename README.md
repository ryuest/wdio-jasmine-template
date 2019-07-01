# minimal-react-webpack-babel-setup

## Features

* React 16
* Webpack 4
* Babel 7
* Hot Module Replacement

## Installation

* `git clone https://github.com/ryuest/react-webpack-babel-template.git`
* cd minimal-react-webpack-babel-setup
* yarn install
* yarn start
* visit `http://localhost:8080/`

# WDIO
Docker setup for [WebdriverIO](https://webdriver.io/) with automatic
screenshots, image diffing and screen recording support for containerized
versions of Chrome and Firefox, Safari Mobile and Chrome Mobile via
[Appium](https://appium.io/) and Safari on MacOS as well as Internet Explorer
and Microsoft Edge on Windows 10.

- [Usage](#usage)
  * [Chrome](#chrome)
  * [Mobile Safari](#mobile-safari)
  * [Mobile Chrome](#mobile-chrome)
  * [Shutdown](#shutdown)

## Usage

Make sure you have Docker 18.09.2< 

Update docker-compose if required
```curl 
curl -L https://github.com/docker/compose/releases/download/1.24.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

### Chrome
Run the tests with Chrome:
```sh
docker-compose run --rm wdio [chrome]
```

### Mobile Safari
To run the tests with Mobile Safari on iOS Simulator, follow these steps:

1. Install [Xcode](https://itunes.apple.com/us/app/xcode/id497799835) from the
   Mac App Store.

2. Install the Xcode Command Line Tools:
   ```sh
   xcode-select --install
   ```

3. Install [Node.JS](https://nodejs.org/) and
   [Carthage](https://github.com/Carthage/Carthage) via
   [Homebrew](https://brew.sh/):
   ```sh
   brew install node carthage
   ```

4. Make sure the necessary [Appium](https://appium.io/) dependencies for iOS 
   testing are installed:
   ```sh
   npx appium-doctor --ios
   ```

5. Install [Appium](https://appium.io/) as global NPM package:
   ```sh
   npm install -g appium
   npm install appium-doctor -g
   ```

7. Start `appium` with the provided helper script:
   ```sh
   bin/appium.sh
   ```

8. If the problem with appium global install:
    Check and `mkdir` required folders in `/usr/local/share/.config/yarn/global/node_modules/appium-xcuitest-driver/WebDriverAgent`
    Then retry to run again 
   ```sh
   ./Scripts/bootstrap.sh -d (from above same folder)
   ```

9. Run the tests with Mobile Safari:
   ```sh
   docker-compose run --rm wdio mobile-safari
   ```

   To run the tests in landscape orientation, provide the `ORIENTATION`
   environment variable:
   ```sh
   ORIENTATION=LANDSCAPE docker-compose run --rm wdio mobile-safari
   ```

   To use a different iOS device than defined in the config, provide the
   `DEVICE_NAME` environment variable:
   ```sh
   DEVICE_NAME='iPad Air' docker-compose run --rm wdio mobile-safari
   ```

   To use a different iOS version than defined in the config, provide the
   `PLATFORM_VERSION` environment variable:
   ```sh
   PLATFORM_VERSION=12.1 docker-compose run --rm wdio mobile-safari
   ```

### Mobile Chrome
To run the tests with Mobile Chrome on Android Simulator, follow these steps:

1. Download [Android Studio](https://developer.android.com/studio/) and on first
   start, follow the instructions to install the Android SDK and Emulator.

2. Add the following lines to adb shell working and to your `~/.profile` to make the JDK included in
   Android Studio and the installed Android SDK available to
   [Appium](https://appium.io/):
   ```sh
   export JAVA_HOME='/Applications/Android Studio.app/Contents/jre/jdk/Contents/Home'
   export PATH="$JAVA_HOME/bin:$PATH"
   export ANDROID_HOME=~/Library/Android/sdk

   OR
   touch ~/.bash_profile
   Add the following 4 lines to ~/.bash_profile.

   export ANDROID_HOME=/Users/$USER/Library/Android/sdk/
   export PATH=$PATH:$ANDROID_HOME
   export PATH=$PATH:$ANDROID_HOME/tools
   export PATH=$PATH:$ANDROID_HOME/platform-tools
   Finally execute the below command (or RESTART the system to reflect the changes made).
   source ~/.bash_profile
   ```

3. Install [Node.JS](https://nodejs.org/) via [Homebrew](https://brew.sh/):
   ```sh
   brew install node
   ```

4. Make sure the necessary [Appium](https://appium.io/) dependencies for Android 
   testing are installed:
   ```sh
   npx appium-doctor --android
   ```

5. Install [Appium](https://appium.io/) as global NPM package:
   ```sh
   npm install -g appium
   ```
   [--chromedriver_version in package.json `"chromedriver": "2.44.0"`, compare with android emulation virtual device `chrome` installed]


   Make sure to configure `appium` with a
   [Chromedriver](https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/web/chromedriver.md)
   version compatible with the version of Chrome running in your Android device.
   If `appium` has already been installed with an incompatible `chromedriver`
   version, you might want to uninstall and reinstall it with the proper
   `--chromedriver_version` argument.

6. Start `appium` with the provided helper script:
   ```sh
   bin/appium.sh
   ```

7. Build Android Virtual Device with any build with root access, add to file `/Users/<-USERNAME->/Library/Android/sdk/system-images/<-XXXX->/google_apis/x86/build.prop` new line:
   ```sh
   ro.debuggable=1
   ``` 

8. Start the Android Virtual Device:
   ```sh
   bin/android-emulator.sh
   ```  

9. Run the tests with Mobile Chrome:
   ```sh
   docker-compose run --rm wdio mobile-chrome
   ```

   To run the tests in landscape orientation, provide the `ORIENTATION`
   environment variable:
   ```sh
   ORIENTATION=LANDSCAPE docker-compose run --rm wdio mobile-chrome
   ```


### Shutdown
Stop and remove the container set:
```sh
docker-compose down
```
