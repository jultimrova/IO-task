import React, {useContext} from 'react';
import style from '../style/AuthorList.module.css';
import Author from './Author';
import {AuthorContext} from '../App'

const AuthorList = () => {
    const authors = useContext(AuthorContext)

    return (
        <div className={style.authorList}>
            {authors.map((author, index) => {
                return <Author key={index} {...author}/>
            })}
        </div>
    )

}

export default AuthorList;