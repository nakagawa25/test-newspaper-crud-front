import './News.css'

const News = ({news, handleNewsDeletion}) => {
    return (
        <div className='news-container'>
            {news.title}
            <div className='buttons-container'>
                <button className='remove-news-button' 
                    onClick={() => handleNewsDeletion(news.title)}>X</button>
            </div>
        </div>
    );
};

export default News;