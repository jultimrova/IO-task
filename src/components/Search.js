import style from '../style/Search.module.css'

const Search = ({search, handleChange}) => {
    return (
        <div className={style.search}>
            <form className={style.form}>
                <input className={style.searchInput}
                       type='text'
                       placeholder='Поиск автора по имени'
                       value={search}
                       onChange={handleChange}
                />
            </form>
        </div>
    )
}

export default Search;