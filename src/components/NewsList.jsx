import News from './News'

const NewsList = ({newsList, handleNewsDeletion}) => {
    return(
        <>
            {newsList.map((news) => (
                <News news={news} handleNewsDeletion={handleNewsDeletion}/>
            ))}
        </>
    );
};

export default NewsList;