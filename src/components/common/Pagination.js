const Pagination = ({authorsPerPage, totalAuthors, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i<=Math.ceil(totalAuthors/authorsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul>
                {pageNumbers.map(number => {
                    return <li key={number}>
                        <a onClick={() => paginate(number)} href="!#">{number}</a>
                    </li>
                })}
            </ul>
        </nav>
    )
}

export default Pagination;