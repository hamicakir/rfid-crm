// @flow
import React, { Component } from 'react';
import Home from '../components/Home';
import getVersion from '../api';

type Props = {};

export default class HomePage extends Component<Props> {
  props: Props;

  state = {
    version: null
  };

  componentDidMount() {
    const version = getVersion();
    if (version) {
      this.setState({ version });
    }
  }

  render() {
    const { version } = this.state;

    return <Home version={version} />;
  }
}
