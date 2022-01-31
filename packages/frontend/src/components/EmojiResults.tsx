import React from 'react';
import EmojiResultRow from './EmojiResultRow';
interface Props {
  data: {
    title: string;
    symbol: string;
  }[]
}

export const EmojiResults = ({data}: Props) => {
  return (
    <div className="component-emoji-results" data-testid="emoji-list">
    {data.map(item => (
      <EmojiResultRow
        key={item.title}
        symbol={item.symbol}
        title={item.title}
      />
    ))}
  </div>
  )
}

export default EmojiResults;
