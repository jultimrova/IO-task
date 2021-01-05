import style from "../style/Author.module.css";
import medal from '../img/medals/1st.svg'

const Author = ({name, count_pub, pageviews}) => {
    return (
        <div className={style.author}>
            <div className={style.authorIncrement}> </div>
            <div className={style.authorIcon}>{name[0]}</div>
            <div className={style.authorInfo}>
                <div className={style.authorName}>{name}</div>
                <div className={style.authorPublications}>{count_pub} публ.</div>
            </div>
            <div className={style.medal}>
                <img src={medal} alt=""/>
            </div>
            <div className={style.authorViews}>{pageviews}</div>
        </div>
    )
}

export default Author;