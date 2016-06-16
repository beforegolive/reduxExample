import React, {PropTypes} from 'react'

var BookList=({ books })=>
    <ul>
      {books.map((e,i)=><li key={i}>{e.title}</li>)}
    </ul>

BookList.propTypes={
  books: PropTypes.array.isRequired
}

export default BookList
