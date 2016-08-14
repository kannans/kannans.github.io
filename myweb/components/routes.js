
import React from 'react'
import {Router, browserHistory, Route, IndexRoute } from 'react-router'
import App from './App'
import About from './About'
import Home from './Home'
import Contact from './Contact'
import Works from './Works'

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/works" component={Works}/>
    </Route>
  </Router>
);