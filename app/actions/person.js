// @flow
import type { Dispatch } from '../reducers/types';

// eslint-disable-next-line import/prefer-default-export
export const PersonTypes = {
  ADD_PERSON: 'ADD_PERSON',
  REMOVE_PERSON: 'REMOVE_PERSON',
  LIST_ALL_PERSON: 'LIST_ALL_PERSON'
};

const addPersonType = persons => ({
  type: PersonTypes.ADD_PERSON,
  persons
});

export const addPerson = ({ cardId, name, surname, phoneNumber }) => (
  dispatch: Dispatch
) => {
  const { persons = [] } = JSON.parse(localStorage.getItem('persons')) || {};

  console.log('LOCAL_STORAGE', persons, typeof persons);

  persons.push({ cardId, name, surname, phoneNumber });

  console.log('persons.ppush', persons);

  localStorage.setItem('persons', JSON.stringify({ persons }));

  dispatch(addPersonType(persons));
};

export function removePerson({ cardId }) {
  return (dispatch: Dispatch) => {
    const { persons = [] } = JSON.parse(localStorage.getItem('persons')) || {};

    const updatedPersons = persons.filter(person => cardId !== person.cardId);

    localStorage.setItem(
      'persons',
      JSON.stringify({ persons: updatedPersons })
    );

    dispatch(() => ({ type: PersonTypes.REMOVE_PERSON, persons }));
  };
}

export function getPersonList() {
  return (dispatch: Dispatch) => {
    try {
      const { persons } = JSON.parse(localStorage.getItem('persons')) || {};
      console.log('PERSONS_GET', persons);
      dispatch(() => ({ type: PersonTypes.LIST_ALL_PERSON, persons }));
    } catch (e) {
      console.log('Error: ', e);
    }
  };
}
