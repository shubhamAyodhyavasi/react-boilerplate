import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from 'react-redux'

import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Switch>
          <Route
            path="/"
            exact
            component={props => <div {...props} >Home</div>}
          />
      </Switch>
    </div>
  );
}
const mapStateToProps = state => ({
  user: state.user,
});
export default withRouter(
  connect(
    mapStateToProps,
  )(App)
);

