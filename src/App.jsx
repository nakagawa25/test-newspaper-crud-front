import { useEffect, useState } from 'react';

import NewsList from './components/NewsList'
import AddNews from './components/AddNews';
import Header from './components/Header';
//import Home from './pages/Home';

import './App.css';
import axios from 'axios';

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

  useEffect(() => {
    const fetchTasks = async () => {
      const {data} = await axios.get("http://localhost:5000/all");
      setNews(data);
    }

    fetchTasks();
  }, []);

  // const handleNewsClick = (newsTitle) => {
  //   const newNews = newsList.map((news) => {
  //     if (news.title == newsTitle)
  //       return {...news,}
  //   });
  // }

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

  const handleNewsDeletion = (newsTitle) => {
    const newNews = newsList.filter(news => news.title != newsTitle)

    setNews(newNews);
  };

  return (
    <>
      <div className="container">
        <Header/>
        <AddNews handleNewsAddition={handleNewsAddition}/>
        <NewsList newsList={newsList} handleNewsDeletion={handleNewsDeletion}/>
      </div>
    </>
  );
}

export default App;