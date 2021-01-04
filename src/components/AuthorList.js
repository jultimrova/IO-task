import style from '../style/AuthorList.module.css';
import Author from "./Author";

const AuthorList = () => {
    return (
        <div className={style.authorList}>
            <Author/>
        </div>
    )

}

export default AuthorList;