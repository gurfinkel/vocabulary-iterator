import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import CardDetails from '../card-details';
import DeckDetails from '../deck-details';
import DeckList from '../deck-list';
import Header from '../header';

import './app.css';

const App = () => {
  return (
    <Router>
      <div className="vocabulary-iterator-app">
        <Header/>
        <Route path='/decks' exact component={DeckList} />
        <Route path='/decks/:id' render={({match}) => {
          const {id} = match.params;
          return <DeckDetails itemId={id} />
        }}/>
        <Route path='/cards/:id' render={({match}) => {
          const {id} = match.params;
          return <CardDetails itemId={id} />
        }} />
      </div>
    </Router>
  );
};

export default App;