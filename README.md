Node verion: v16.14.2 <br />
Android SKD verion: 31 <br />
Xcode version: 13.4.1 (13F100) <br />

## Installation IOS:
- ```cd ~```
- ```brew install node```
- ```brew install watchman```
- ```sudo gem install cocoapods```
- ```cd <repo-root>```
- ```yarn install```
- ```cd ios && pod install```
- Build the app via Xcode

## Running IOS
- ```cd <repo-root>```
- ```yarn run ios```

## Installation Android:
- ```cd ~```
- ```brew install node```
- ```brew install watchman```
- ```brew tap homebrew/cask-versions```
- ```brew install --cask zulu11```
- ```cd <repo-root>```
- ```yarn install```
- ```export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk```
- ```export PATH=$PATH:$ANDROID_SDK_ROOT/emulator```
- ```export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools```

## Running Android
- ```cd <repo-root>```
- ```yarn run android```
