import React from 'react';
import { Route, IndexRoute } from 'react-router';
import CommentList from './components/comment-list';

import App from './components/app';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={CommentList} />
  </Route>
);
