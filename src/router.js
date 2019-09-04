import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Repository from './Repository';
import Main from './Main';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/repository/:repository" component={Repository} />
      </Switch>
    </BrowserRouter>
  );
}
