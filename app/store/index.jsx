import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from 'reducers';

export default function configureStore(initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

  const store = createStore(
        reducers,
        initialState,
        composeEnhancers(applyMiddleware(thunk)),
  );

  if (module.hot) {
    module.hot.accept('reducers', () => {
      const nextReducers = require('reducers').default; // eslint-disable-line

      store.replaceReducer(nextReducers);
    });
  }

  return store;
}

export { default as ColumnDefSelector } from './columnDefSelector';
