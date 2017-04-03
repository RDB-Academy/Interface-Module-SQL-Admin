import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import reducers from 'reducers';

export default function configureStore(history, initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
  const middleware = routerMiddleware(history);
  const store = createStore(
        reducers,
        initialState,
        composeEnhancers(
          applyMiddleware(middleware),
          applyMiddleware(thunk),
        ),
  );

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('reducers', () => {
        const nextReducers = require('reducers').default; // eslint-disable-line

        store.replaceReducer(nextReducers);
      });
    }
  }

  return store;
}
