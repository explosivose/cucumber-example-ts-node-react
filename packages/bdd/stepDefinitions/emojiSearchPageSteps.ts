import { After, Before, Given, Then, When } from '@cucumber/cucumber'
import { waitFor } from '@testing-library/react';
import assert = require('assert');
import TestWorld from '../support/world'
const And = Then;

type State = {
  searchQuery?: string;
}

type World = TestWorld<State>

Before(function(this: World) {
  this.before();
})

After(function(this: World) {
  this.after();
})

Given('I am on the emoji search page', async function(this: World) {
  this.emojiSearch.render();
});

Then('I should see the title {string}', function(this: World, title: string) {
  this.emojiSearch.assertTextVisible(title);
})

And('I can see the search bar', function(this: World) {
  this.emojiSearch.assertSearchBarVisible();
})

And('there should be some emoji listed', function(this: World) {
  this.emojiSearch.assertEmojiListIsNotEmpty();
})

When('I search for {string}', async function(this: World, searchQuery: string) {
  this.state.searchQuery = searchQuery;
  this.emojiSearch.changeSearchInput(searchQuery);
})

Then('I should only see emoji which match the keyword', async function(this: World) {
  this.emojiSearch.assertEmojiListIsNotEmpty();
  this.emojiSearch.assertAllEmojiMatch(this.state.searchQuery as string);
})

Then('I should only see one emoji', async function (this: World) {
  await waitFor(() => {
    this.emojiSearch.assertEmojiListHasLength(1);
  })
});

