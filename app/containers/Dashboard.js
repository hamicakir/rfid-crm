import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faPlus,
  faClipboard,
  faCheckCircle,
  faTimesCircle
} from '@fortawesome/free-solid-svg-icons';
import SocketIoClient from 'socket.io-client';

import routes from '../constants/routes';
import styles from './Dashboard.css';

const WebSocketEndpoint = 'http://localhost:3030';
const socket = SocketIoClient(WebSocketEndpoint);

class Dashboard extends Component {
  state = {
    cardNumber: null,
    user: null
  };

  componentDidMount() {
    socket.on('connect', () => {
      console.log('Connected to the server');

      socket.on('card readed', data => {
        console.log('DATA=>', data);
        this.setState({ ...data });
      });
    });
  }

  sendData = id => {
    console.log('SEND DATA', socket);
    socket.emit('card read', `CARD_NUMBER_${id}`, () => {
      console.log('EMITTED');
    });
  };

  render() {
    const { cardNumber, user } = this.state;
    console.log('THIS_STATE', this.state);

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
              {user && user.username ? <p>{user.username}</p> : <p>---</p>}
            </div>
            <div className={styles.infoContainer}>
              <h3>Card Number:</h3>
              {cardNumber && <p>{cardNumber}</p>}
            </div>
            <div style={styles.infoContainer}>
              <h3>Access Status</h3>
              {user && user.status === 'ACTIVE' ? (
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  color="#20C20E"
                  size="5x"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faTimesCircle}
                  color="#B33A3A"
                  size="5x"
                />
              )}
            </div>
          </div>
          <div className={styles.card}>
            <button type="button" onClick={() => this.sendData(2)}>
              Click Me FAIL
            </button>
            <button type="button" onClick={() => this.sendData(3)}>
              Click Me SUCCESS
            </button>
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
