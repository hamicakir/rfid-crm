import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from '../components/Counter.css';
import routes from '../constants/routes';

class Dashboard extends Component {
  render() {
    return (
      <div className={styles.backButton} data-tid="backButton">
        <Link to={routes.HOME}>
          <i className="fa fa-arrow-left fa-3x" />
        </Link>
        <p>DASHBOARD</p>
      </div>
    );
  }
}

export default Dashboard;
