import { useEffect, useState } from 'react';

import NewsList from './components/NewsList'
import AddNews from './components/AddNews';
import Header from './components/Header';
//import Home from './pages/Home';

import './App.css';
import api from './services/api'

const App = () => {
  const [newsList, setNews] = useState([  ]);

  useEffect(() => {
    const fetchNews = async () => {
      const { data } = await api.get("/all");
      setNews(data);
    }

    fetchNews();
  }, []);

  // const handleNewsClick = (newsTitle) => {
  //   const newNews = newsList.map((news) => {
  //     if (news.title == newsTitle)
  //       return {...news,}
  //   });
  // }

  const handleNewsAddition = (newsTitle) => { // TODO: Arrumar para inserir o objeto
    const newNews = [
      ...newsList,
      {
        id: "5",
        title: newsTitle
      }
    ]

    setNews(newNews);
  };

  const handleNewsDeletion = (newsTitle) => {

    // TODO: Mandar para a exclusão

    const newNews = newsList.filter(news => news.title !== newsTitle)
    setNews(newNews);
  };

  return (
    <>
      <div className="container">
        <Header />
        <AddNews handleNewsAddition={handleNewsAddition} />
        <NewsList newsList={newsList} handleNewsDeletion={handleNewsDeletion} />
      </div>
    </>
  );
}

export default App;