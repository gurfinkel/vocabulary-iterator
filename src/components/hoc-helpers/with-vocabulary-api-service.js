import React from 'react';

import { VocabularyApiConsumer } from '../vocabulary-api-context';

const withVocabularyApiService = (View) => {
  return (props) => {
    return (
        <VocabularyApiConsumer>
          {
            (service) => {
              return (
                <View {...props} service={service} />
              );
            }
          }
        </VocabularyApiConsumer>
    );
  }
};

export default withVocabularyApiService;
