// @flow
import { PersonTypes } from '../actions/person';
import type { Action } from './types';

type Persons = Array<Person>;
type Person = {
  cardId: string,
  name: string,
  surname: string,
  phoneNumber: string
};

const initialState: Persons = {
  persons: []
};

export default function person(state = initialState, action: Action) {
  console.log('ACTION', action);
  switch (action.type) {
    case PersonTypes.LIST_ALL_PERSON:
      return { persons: action.persons };
    case PersonTypes.ADD_PERSON:
      return { persons: action.persons };
    case PersonTypes.REMOVE_PERSON:
      return { persons: action.persons };
    default:
      return state;
  }
}
