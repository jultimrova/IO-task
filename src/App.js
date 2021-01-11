import React, {useEffect, useState} from 'react';
import Search from './components/Search';
import AuthorList from './components/AuthorList';
import './App.css';
import data from './data/data.json';
import Pagination from './components/common/Pagination';

const App = () => {
    const [sortedAuthors, setSortedAuthors] = useState([]);
    const [search, setSearch] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [authorPerPage] = useState(10);
    const [sortType, setSortType] = useState('pageviews');

    sortByPageView();

    useEffect(() => {
        const sortAuthors = type => {
            const types = {
                name: 'name',
                pageviews: 'pageviews'
            };
            const sortProperty = types[type];

            if (type === 'name') {
                const sorted = [...data].sort((a,b) => a[sortProperty].localeCompare(b[sortProperty]));
                setSortedAuthors(sorted);
            }
            if (type === 'pageviews') {
                const sorted = [...data].sort((a, b) => b[sortProperty] - a[sortProperty]);
                setSortedAuthors(sorted);
            }
        }

        sortAuthors(sortType);
    }, [sortType])

    useEffect(() => {
        setSearchResult(author => {
                return data.filter(author => author.name.toLowerCase().includes(search.toLowerCase()));
            }
        )
    }, [search, data])

    console.log('authors ', sortedAuthors)

    // Get current author
    const indexOfLastAuthor = currentPage * authorPerPage;
    const indexOfFirstAuthor = indexOfLastAuthor - authorPerPage;
    const currentAuthors = sortedAuthors.slice(indexOfFirstAuthor, indexOfLastAuthor);
    const totalAuthorsCount = data.length;

    function sortByPageView() {
        data.sort((a, b) => b.pageviews - a.pageviews)
            .forEach((author, id) => {
                author.position = id + 1;
                author.iconColor = randomHex();
            })
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

    return (
        <div className='app'>
            <select onChange={e => setSortType(e.target.value)}>
                <option value='pageviews'>by pageviews</option>
                <option value='name'>by name</option>
            </select>
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
                        totalAuthors={data.length}
                        prevArrow={prevArrow}
                        nextArrow={nextArrow}
                        lastPage={numOfPages}
            />
        </div>
    );
}

export default App;
