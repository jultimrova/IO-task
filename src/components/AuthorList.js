import style from '../style/AuthorList.module.css';

const AuthorList = () => {
    return (
        <>
            <div className={style.authorList}>
                <div className={style.author}>
                    <div className={style.authorInformation}>
                        <h4 className={style.authorName}>Ярослав Елисеев</h4>
                        <span className={style.authorPublication}>5 публ.</span>
                    </div>
                    <div className={style.authorViews}>500 555</div>
                </div>
            </div>
        </>
    )
}

export default AuthorList;