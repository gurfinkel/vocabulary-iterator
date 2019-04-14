import React from 'react';
import {withRouter} from 'react-router-dom';

import VocabularyApiService from '../../services/vocabulary-api-service';

import './deck-list.css';

const service = new VocabularyApiService();

const DeckList = ({history}) => {
  const decks = service.getDecks().map(({id, name, dueCards, newCards}) => {
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
