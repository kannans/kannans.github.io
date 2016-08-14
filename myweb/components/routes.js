
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import About from './About'
import Home from './Home'
import Contact from './Contact'
import Works from './Works'

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/works" component={Works}/>
  </Route>
);