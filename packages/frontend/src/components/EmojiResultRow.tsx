import React from 'react';
interface Props {
  symbol: string;
  title: string;
}

export const EmojiResultRow = ({
  symbol,
  title
}: Props) => {
  const codePointHex = symbol.codePointAt(0)?.toString(16);
  const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
  return (
    <div
      className="component-emoji-result-row copy-to-clipboard"
      data-clipboard-text={symbol}
    >
    <img alt={title} src={src} />
    <span className="title">{title}</span>
    <span className="info">Click to copy emoji</span>
  </div>
  )
};

export default EmojiResultRow;
