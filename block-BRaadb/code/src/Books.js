import React from 'react';
import books from './data/books.json';
import withSearch from './withSearch';
function Books(props) {
  return (
    <div className='page'>
      <input
        placeholder='Search'
        className='search'
        value={props.value}
        onChange={props.onChange}
      />
      <ul className='archive'>
        {props.filteredData.map((book) => (
          <Book {...book} />
        ))}
      </ul>
    </div>
  );
}

function Book(props) {
  return (
    <li className='book'>
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>
        Author:<span>{props.author}</span>
      </p>
      <a href={props.website}>
        <button>Buy Now</button>
      </a>
    </li>
  );
}

const EnhancedBooks = withSearch(Books, books);
export default EnhancedBooks;
