import style from '../../style/Pagination.module.css'

const Pagination = ({currentPage, nextArrow, prevArrow, lastPage, currentAuthors, totalAuthors, authorPerPage}) => {
    return (
        <>
            <nav>
                <ul className={style.pagination}>
                    <div className={style.pagination}>
                        {currentPage !== 1 ?
                            <a href="#" className={style.leftArrow} onClick={prevArrow}> </a> : ''}
                        <span>
                            {currentPage !== lastPage()
                                ? (currentPage * authorPerPage - authorPerPage) + 1
                                : (totalAuthors - currentAuthors.length) + 1} <span> - </span>
                            {currentPage !== lastPage()
                                ? currentAuthors.length * currentPage
                                : totalAuthors}
                        </span>
                        {currentPage !== lastPage() ?
                            <a href="#" className={style.rightArrow} onClick={nextArrow}> </a> : ''}
                    </div>
                </ul>
            </nav>
        </>
    )
}

export default Pagination;