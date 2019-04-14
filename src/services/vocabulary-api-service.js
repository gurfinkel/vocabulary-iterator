export default class VocabularyApiService {
  cards = [
    {id: 1, frontSide: 'a while back; a while ago', backSide: 'некоторое время назад; раньше'},
    {id: 2, frontSide: 'the holy grail', backSide: 'Святой Грааль'},
    {id: 3, frontSide: 'there is no hurry', backSide: 'спешить некуда'},
    {id: 4, frontSide: 'juvenile delinquent', backSide: 'малолетний преступник'},
  ];

  decks = [
    {id: 1, name: 'English Common Idioms', dueCards: 100, newCards: 20, learningCards: 0},
    {id: 2, name: 'English Everyday Idioms', dueCards: 0, newCards: 0, learningCards: 0},
    {id: 3, name: 'English Introductory Phrases', dueCards: 0, newCards: 20, learningCards: 0},
    {id: 4, name: 'English Vocabulary Spoken Collocations', dueCards: 42, newCards: 13, learningCards: 0},
    {id: 5, name: 'English phrasal verbs', dueCards: 60, newCards: 20, learningCards: 0},
  ];

  getCards = () => {
    return this.cards;
  };

  getCard = (itemId) => {
    return this.cards.find(({id}) => itemId === id);
  };

  getDecks = () => {
    return this.decks;
  };

  getDeck = (itemId) => {
    return this.decks.find(({id}) => itemId === id);
  };
}