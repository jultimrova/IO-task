import style from "../style/Author.module.css";
import medal from '../img/medals/1st.svg'

const Author = () => {
    return (
        <div className={style.author}>
            <div className={style.authorIncrement}></div>
            <div className={style.authorIcon}>М</div>
            <div className={style.authorInfo}>
                <div className={style.authorName}>Марина Исаева</div>
                <div className={style.authorPublications}>5 публ</div>
            </div>
            <div className={style.medal}>
                <img src={medal} alt=""/>
            </div>
            <div className={style.authorViews}>555 555</div>
        </div>
    )
}

export default Author;