import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Navigator from './modules/navigator/components/Navigator';

const store = configureStore({});

export default class Root extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
