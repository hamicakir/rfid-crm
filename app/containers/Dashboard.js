import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faPlus,
  faClipboard,
  faCheckCircle,
  faTimesCircle,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import SocketIoClient from 'socket.io-client';

import routes from '../constants/routes';
import styles from './Dashboard.css';

const WebSocketEndpoint = 'http://localhost:3030';
const socket = SocketIoClient(WebSocketEndpoint);

type Props = {
  history: {
    push: () => void
  }
};

class Dashboard extends Component<Props> {
  props: Props;

  state = {
    cardNumber: null,
    user: null,
    isModalVisible: false
  };

  componentDidMount() {
    socket.on('connect', () => {
      console.log('Connected to the server');

      socket.on('card readed', data => {
        console.log('DATA=>', data);
        this.setState(prevState => ({ ...prevState, ...data }));
      });
    });
  }

  sendData = id => {
    console.log('SEND DATA', socket);
    socket.emit('card read', `CARD_NUMBER_${id}`, () => {
      console.log('EMITTED');
    });
  };

  changeModalVisibility = () => {
    this.setState(prevState => ({
      ...prevState,
      isModalVisible: !prevState.isModalVisible
    }));
  };

  handleSubmit = () => {
    try {
      const { cardNumber } = this.state;
      const formData = new FormData(this.inputRef);
      const username = formData.get('username');
      console.log('FORM_DAS', cardNumber, username);
      if (cardNumber) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        fetch('http://localhost:3030/save-user', {
          method: 'POST',
          headers,
          body: JSON.stringify({ cardNumber, username })
        })
          .then(async res => {
            console.log(res);
            const parsedData = await res.json();
            // eslint-disable-next-line promise/always-return
            if (parsedData && parsedData.success) {
              return this.changeModalVisibility();
            }
          })
          .catch(e => {
            console.log('Error', e);
          });
      }
    } catch (e) {
      console.log('Error:', e);
    }
  };

  render() {
    const { cardNumber, user, isModalVisible } = this.state;
    console.log('THIS_STATE', this.state);

    return (
      <>
        {isModalVisible && (
          <div className={styles.modalContainer}>
            <div className={styles.cardContainer}>
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
              <div
                onClick={this.changeModalVisibility}
                className={styles.closeIcon}
              >
                <FontAwesomeIcon icon={faTimes} color="#42a7f2" />
              </div>
              <div className={styles.card} style={{ width: '400px' }}>
                <form
                  className={styles.form}
                  ref={ref => {
                    this.inputRef = ref;
                    return null;
                  }}
                >
                  <input
                    type="text"
                    name="cardNumber"
                    required
                    disabled
                    value={cardNumber}
                    className={styles.input}
                  />
                  <input
                    name="username"
                    type="text"
                    placeholder="USERNAME"
                    className={styles.input}
                  />
                  <button
                    type="button"
                    onClick={this.handleSubmit}
                    className={styles.button}
                  >
                    Save User
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
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
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
              <div onClick={this.changeModalVisibility}>
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={faPlus}
                  size="6x"
                  color="#42a7f2"
                />
              </div>
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
