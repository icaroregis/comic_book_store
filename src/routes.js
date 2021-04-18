import React from 'react';
import Home from './Pages/Home/index';
import InformationAboutComics from './Pages/InformationAboutComics/index';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route
          path='/InformationAboutComics/:id'
          component={InformationAboutComics}
        />
      </Switch>
    </BrowserRouter>
  );
}
