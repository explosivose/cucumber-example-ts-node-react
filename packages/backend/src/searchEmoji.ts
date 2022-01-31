
import emojiList from './emojiList.json';
type EmojiList = {
  title: string;
  symbol: string;
  keywords: string;
}[];
export const searchEmoji = (searchQuery?: string | null, max = 20) => {
  if (!searchQuery) {
    return emojiList.slice(0, max);
  }
  return (emojiList as EmojiList)
    .filter((emoji) => {
      if (emoji.title.toLowerCase().includes(searchQuery.toLowerCase())) {
        return true;
      }
      if (emoji.keywords.includes(searchQuery)) {
        return true;
      }
      return false;
    })
    .slice(0, max);
};
