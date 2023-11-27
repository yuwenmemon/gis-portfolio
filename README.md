# GIS Portfolio Page

This is a project for Module 8 of GEOG XL181B - 392308: Advanced Geographic Information Systems (GIS). We were tasked to create a GIS portfolio and I opted to build one from scratch using React.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Development

In the project directory, you can run:

```
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Deployment

This uses [Github Pages](https://pages.github.com/) for a quick and easy solution for hosting. To prep the site for deployment you can run

```
npm run build
```

This builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
The app is ready to be deployed!

To do that, simply run

```
npm run deploy
```

This command builds the app and pushes the build to the gh-pages branch of the repository. If not already set up, see [below](#configuring-github-pages) for how to do that.

## Configuring Github Pages

1. Install `gh-pages` as a dev dependency:
   ```
   npm install gh-pages --save-dev
   ```
1. Update the `homepage` field in `package.json`:
   ```
   "homepage": "https://your-username.github.io/your-repo-name",
   ```
1. Go to your repository on GitHub.
1. Click on the "Settings" tab.
1. Scroll down to the "GitHub Pages" section.
1. Under "Source", select the gh-pages branch and save.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
