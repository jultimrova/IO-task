import React, {useState, useEffect} from 'react';
import Search from './components/Search';
import AuthorList from './components/AuthorList';
import './App.css';
import data from './data/data.json';
import Author from "./components/Author";

export const AuthorContext = React.createContext();

const App = () => {
    const [search, setSearch] = useState('')
    const [searchResult, setSearchResult] = useState([]);

    const handleChange = e => {
        setSearch(e.target.value);
        console.log(search)
    }

    useEffect(() => {
        setSearchResult( author => {
            return data.filter(author => author.name.toLowerCase().includes(search.toLowerCase()))
        }
    )
    }, [search])


    return (
        <AuthorContext.Provider value={data}>
            <div className='app'>
                <div className='container'>
                    <main className='main'>
                        <Search search={search}
                                handleChange={handleChange}
                                searchResult={searchResult}
                        />
                        {
                            search ? searchResult.map((author, id) => {
                                return <Author key={id} {...author}/>
                            }) : <AuthorList/>
                        }
                    </main>
                </div>
            </div>
        </AuthorContext.Provider>
    );
}

export default App;
