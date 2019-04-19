import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import CardDetails from '../card-details';
import DeckDetails from '../deck-details';
import DeckList from '../deck-list';
import Header from '../header';
import { VocabularyApiProvider } from '../vocabulary-api-context';
import VocabularyApiService from '../../services/vocabulary-api-service';

import './app.css';

const service = new VocabularyApiService();

const App = () => {
  return (
    <VocabularyApiProvider value={service}>
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
    </VocabularyApiProvider>
  );
};

export default App;