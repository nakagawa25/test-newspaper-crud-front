import { useState } from 'react';
import NewsList from './components/NewsList'
import './App.css';
import AddNews from './components/AddNews';
//import Home from './pages/Home';

const App = () =>{
  const [newsList, setNews] = useState([
    {
      id: "1",
      title: "Teste"
    },
    {
      id: "2",
      title: "Teste 2"
    }
  ]);

  const handleNewsAddition = (newsTitle) => {
    const newNews = [
      ... newsList,
      {
        id: "5",
        title: newsTitle
      }
    ]

    setNews(newNews);
  };

  return (
    <>
      <div className="container">
        <AddNews handleNewsAddition={handleNewsAddition}/>
        <NewsList newsList={newsList}/>
      </div>
    </>
  );
}

export default App;