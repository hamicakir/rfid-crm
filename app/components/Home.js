// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from '@fortawesome/free-solid-svg-icons';

import styles from './Home.css';

type Props = {
  version: string
};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    const { version } = this.props;

    return (
      <div className={styles.flex}>
        <div className={styles.container}>
          <h2>Home - Version: {version} </h2>
          <div className={styles.setupContainer}>
            <Link to="/counter" className={styles.setupContainer}>
              <FontAwesomeIcon icon={faCogs} color="#fff" size="2x" />
              <p>Setup New Device</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
