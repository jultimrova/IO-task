import React from 'react';
import style from '../style/AuthorList.module.css';
import Author from './Author';

const AuthorList = ({currentAuthors}) => {
    return (
        <ol className={style.authorList}>
            {currentAuthors.map((author, index) => {

                return <Author key={index} {...author}/>
            })}
        </ol>
    )
}

export default AuthorList;