import React, { useEffect, useState } from 'react';
import './App.css';
import EmojiResults from './components/EmojiResults';
import Header from './components/Header';
import SearchInput from './components/SearchInput';
import { makeRequest } from './services/makeRequest';

type Data = {
  symbol: string;
  title: string;
};

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState<Data[]>([])

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  }

  useEffect(() => {
    let cancel = false;
    const fetchData = async () => {
      const searchQueryEncoded = encodeURIComponent(searchQuery);
      const response = await makeRequest<Data[]>(`?search=${searchQueryEncoded}`);
      if (response && !cancel) {
        setData(response);
      }
    }
    fetchData();
    return () => {
      cancel = true;
    }
  }, [searchQuery])

  return (
    <div>
      <Header />
      <SearchInput handleInputChange={handleSearchChange} />
      <EmojiResults data={data} />
    </div>
  );
}

export default App;
