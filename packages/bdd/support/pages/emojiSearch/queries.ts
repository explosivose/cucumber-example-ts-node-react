import { screen } from '@testing-library/react'

export const getEmoji = (text: string) => {
  return screen.getByText(text);
}

export const getEmojiList = () => {
  return screen.getByTestId('emoji-list');
}
