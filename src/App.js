import Search from './components/Search';
import AuthorList from './components/AuthorList';
import './App.css';

const App = () => {
    return (
        <div className='app'>
            <div className='container'>
                <main className='main'>
                    <Search/>
                    <AuthorList/>
                </main>
            </div>
        </div>
    );
}

export default App;
