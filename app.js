import React from 'react/lib/React';
import {render} from 'react-dom/lib/ReactDOM';
import {Router, Route, hashHistory} from 'react-router';
import Comp from './Comp';
render(
  <Router history={hashHistory}>
    <Route path="/" component={Comp} />
  </Router>,
  document.getElementById('app')
);