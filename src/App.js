import React, {useEffect, useState} from 'react';
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

    sortByPageView();

    // Get current author
    const indexOfLastAuthor = currentPage * authorPerPage;
    const indexOfFirstAuthor = indexOfLastAuthor - authorPerPage;
    const currentAuthors = authors.slice(indexOfFirstAuthor, indexOfLastAuthor);
    const totalAuthorsCount = authors.length;

    sortByName();

    function sortByPageView() {
        authors.sort((a, b) => b.pageviews - a.pageviews)
            .forEach((author, id) => {
                author.position = id + 1;
                author.iconColor = randomHex();
            })
    }

    function sortByName() {
        currentAuthors.sort((a, b) => a.name.localeCompare(b.name));
    }

    function prevArrow() {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    function nextArrow() {
        if (currentPage < numOfPages()) {
            setCurrentPage(currentPage + 1)
        }
    }

    function numOfPages() {
        return Math.ceil(totalAuthorsCount / authorPerPage)
    }

    function randomHex() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    const handleChange = e => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        setSearchResult(author => {
                return authors.filter(author => author.name.toLowerCase().includes(search.toLowerCase()));
            }
        )
    }, [search, authors])

    return (
        <div className='app'>
            <div className='container'>
                <main className='main'>
                    <Search search={search}
                            handleChange={handleChange}
                            searchResult={searchResult}
                    />
                    <AuthorList currentAuthors={search ? searchResult : currentAuthors}/>
                </main>
            </div>
            <Pagination currentPage={currentPage}
                        authorPerPage={authorPerPage}
                        currentAuthors={currentAuthors}
                        totalAuthors={authors.length}
                        prevArrow={prevArrow}
                        nextArrow={nextArrow}
                        lastPage={numOfPages}
            />
        </div>
    );
}

export default App;
