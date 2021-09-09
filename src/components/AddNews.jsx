import { useState } from "react";
import "./AddNews.css"
import Button from "./Button";

const AddNews = ({ handleNewsAddition }) => {
    const [inputTitle, setInputTitle] = useState("");
    const [inputContent, setInputContent] = useState("");

    const handleInputTitleChange = (e) => {
        setInputTitle(e.target.value);
    };

    const handleInputContentChange = (e) => {
        setInputContent(e.target.value);
    };

    const handleAddNewsClick = () => {
        handleNewsAddition(inputTitle, inputContent);
        setInputTitle("");
        setInputContent("");
    };

    return (
        <div className="add-news-container">
            <div className="add-title-container">
                <input
                    placeholder="Título da notícia"
                    onChange={handleInputTitleChange}
                    value={inputTitle}
                    className="add-title-input"
                    type="text"
                />
                <div className="add-news-button-container">
                    <Button onClick={handleAddNewsClick}>Adicionar</Button>
                </div>
            </div>
            <div className="add-content-container">
                <textarea
                    placeholder="Conteúdo da notícia"
                    onChange={handleInputContentChange}
                    value={inputContent}
                    className="add-content-input"
                    type="text"
                    rows="5"
                />
            </div>
        </div>
    );
}

export default AddNews;