import './News.css'

const News = ({news}) => {
    return <div className='news-container'>{news.title}</div>
};

export default News;