import News from './News'

const NewsList = ({newsList}) => {
    return(
        <>
            {newsList.map((news) => (
                <News news={news}/>
            ))}
        </>
    );
};

export default NewsList;