# Joakim Johansson Profile

Hi fellow developer!

This is a repository for my profile app to demonstrate some of my TypeScript, React, CSS and other knowledge without divulging the secret inners of any of the proprietary software I have worked on in the past.

Built with Vite and Vitest. Linted with Eslint and prettier. Source controlled with GitHub.

Features include CSS animations and transitions. Theming with Tailwind and CSS variables, including light/dark mode. Routing with React Router. Axios for request handling.

### Install
`npm ci` / `npm i` to install.

### Run
`npm run start` to start the webb application.

Mock Service Worker will intercept all requests and handle them in-browser. This way I do not need to have an API to demonstrate fetching. It also shows how mocking can be used in dev and in tests.

### Tests
`npm run test` will run tests with file watching. I have added some tests for pure TS functions as well as a react component and a react component which uses a store hook with async fetching.

### Build
`npm run build` to build, this will include MSW in t his case, because I use it for demonstration purposes. However by putting it within dead code analysis scope it will be removed during production builds.
