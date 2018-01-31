/**
 * Created by taha on 9/11/17.
 */
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  // Call this function to add values of server-side rendering
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, reduxImmutableStateInvariant())
  );
}
