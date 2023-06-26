import { useEffect, useState } from 'react';
import './App.css';
import Quote from './components/Quote/Quote';
import Button from './components/Button/Button';

function App() {
  let [quote, setQuote] = useState('');

  const fetchData = async () => {
    const getData = await fetch(
      'https://uselessfacts.jsph.pl/api/v2/facts/random?language=en'
    );
    const data = await getData.json();
    setQuote(data.text);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = () => {
    fetchData();
  };

  return (
    <>
      <h1>Random-Fact Quotes</h1>
      <Quote quote={quote} />
      <Button name="New Quote" onClick={handleClick} />
    </>
  );
}

export default App;
