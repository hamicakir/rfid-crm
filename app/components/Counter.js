// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Counter.css';
import routes from '../constants/routes';

type Props = {};

export default class Counter extends Component<Props> {
  props: Props;

  render() {
    console.log(this.props);
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to={routes.HOME}>
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className={styles.container}>
          <div className={styles.card}>
            <h2>RFID - SETUP</h2>
            <form className={styles.form}>
              <input
                className={styles.input}
                name="wifiName"
                type="text"
                placeholder="WIFI NAME"
              />
              <input
                className={styles.input}
                name="wifiPasssword"
                type="password"
                placeholder="WIFI PASSWORD"
              />
              <button type="button" className={styles.button}>
                SETUP
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
