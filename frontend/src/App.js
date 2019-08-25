import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './Config';  // load global variables.

// load components 
import Import from './components/Import';
import Listing from './components/Listing';
import Detail from './components/Detail';

class App extends Component {
  render() {
    return (
      // routes configuration
      <Router>
        <h3 className="text-muted">Coding Chanllenge</h3>
        <nav>
          <ul className="nav nav-justified">
            <li><Link to={'/'} className="nav-link"> Listing </Link></li>
            <li><Link to={'/import'} className="nav-link">Import</Link></li>
          </ul>
        </nav>
        <Switch>
            <Route exact path='/' component={Listing} />
            <Route path='/import' component={Import} />
            <Route path='/detail/:id' component={Detail} />
        </Switch>
      </Router>
    );
  }
}

export default App;
