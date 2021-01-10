import style from '../style/Author.module.css';
import medal1tPlace from '../img/medals/1st.svg';
import medal2Place from '../img/medals/2nd.svg';
import medal3Place from '../img/medals/3rd.svg';

const Author = ({name, count_pub, pageviews, position, iconColor}) => {
    return (
        <li className={style.author}>
            <div className={style.authorIncrement}>{position}</div>
            <div className={style.authorIcon} style={{background: `${iconColor}`}}>{name[0]}</div>
            <div className={style.authorInfo}>
                <div className={style.authorName}>{name}</div>
                <div className={style.authorPublications}>{count_pub} публ.</div>
            </div>
            <div className={style.medal}>
                {position === 1 ? <img src={medal1tPlace} alt=""/> : ''}
                {position === 2 ? <img src={medal2Place} alt=""/> : ''}
                {position === 3 ? <img src={medal3Place} alt=""/> : ''}
            </div>
            <div className={style.authorViews}>{pageviews}</div>
        </li>
    )
}

export default Author;