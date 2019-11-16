// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';

type Props = {
  version: string
};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    const { version } = this.props;

    return (
      <div className={styles.container} data-tid="container">
        <h2>Home - Version: {version} </h2>
        <Link to={routes.COUNTER}>to Counter</Link>
      </div>
    );
  }
}
