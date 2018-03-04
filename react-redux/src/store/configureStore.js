/**
 * Created by taha on 9/11/17.
 */
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

const middleware = process.env.NODE_ENV !== 'production' ?
  [thunk, require('redux-immutable-state-invariant')()] :
  [thunk];

export default function configureStore(initialState) {
  // Call this function to add values of server-side rendering
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  );
}
