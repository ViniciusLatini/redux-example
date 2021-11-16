import {combineReducers} from 'redux';

import counterReducer from './counter/counterReducer';

export const reducers = combineReducers({
  counter:counterReducer
})