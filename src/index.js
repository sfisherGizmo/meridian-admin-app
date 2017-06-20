import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';

import Dashboard from './components/dashboard';
import AddClient from './components/add-client';
import NoMatch from './components/no-match';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
          <div>
              <Switch>
                  <Route
                      path="/edit-client/:id"
                      component={ AddClient } />
                  <Route
                      path="/"
                      component={ Dashboard } />
                  <Route
                      component={ NoMatch } />
              </Switch>
          </div>
      </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
