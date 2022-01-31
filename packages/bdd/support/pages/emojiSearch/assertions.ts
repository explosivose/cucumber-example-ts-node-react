
// for more BDD style assertions look into expect (from Jest) or Chai

import { screen } from '@testing-library/react';
import assert from 'assert';
import { getEmojiList } from './queries';

export const assertTextVisible = (text: string) => {
  assert(screen.getByText(text) !== null);
}

export const assertSearchBarVisible = () => {
  assert(screen.getByRole('textbox'));
}

export const assertEmojiListIsNotEmpty = () => {
  assert(getEmojiList().hasChildNodes);
}

export const assertEmojiListHasLength = (expected: number) => {
  assert(Array.from(getEmojiList().children).length === expected);
}

export const assertEmojiMatch = (emoji: Element, expected: string) => {
  const children = Array.from(emoji.children);
  let match: boolean | undefined;
  children.forEach(item => {
    match = match || item.textContent?.toLowerCase().includes(expected.toLowerCase())
  })
  assert(match === true);
}

export const assertAllEmojiMatch = (expected: string) => {
  const list = Array.from(getEmojiList().children);
  list.forEach(item => {
    assertEmojiMatch(item, expected);
  })
}
