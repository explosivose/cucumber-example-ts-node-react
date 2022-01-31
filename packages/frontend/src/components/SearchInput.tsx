import React from 'react';
interface Props {
  handleInputChange: (value: string) => void;
}

export const SearchInput = ({handleInputChange}: Props) => {
  return (
    <div className="component-search-input">
      <div>
        <input onChange={(event) => handleInputChange(event.target.value)} />
      </div>
    </div>
  );
}

export default SearchInput;
