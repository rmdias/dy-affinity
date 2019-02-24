# dy-affinity

This extension shows the page content info according to the user affinity to the itens

## Tech Stack

| ES2018 | Webpack | Babel | Jest |
|:------:|:-------:|:-----:|:----:|
| <img width="50px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2000px-Unofficial_JavaScript_logo_2.svg.png"> | <img width="50px" src="https://pngimage.net/wp-content/uploads/2018/06/webpack-logo-png-3.png"> | <img width="50px" src="https://ih0.redbubble.net/image.370343333.1917/flat,550x550,075,f.jpg"> | <img width="50px" src="https://cdn.auth0.com/blog/testing-react-with-jest/logo.png"> |

## Usage
To install the dependencies run `yarn` or `npm install`. Then `yarn build:w` or `npm run build:w` to run the project.

To load the extension on the browser:
* Go to `chrome://extensions/` on Google Chrome
* Clink on `Load unpacked` button, and point to the `dist` folder

The `dist/main.js` file will be generated dynamically after any change in the project.

## Unit Tests
To run the unit tests:
```
yarn test
```
or
```
npm run test
```

## Docs
* [Extension](https://github.com/rmdias/dy-affinity/tree/master/dist) - `./dist`
* [AffinityOrderer](https://github.com/rmdias/dy-affinity/tree/master/src)
* [Constants](https://github.com/rmdias/dy-affinity/tree/master/src/constants)
* [Models](https://github.com/rmdias/dy-affinity/tree/master/src/models)
* [Services](https://github.com/rmdias/dy-affinity/tree/master/src/services)
* [Trackers](https://github.com/rmdias/dy-affinity/tree/master/src/trackers)

## Project Structure
```
.
+-- README.md
+-- .gitignore
+-- .babelrc
+-- package.json
+-- dist
|   +-- manifest.json
|   +-- main.js
|   +-- injectScript.js
+-- src
|   +-- index.js
|   +-- AffinityOrderer.js
|   +-- constants
|   |   +-- EVENT_VALUES.js
|   |   +-- PRODUCT_CATEGORIES.js
|   |   +-- STORAGE_KEY.js
|   +-- models
|   |   +-- category.js
|   +-- services
|   |   +-- AffinityManager.js
|   +-- trackers
|   |   +-- AddCartTracker.js
|   |   +-- PageViewTracker.js
```