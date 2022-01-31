# cucumber-example-ts-node-react

An example of fullstack typescript testing

## Getting Started

### Prerequisites

* `node` 16, highly recommend [nvm](https://github.com/nvm-sh/nvm) for
  installing and managing versions of node
* `npm` 8 (should come with node)

NPM 8 or greater is required because this example uses monorepo 
workspaces. This can also be achieved with Yarn.

* Install dependencies for all workspaces (`./packages/*`) using npm

```
npm i
```

### Running Cucumber

```
cd packages/bdd
npm run cucumber -- features/ # add any other cucumber CLI args here
```

## How does it work?

Taking inspiration from https://github.com/subsecondtdd/assembly-diagrams#readme 

This is an implementation of a 'DOM-Domain' test assembly. Our BDD 
Cucumber tests run very fast, in the same nodejs (cucucmber-js) process,
exercising both frontend and backend code.

* Actor
  * Gherkin (.feature)
  * cucumber-js
* DOM interactions
  * step definitions
  * [@testing-library/react](https://testing-library.com/)
* DOM
  * jsdom emulation, under the hood of @testing-library/react
* React App
  * [Emoji Search](https://github.com/ahfarmer/emoji-search) app example
* Domain Session
  * Mocked API calls using [msw](https://mswjs.io/)
* Domain Logic
  * Emoji Search api example using [Fastify](https://www.fastify.io/)

### Tips

#### Test State

In this example you can see use of state attached to the World.

```typescript
When('I search for {string}', async function(this: World, searchQuery: string) {
  this.state.searchQuery = searchQuery;
  this.emojiSearch.changeSearchInput(searchQuery);
})

Then('I should only see emoji which match the keyword', async function(this: World) {
  this.emojiSearch.assertEmojiListIsNotEmpty();
  this.emojiSearch.assertAllEmojiMatch(this.state.searchQuery as string);
})
```

**Avoid** using state as much as possible as it can leak between steps
unintentionally and can make testing more difficult than it needs to be.

#### Assertions

* `expect` can be imported separately from Jest and used in Cucumber
  * `testing-library/jest-dom` can also be used... [see here](https://stackoverflow.com/questions/65012078/how-to-use-jest-dom-without-jest)
* `chai` also has BDD-style assertions

#### Profiles to enable/disable api interaction

You can use [profiles](https://github.com/cucumber/cucumber-js/blob/main/docs/profiles.md) 
and world parameters to select frontend-only testing with mocked API
responses.


### Gotchas

* React cannot work with more than one instance of itself

Use of yarn or npm workspaces ensures that a single instance of React
is installed. Otherwise, importing a React App from `frontend` will 
provide an instance of React which conflicts with the instance installed
in the `bdd` test codebase. This will emerge as errors such as 
[this one](https://reactjs.org/warnings/invalid-hook-call-warning.html) 

* Create React App, Jest etc. do magic with Webpack

Without the magic of popular development tools, your React app code
that imports stuff like `.css`, `.svg`, will throw errors while running
in `cucumber-js`. See [cucumber.setup.js](./packages/bdd/cucumber.setup.js)
for one solution.

* Tests slow to start if typechecking is on

When `cucumber-js` is running through `ts-node`, turn off typechecking.
See [tsconfig.json](./packages/bdd/tsconfig.json). If you want this 
switched on, you can enable it in your IDE or add it to `eslint`.


