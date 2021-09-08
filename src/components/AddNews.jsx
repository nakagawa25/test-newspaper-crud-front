import { useState } from "react";
import "./AddNews.css"
import Button from "./Button";

const AddNews = ({handleNewsAddition}) => {
    const [inputData, setInputData] = useState("");

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };

    const handleAddNewsClick = () => {
        handleNewsAddition(inputData);
        setInputData("");
    };

    return ( 
        <div className="add-news-container"> 
            <input
                placeholder='Título da notícia'
                onChange={handleInputChange}
                value={inputData} 
                className="add-news-input" 
                type="text" />
            <div className="add-news-button-container">
                <Button onClick={handleAddNewsClick}>Adicionar</Button>
            </div>
        </div>
    );
}
 
export default AddNews;