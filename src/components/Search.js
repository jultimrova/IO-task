import style from '../style/Search.module.css'

const Search = () => {
    return (
        <div className={style.search}>
            <form className={style.form}>
                <input className={style.searchInput} type='text' placeholder='Поиск автора по имени'/>
            </form>
        </div>
    )
}

export default Search;