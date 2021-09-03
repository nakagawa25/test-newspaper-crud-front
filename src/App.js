import { useState } from 'react';
import NewsList from './components/NewsList'
import './App.css';
//import Home from './pages/Home';

const App = () =>{
  const [newsList, setTasks] = useState([
    {
      id: "1",
      title: "Teste"
    },
    {
      id: "2",
      title: "Teste 2"
    }
  ]);

  return (
    <>
      <div className="container">
        <NewsList newsList={newsList}/>
      </div>
    </>
  );
}

export default App;