import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';

export default function configureStore(initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

  const store = createStore(
        reducers,
        initialState,
        composeEnhancers(applyMiddleware(thunk)),
  );

  return store;
}
