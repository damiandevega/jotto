import { storeFactory } from '../test/testUtils';
import { guessWord } from './actions';

describe('guessWord action dispatcher', () => {
  const secretWord = 'party';
  const unsuccessfulGuessedWord = 'train';

  describe('no guessed words', () => {
    let store;
    const initialState = { secretWord };
    beforeEach(() => {
      store = storeFactory(initialState);
    })

    test('updates state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuessedWord));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [{
          guessedWord: unsuccessfulGuessedWord,
          letterMatchCount: 3
        }]
      }
      expect(newState).toEqual(expectedState);
    });

    test('updates state correctly for successful guess', () => {

    });
  });

  describe('some guessed words', () => {
    test('updates state correctly for unsuccessful guess', () => {

    });

    test('updates state correctly for successful guess', () => {

    });
  });
});