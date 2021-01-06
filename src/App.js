import React, {useState, useEffect} from 'react';
import Search from './components/Search';
import AuthorList from './components/AuthorList';
import './App.css';
import data from './data/data.json';
import Author from "./components/Author";
import Pagination from "./components/common/Pagination";

export const AuthorContext = React.createContext();

const App = () => {
    const [authors] = useState(data)
    const [search, setSearch] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [authorPerPage] = useState(10);

    const handleChange = e => {
        setSearch(e.target.value);
        console.log(search)
    }

    useEffect(() => {
        setSearchResult( author => {
            return authors.filter(author => author.name.toLowerCase().includes(search.toLowerCase()))
        }
    )
    }, [search])

    // Get current author
    const indexOfLastAuthor = currentPage * authorPerPage;
    const indexOfFirstAuthor = indexOfLastAuthor -authorPerPage;
    const currentAuthors = authors.slice(indexOfFirstAuthor, indexOfLastAuthor);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <AuthorContext.Provider value={currentAuthors}>
            <div className='app'>
                <div className='container'>
                    <main className='main'>
                        <Search search={search}
                                handleChange={handleChange}
                                searchResult={searchResult}
                        />
                        {
                            search ? searchResult.map((author, id) => {
                                return <Author key={id} {...author} />
                            }) : <AuthorList/>
                        }
                        <Pagination authorsPerPage={authorPerPage}
                                    totalAuthors={authors.length}
                                    paginate={paginate}
                        />
                    </main>
                </div>
            </div>
        </AuthorContext.Provider>
    );
}

export default App;
