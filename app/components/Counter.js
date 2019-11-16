// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Counter.css';
import routes from '../constants/routes';

type Props = {
  person: any,
  getPersonList: () => void,
  addPerson: () => void,
  removePerson: () => void
};

export default class Counter extends Component<Props> {
  props: Props;

  async componentDidMount() {
    const { getPersonList } = this.props;
    await getPersonList();
  }

  render() {
    const { person, addPerson, removePerson } = this.props;
    console.log(this.props);
    return (
      <div>
        {person && 'PersonList'}
        <div className={styles.backButton} data-tid="backButton">
          <Link to={routes.HOME}>
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className={`counter ${styles.counter}`} data-tid="counter">
          {person && person.map(p => <p>{p.name}</p>)}
        </div>
        <div className={styles.btnGroup}>
          <button
            className={styles.btn}
            onClick={() =>
              addPerson({
                cardId: 5,
                name: 'Hami',
                surname: 'Çakır',
                phoneNumber: '5060540591'
              })
            }
            data-tclass="btn"
            type="button"
          >
            <i className="fa fa-plus" />
          </button>
          <button
            className={styles.btn}
            onClick={() => removePerson({ cardId: 5 })}
            data-tclass="btn"
            type="button"
          >
            <i className="fa fa-minus" />
          </button>
        </div>
      </div>
    );
  }
}
