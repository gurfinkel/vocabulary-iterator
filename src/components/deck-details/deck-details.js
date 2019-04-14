import React from 'react';

import './deck-details.css';

const DeckDetails = ({itemId}) => {
  return (
    <div className='deck-details'>
      <h2>deck-details for {itemId}</h2>
      <ul>
        <li>New: 20</li>
        <li>Learning: 20</li>
        <li>To review: 20</li>
      </ul>
      <button type="button" className="btn btn-success">Study now</button>
    </div>
  );
};

export default DeckDetails;
