import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from "../Movies/Movies";

function MainRoutes(props) {

  const [savedMovies, setSavedMovies] = React.useState(false);


  return (
    <div>
      <Header loggedIn={props.loggedIn} />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/movies">
          <Movies savedMovies={savedMovies} />
        </Route>
        <Route path="/saved-movies">
          <Movies savedMovies={!savedMovies} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default MainRoutes;
