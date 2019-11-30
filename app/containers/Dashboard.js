import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPlus, faClipboard } from '@fortawesome/free-solid-svg-icons';

import routes from '../constants/routes';
import styles from './Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <>
        <div className={styles.backButton} data-tid="backButton">
          <Link to={routes.HOME}>
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className={styles.container}>
          <div className={styles.card}>
            <FontAwesomeIcon
              className={styles.icon}
              icon={faUser}
              size="6x"
              color="#42a7f2"
            />
            <div className={styles.infoContainer}>
              <h3>Card Holder Name:</h3>
              <p>Hami ÇAKIR</p>
            </div>
            <div className={styles.infoContainer}>
              <h3>Card Number:</h3>
              <p>ASDasdASDasdASD</p>
            </div>
            <div className={styles.infoContainer}>
              <h3>Card Number:</h3>
              <p>ASDasdASDasdASD</p>
            </div>
            <h3>Card Holder Name: </h3>
            <h3>Card Holder Name: </h3>
          </div>
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <FontAwesomeIcon
                className={styles.icon}
                icon={faPlus}
                size="6x"
                color="#42a7f2"
              />
              <div className={styles.divider} />
              <FontAwesomeIcon
                className={styles.icon}
                icon={faClipboard}
                size="6x"
                color="#42a7f2"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;
