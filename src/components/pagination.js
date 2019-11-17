import React from "react"

const Pagination = ({ currentPage, numPages }) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = (currentPage - 1 === 1 ? "/" : "/p/"+(currentPage - 1).toString())
  const nextPage = "/p/"+(currentPage + 1).toString()
  
  return (
    <nav aria-label="Event page navigation">
      <ul className="pagination">
        <li className={`page-item` + (isFirst && ` disabled`)}>
          <a className="page-link" href={prevPage} tabIndex="-1">Previous</a>
        </li>
        <li className={`page-item` + (isLast && ` disabled`)}>
          <a className="page-link" href={nextPage}>Next</a>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination