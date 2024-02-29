import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [items, setItems] = useState()

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=1&skip=${currentPage - 1}&select=title,thumbnail`).then((res) => res.json()).then(
      (data) => {
        console.log("data : ", data);
        setItems(data)
        setTotalPages(Math.ceil(items.total));
      }
    )
  }, [currentPage])

  return (
    <div style={{ margin: "auto" }}>
      <div>
        currentPage = {currentPage}
        {
          items && items.products.map((item, index) =>
            <div key={index}>
              <div>id = {item.id}</div>
              <div>title = {item.title}</div>
              <img src={item.thumbnail} alt={item.title} />
            </div>)
        }
      </div>
      <footer className='footer'>
        {currentPage === 1 ? <></> :
          <button onClick={() => {
            currentPage > 1 ? setCurrentPage(currentPage - 1) : setCurrentPage(1)
          }}>
            Prev
          </button>
        }
        {Array.from({ length: totalPages }, (_, index) =>
          <button key={index} onClick={() => setCurrentPage(index + 1)}>{index + 1}</button>
        )}
        {currentPage === totalPages ? <></> :
          <button onClick={() => {
            currentPage >= totalPages ? setCurrentPage(totalPages) : setCurrentPage(currentPage + 1)
          }}>
            Next
          </button>
        }
      </footer>
    </div>
  )
}

export default Pagination