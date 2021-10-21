# GCN front end task

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) (CRA).

# From CRA

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn lint`

Runs eslint against the src folder showing all errors in linting, they are displayed as breaking changes when running the app but this is a console only version.

### `yarn lint-fix`

Possibly a little dangerous but if you're confident this quietly fixes all linting error and saves the files :scream:. I opted to set up autosave in my IDE and let it do the lifting.

# My added external libraries/packages

Instead of the default install I used the `typescript` template to improve code quality and all of the other benefits of this types superset of JS.

In the default index.css I set up a CSS rest and the google font `Montserrat`, which was the closest to licenced "Proxima Nova" font used on your site I could find. I installed the package `styled-components` for scoped styles, sass and all the other goodness it offers.

The packages `eslint` & `prettier` were used for linting and code formatting using eslint-config-airbnb & eslint-config-airbnb-typescript.

The `font-awesome` was installed to recreate the social menu.

# My design choices

Although it's an image I gave both of the images a touch up around the header; more room to breathe and got everything lining up correctly as it is a little messy (sorry).

For the menu I decided to overlay with slight opacity and animate the burger menu symbols and menu opening. Home is now fontawesome and floated to the right.

I created more sub menu items for a GCN area, this would require a page similar to the presenters page to work. These sub menus are smaller and grouped to save real estate, a good thing on mobile!

I wanted to create a overflowing horizontal video carousel (similar to Instagram and FB) but ran out of time having spent a good couple of hours to get to this point I thought I'd show were I've gotten too. I would be keen on creating this carousel and probably will in my spare time.... :raised_eyebrow:

Other improvements could be some unit and snopshot testing, husky hooks to enfocre the esling and prettier rules as well as Github actions and sonarcloud to check code quality.

Any questions [email me](mailto:peterdavidhenry@gmail.com) and I'll get back to you.
