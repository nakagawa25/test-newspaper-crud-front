import { useEffect, useState } from 'react';

import NewsList from './components/NewsList'
import AddNews from './components/AddNews';
import Header from './components/Header';

import './App.css';
import api from './services/api'

const App = () => {
  const [newsList, setNews] = useState([]);
  const date = new Date();

  useEffect(() => {
    const fetchNews = async () => {
      const { data } = await api.get("/all");
      setNews(data);
    };

    fetchNews();
  }, []);

  const addNews = async (newNewsObject) => {
    try {
      const newNews = [
        ...newsList,
        newNewsObject
      ]
      await api.post("/create", newNewsObject).then((response) => {
        alert(response.data.message);
        setNews(newNews);
      });
    } catch (err) {
      alert("Não foi possível criar uma nova notícia, confira os campos e tente novamente. ");
    }
  };

  const delNews = async () => {
    
  }

  const handleNewsAddition = (newsTitle, newsContent) => {
    const newNewsObject =
    {
      title: newsTitle,
      content: newsContent,
      publicationDate: date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    }

    addNews(newNewsObject);
  };

  const handleNewsDeletion = (newsTitle) => {
    const newNews = newsList.filter(news => news.title !== newsTitle);
    api.delete("/delete", { data: { title: newsTitle } }).then((response) => {
      setNews(newNews);
    });
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