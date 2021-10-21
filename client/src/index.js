import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DrPage from '../src/components/DrPage.js';
import reportWebVitals from './reportWebVitals';
import PtPortal from './components/PtPortal';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import reducer from './store/reducer'
import thunk from 'redux-thunk'
import { fetchPts } from './store/creators/actionCreators';
import About from './About'
import { Route } from 'react-router';
import { Switch } from 'react-router';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import DrListPage from './components/DrListPage';
import ptPrograms from './components/ptPrograms'
const PORT = process.env.PORT || 80
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}/>
          <Route exact path = '/DrListPage'component ={DrListPage}/>
          <Route exact path='/PtPortal' component={PtPortal}/>
          <Route exact path= '/ptPrograms' component={ptPrograms}/> 
      </Switch>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
