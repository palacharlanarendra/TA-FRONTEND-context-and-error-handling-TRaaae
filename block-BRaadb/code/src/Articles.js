import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import articles from './data/articles.json';
import withSearch from './withSearch';
function Articles(props) {
  return (
    <>
      <input
        placeholder='Search'
        className='search'
        value={props.value}
        onChange={props.onChange}
      />
      <ul className='articles'>
        {props.filteredData.map((article) => (
          <li>
            <Link to={'articles/' + article.slug}>
              <h3>{article.title}</h3>
            </Link>
            <small>{article.author}</small>
          </li>
        ))}
      </ul>
    </>
  );
}

const EnhancedArticles = withSearch(Articles, articles);
export default withRouter(EnhancedArticles);
