import React,{useEffect, useState} from 'react';
import './App.css';
import getJokes from './services/getJokes';
import joke from "./models/joke";
import findQuote from "./components/Quotes";
import Quote from './models/quotesInterface';
import WeatherForecast from "./components/WeatherForecast";

function App() {
  const [joke, setJoke] = useState<joke>();
  useEffect(() => {
    getJokes().then(data => setJoke(data));
    console.log(process.env.REACT_APP_NEWS_API_KEY);
    console.log(process.env.REACT_APP_PEOPLE_NAMES);
  }, []);

  const [quotes, setQuotes] = useState<Quote[]>([]);
  useEffect(() => {
    findQuote().then(data => setQuotes(data));
  }, []);

  return (
    <div className="App">
      <div className="weather">
        <WeatherForecast />
      </div>

      <div>
        <ul>
          {quotes.map((quote, index) => {
            return <li key={index}><p>{quote?.author}</p><p>{quote?.text}</p></li>
          })}
        </ul>
      </div>

      <div>
        <p>{joke?.setup}</p>
        <p>{joke?.punchline}</p>
        <button onClick={() => {getJokes().then(data => setJoke(data))}}>Click Me</button>
      </div>

    
    </div>
  );
}

export default App;
