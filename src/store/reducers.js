import { combineReducers } from 'redux';
import { NavigationReducer } from '@expo/ex-navigation';
import navigator from '../modules/navigator/reducers/index';

export default combineReducers({
  navigator,
  navigation: NavigationReducer
});
