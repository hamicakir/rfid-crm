// @flow
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from '@fortawesome/free-solid-svg-icons';

import styles from './Home.css';

type Props = {
  history: {
    push: () => void
  }
};

class Home extends Component<Props> {
  props: Props;

  constructor(props) {
    super(props);
    this.formRef = null;
  }

  handleSubmit = () => {
    console.log('THIS', this);
    const { history } = this.props;
    try {
      const formData = new FormData(this.inputRef);
      const email = formData.get('email');
      const password = formData.get('password');
      console.log(email, password);

      if (email === 'admin' && password === '123456') {
        console.log('REDIRECTING');
        history.push('/dashboard');
        console.log('REDIRECTING AFTER');
      }
    } catch (e) {
      console.log('Error:', e);
    }
  };

  render() {
    return (
      <div className={styles.flex}>
        <div className={styles.container}>
          <div className={styles.loginContainer}>
            <h2>RFID - CRM</h2>
            <form
              ref={ref => {
                this.inputRef = ref;
                return null;
              }}
              className={styles.form}
            >
              <input
                className={styles.input}
                name="email"
                type="text"
                placeholder="USERNAME"
              />
              <input
                className={styles.input}
                name="password"
                type="password"
                placeholder="PASSWORD"
              />
              <button
                className={styles.button}
                type="button"
                onClick={this.handleSubmit}
              >
                Giriş Yap
              </button>
            </form>
          </div>
          <div className={styles.setupContainer}>
            <Link to="/setup" className={styles.setupContainer}>
              <FontAwesomeIcon icon={faCogs} color="#fff" size="2x" />
              <p>Setup New Device</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
