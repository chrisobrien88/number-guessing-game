## Number Guessing Game

This is a simple React Native application built to create a number guessing game. The game allows the user to input a number, and the program will attempt to guess that number by making informed guesses based on the user's feedback. The purpose of this project is to provide a hands-on learning experience with React Native and Expo.

### How to Run the Application

To run the application, you need to have Expo installed on your system. If you haven't installed Expo, you can follow the instructions provided in the [Expo documentation](https://docs.expo.io/get-started/installation/).

1. Clone the repository or download the project files to your local machine.
2. Open a terminal and navigate to the project directory.
3. Install the required dependencies by running the following command:

<pre><code>npm install</code></pre>

4. Start the development server using Expo by running:

<pre><code>npm start</code></pre>

A QR code will be displayed in the terminal and also in a new tab in your default browser.

6. To run the app on your device, make sure you have the Expo app installed. Scan the QR code using the Expo app's scanner (available on the Projects tab) or enter the provided URL in the Expo app.
7. The app should now be running on your device.

### How to Play the Game

1. Upon launching the application, you will be presented with a welcome screen where you can enter a number.
2. Think of a number and enter it into the input field.
3. After entering the number, press the "Guess" button.
4. The program will make a guess based on the range of numbers available.
5. Inform the program whether your number is higher or lower than the displayed guess by using the "Higher" and "Lower" buttons.
6. Based on your feedback, the program will make subsequent guesses until it correctly guesses your number.
7. Once the program has guessed your number, a success message will be displayed, and you can choose to play again by pressing the "Play Again" button.

### Project Structure

The project structure follows a typical React Native project structure. The key files and directories are as follows:

- **App.js**: The entry point of the application that sets up the app's main components and screens.
- **screens/**: Contains the different screens of the application, including the welcome screen and the game screen.
- **components/**: Contains reusable components used throughout the application, such as buttons and input fields.
- **utils/**: Contains utility functions used for number generation and guessing logic.

### Technologies Used

- React Native
- Expo
- JavaScript

![Enter a number](assets/images/screenshot1.jpg)

![Higher or lower](assets/images/screenshot2.jpg)

![Previous guesses](assets/images/screenshot3.jpg)

![Game over](assets/images/screenshot4.jpg)

