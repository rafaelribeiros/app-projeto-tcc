import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationProvider, StackNavigation } from '@expo/ex-navigation';
import * as actions from '../actions/index';
import { Router } from '../../../router/routes';


class Navigator extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation
          id="master"
          defaultRouteConfig={{
            navigationBar: {
              backgroundColor: 'green',
              tintColor: '#ffffff',
            }
          }}
          initialRoute={Router.getRoute('home')}
        />
      </NavigationProvider>
    );
  }
}
export default connect(
  state => ({
    navState: state.navigator
  }),
  dispatch => ({
    navActions: bindActionCreators(actions, dispatch)
  }))(Navigator);
