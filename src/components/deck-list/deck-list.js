import React from 'react';
import {withRouter} from 'react-router-dom';

import './deck-list.css';

const items = [
  {id: 1, name: 'English Common Idioms', dueCards: 100, newCards: 20},
  {id: 2, name: 'English Everyday Idioms', dueCards: 0, newCards: 0},
  {id: 3, name: 'English Introductory Phrases', dueCards: 0, newCards: 20},
  {id: 4, name: 'English Vocabulary Spoken Collocations', dueCards: 42, newCards: 13},
];

const DeckList = ({history}) => {
  const decks = items.map(({id, name, dueCards, newCards}) => {
    return (
      <tr key={id} className="table-light" onClick={() => history.push(`${id}`)}>
        <th scope="row">{name}</th>
        <td>{dueCards}</td>
        <td>{newCards}</td>
      </tr>
    );
  });

  return (
    <div className='deck-list'>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Deck</th>
            <th scope="col">Due</th>
            <th scope="col">New</th>
          </tr>
        </thead>
        <tbody>
          {decks}
        </tbody>
      </table>
    </div>
  );
};

export default withRouter(DeckList);
