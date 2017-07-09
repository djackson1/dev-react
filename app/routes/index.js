import React from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Main from './Main/index'
import Admin from './Admin/index'

ReactDOM.render(<Router>
  <div>
    <Route exact path="/" component={Main}/>
    <Route path="/admin" component={Admin}/>
  </div>
</Router>, document.getElementById('app'));