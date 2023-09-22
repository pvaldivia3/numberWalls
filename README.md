This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).





In summer 2022, Mathologer posted a video on number walls, which can be used to determine when a sequence can be described using a recurrence relation (if a recurrence relation is present in the sequence, the number wall will eventually generates all zeros).  There was a challenge to program a number wall calculator, so I created a react app that displays the number wall and the zeros modulo a given prime in red.  

While the program displays the colors nicely, it isn’t too snappy in the browser, and the program is a bit finnicky with respect to input – it will crash if the input sequence isn’t correctly formatted.  Therefore, I recommend writing out the sequence of numbers delimited by commas and then pasting it into the entry box once you’ve got the sequence ready.  

The program runs using node package manager (which must be installed) using the “npm start” command from the base folder to run it, and then opening up chrome and directing to the address localhost:3000.  The coloring is currently set to red if the number in the box is even, since that was one of the color schemas necessary to visualize the Pagoda sequence.   The coloring and modulus can be changed in Form.js around line 307; almost all of the important features of the program is contained in this file.  

When you see values of “-99999”, these can be ignored, as they are placeholders so that the program can respond to additional input.  The program can accurately display the number wall of the Pagoda sequence as shown in the pictures included in this repo.   The program also has a known bug in that it doesn’t produce the correct number wall when the sequence would produce 3x3 square of zeros (and possibly other odd-size squares of zeros).  The number wall of the Pagoda sequence contains odd square blocks of even numbers, or alternatively numbers congruent to zero via a prime modulus (this wall displays correctly since the values are non-zero).  





## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
