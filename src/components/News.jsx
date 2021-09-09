import './News.css'

const News = ({ news, handleNewsDeletion }) => {
    return (
        <div className='news-container'>

            <div className='header-container'>
                {news.title}
                <div className='buttons-container'>
                    <button className='remove-news-button'
                        onClick={() => handleNewsDeletion(news.title)}>X</button>
                </div>
            </div>
            <div>
                <div className='content-container'>
                    <p>{news.content}</p>
                </div>

                <div className='publication-date-container'>
                    {news.publicationDate}
                </div>
            </div>
        </div>
    );
};

export default News;