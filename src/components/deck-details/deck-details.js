import React from 'react';

import { withVocabularyApiService } from '../hoc-helpers';

import './deck-details.css';

const DeckDetails = ({service, itemId}) => {
  const {name, dueCards, newCards, learningCards} = service.getDeck(parseInt(itemId));
  return (
    <div className='deck-details'>
      <h2>{name}</h2>
      <ul>
        <li>New: {newCards}</li>
        <li>Learning: {learningCards}</li>
        <li>To review: {dueCards}</li>
      </ul>
      <button type="button" className="btn btn-success">Study now</button>
    </div>
  );
};

export default withVocabularyApiService(DeckDetails);
