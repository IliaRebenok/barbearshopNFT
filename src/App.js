import { useState } from 'react';
import './App.css';
import CardBlock from './components/cardBlock/cardBlock';
import Header from './components/header/header';

function App() {
  const [search, setSearch] = useState('');

  return (
    <>
      <Header setSearch={setSearch}/>
      <CardBlock search={search}/>
    </>
  );
}

export default App;
