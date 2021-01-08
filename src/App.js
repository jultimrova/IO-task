import React, {useState, useEffect} from 'react';
import Search from './components/Search';
import AuthorList from './components/AuthorList';
import './App.css';
import data from './data/data.json';
import Pagination from "./components/common/Pagination";

const App = () => {
    const [authors] = useState(data);
    const [search, setSearch] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [authorPerPage] = useState(10);

    authors.sort((a, b) => b.pageviews - a.pageviews)
        .forEach((author, id) => {
            author.position = id + 1;
        })

    const handleChange = e => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        setSearchResult(author => {
                return authors.filter(author => author.name.toLowerCase().includes(search.toLowerCase()));
            }
        )
    }, [search, authors])

    // Get current author
    const indexOfLastAuthor = currentPage * authorPerPage;
    const indexOfFirstAuthor = indexOfLastAuthor - authorPerPage;
    const currentAuthors = authors.slice(indexOfFirstAuthor, indexOfLastAuthor);
    const totalAuthorsCount = authors.length;

    return (
        <div className='app'>
            <div className='container'>
                <main className='main'>
                    <Search search={search}
                            handleChange={handleChange}
                            searchResult={searchResult}
                    />
                    <AuthorList currentAuthors={search ? searchResult : currentAuthors}
                    />
                </main>
            </div>
            <Pagination authorsPerPage={authorPerPage}
                        totalAuthors={authors.length}
                        currentPage={currentPage}
                        prevArrow={prevArrow}
                        nextArrow={nextArrow}
                        currentAuthors={currentAuthors}
            />
        </div>
    );
}

export default App;
