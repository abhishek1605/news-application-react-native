# News Application - (React Native)

This is a mobile application built using React Native that fetches news from a news API and displays them in a user-friendly way. The application has been designed to provide a seamless experience to the users and allows them to read news articles, sort news based on popularity, published at and relevancy. The application also supports viewing news in both Arabic and English and have multi-theme support (light & dark).

## Features

* Presenting curated top news articles from a wide range of sources.
* Offering multilingual news viewing options in both Arabic and English languages.
* Providing users with the flexibility to switch between light and dark themes as per their preference.
* Delivering an optimized news listing interface with smooth and efficient scrolling functionality.
* Fetching relevant news content based on user-selected topics like Apple, Meta, and more.
* Offering filter functionality that allows users to refine their news search by language and date range selection.
* Enabling users to sort news articles based on their published date, popularity, and relevancy to their search criteria.
* Providing a Full news view experience within the application through an integrated webView.


## Key Performance Points: 

* Used `PanGestureHandler` from `react-native-gesture-handler` to implement swipe-up transition on initial language selection screen which provides a smooth and responsive transition animation.
* The code is using `useWindowDimensions` from `react-native` to get the height of the screen which improves performance by setting the view based on screen height.
* Utilize the ref attribute to enhance navigation and interaction with the FlatList component.
* Improve performance by utilizing the keyExtractor attribute to specify a unique identifier for each item in the list.
* Enhance performance by using the `removeClippedSubviews` attribute to unmount components when they are not visible on the screen.
* Improve performance and reduce the initial render time by specifying a lower value for `initialNumToRender` attribute.
* Optimize rendering efficiency by specifying a lower value for `maxToRenderPerBatch` attribute.
* Further optimize rendering performance by increasing the value of the `updateCellsBatchingPeriod` attribute.
* Improve performance by setting the `windowSize` attribute to specify how many items should be rendered outside of the visible area.
* Wrapping the newsCard component inside `React.memo` to improve performance by avoiding unnecessary re-renders of the component.

## Application Screenshot - Dark Mode (English)

<div style={{display: "flex"}>
  <img src="/screenshots/language-select-screen-dark.png" alt="Screenshot" width="200" height="400">
  <img src="/screenshots/news-feed-dark.png" alt="Screenshot" width="200" height="400">
  <img src="/screenshots/filter-screen-dark.png" alt="Screenshot" width="200" height="400">
</div>

## Application Screenshot - Light Mode (Arabic)

<div style={{display: "flex"}>
  <img src="/screenshots/language-select-screen-light.png" alt="Screenshot" width="200" height="400">
  <img src="/screenshots/news-feed-light.png" alt="Screenshot" width="200" height="400">
  <img src="/screenshots/filter-screen-light.png" alt="Screenshot" width="200" height="400">
</div>



## Setup

1. Clone this repository:

``` bash
 git clone https://github.com/abhishek1605/news-application-react-native.git
```

2. Navigate to the project directory:

 ``` bash
cd news-application-react-native
```

3. Install dependencies:

 ``` bash
npm install
```

4. Install Expo CLI:

 ``` bash
npm install -g expo-cli
```

5. Run the application:

 ``` bash
npm start
```

6. Download and install [Expo Go](https://expo.io/client) on your mobile device from the App Store or Play Store.

7. Scan the QR code displayed in the terminal with the Expo Go app to open the application on your device.

<img src="/screenshots/expo-qr-code.png" alt="Screenshot" width="600" height="300">

## Running the application on an emulator/simulator

## Setting up iOS Emulator

1. Install Xcode from the App Store.

2. Open Xcode and go to "Preferences".

3. Click on the "Components" tab and install a simulator from the list of available simulators.

4. Open your project in Terminal and run `npm install` to install any necessary dependencies.

5. Run `npm start` to start the Expo development server.

6. Press "i" in the terminal to open the iOS emulator.

7. If the emulator does not open automatically, you can open it manually by selecting "Open Simulator" from the Xcode "Window" menu.

8. Wait for the emulator to load, and then you can test your app.

## Setting up Android Emulator

1. Install Android Studio.

2. Open Android Studio and go to "Preferences".

3. Click on the "Appearance & Behavior" tab, and then click on "System Settings".

4. Click on "Android SDK" and then click on the "SDK Tools" tab.

5. Install the latest version of the Android Emulator from the list of available tools.

6. Create a new virtual device by clicking on the "AVD Manager" button on the toolbar.

7. Choose a device definition and system image, and then click "Next".

8. On the "Verify Configuration" screen, ensure that the "Use Host GPU" option is checked.

9. Click "Finish" to create the virtual device.

10. Open your project in Terminal and run `npm install` to install any necessary dependencies.

11. Run `npm start` to start the Expo development server.

12. Press "a" in the terminal to open the Android emulator.

13. Wait for the emulator to load, and then you can test your app.

Note: Depending on your computer's performance, the emulator may take some time to load initially.

## Download

You can download Expo Go app from the following app stores:

* [App Store](https://apps.apple.com/us/app/expo-go/id982107779)
* [Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)


## Color Palette

the following color palettes is used in this application:

### Light Theme

- backgroundColor: #FFFFFF
- borderColor: #8899A6
- secondaryBgColor: #F8F8F8
- buttonColor: #E4E9F1
- textColor: #000
- selectedBtnTextColor: #000


You can view the light theme palette in more detail [here](https://coolors.co/ffffff-e9e9e9-b1b8c4-8899a6-000000).

### Dark Theme

- backgroundColor: #000000
- borderColor: #3E4453
- secondaryBgColor: #27292F
- buttonColor: #343F54
- textColor: #FFFFFF
- selectedBtnTextColor: #FFFFFF

You can view the dark theme palette in more detail [here](https://coolors.co/ffffff-3e4453-343f54-27292f-000000).

## Live Demo

You can view a live demo of our application hosted on GitHub pages [here](https://abhishek1605.github.io/news-application-react-native/).

Note: Requests from the browser are not allowed on the Developer plan, except from localhost. therefore run the application through your local machine in order to experience the whole application.

