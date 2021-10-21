import React from 'react';
import withSearch from './withSearch';
import people from './data/got.json';
let allPeople = people.reduce((acc, cv) => {
  acc = acc.concat(cv.people);
  return acc;
}, []);
console.log(allPeople, 'hello');
function People(props) {
  return (
    <>
      <input
        placeholder='Search'
        className='search'
        value={props.value}
        onChange={props.onChange}
      />
      <ul className='people'>
        {props.filteredData.map((sp) => (
          <SinglePerson {...sp} />
        ))}
      </ul>
    </>
  );
}

function SinglePerson(props) {
  return (
    <li className='card'>
      <div className='info'>
        <img src={props.image} alt={props.name} />
        <h2>{props.name}</h2>
      </div>
      <p>{props.description}</p>
      <a href={props.wikiLink}>Learn More!</a>
    </li>
  );
}

const EnhancedPeople = withSearch(People, allPeople);
export default EnhancedPeople;
