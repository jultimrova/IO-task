import style from '../../style/Pagination.module.css'

const Pagination = ({currentPage, prevArrow, nextArrow}) => {
    return (
        <>
            <nav>
                <ul className={style.pagination}>
                    <div className={style.pagination}>
                        {currentPage !== 1 ?
                            <a href="!#" className={style.leftArrow} onClick={() => prevArrow}> </a> : ''}
                        <span>1 - 10</span>
                        <a href="!#" className={style.rightArrow} onClick={() => nextArrow}> </a>
                    </div>
                </ul>
            </nav>
        </>
    )
}

export default Pagination;