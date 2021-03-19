import React from 'react';
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';
import './App.css';
import Register from '../landing/Form/AuthForm/Register/Register';
import { withRouter } from "react-router";
import Header from '../landing/Header/Header';
import Footer from '../landing/Footer/Footer';
import Main from '../landing/Main/Main';
import Movies from '../landing/Movies/Movies';
import SavedMovies from '../landing/SavedMovies/SavedMovies';
import Profile from '../landing/Form/Profile/Profile';
import { CurrentUser } from '../../contexts/CurrentUser';
import ProtectedRoute from '../landing/ProtectedRoute/ProtectedRoute';
import Login from '../landing/Form/AuthForm/Login/Login';
import NotFound from '../landing/NotFound/NotFound';
import * as MainApi from '../../utils/MainApi';
import * as constants from '../../utils/constants';
import Preloader from '../landing/Preloader/Preloader';

function App() {
  const [pageSavedMovies, setPageSavedMovies] = React.useState(false);

  const [currentUser, setCurrentUser] = React.useState({
    name: 'Имя',
    email: 'email',
  });
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [loggedIn, setLoggedIn] = React.useState(false);

  const [preloader, setPreloader] = React.useState(false);

  const [isAuthCheck, setAuthCheck] = React.useState(false);

  const history = useHistory();

  function onSignOut() {
    localStorage.removeItem('token');
    localStorage.removeItem(constants.MOVIES_LOCAL_KEY);
    localStorage.removeItem(constants.MOVIES_LOCAL_SEARCH);
    localStorage.removeItem(constants.SAVEDMOVIES_LOCAL_SEARCH);
    setMovies([]);
    setSavedMovies([]);
    MainApi.setToken('');
    setLoggedIn(false);
    history.push('/');
  };

  function tokenCheck() {

    const jwt = localStorage.getItem('token');
    if (jwt) {
      MainApi.setToken(jwt);
      MainApi.getContent(jwt)
        .then((res) => {
          if (res) {
            setCurrentUser(res);
            setLoggedIn(true);
          }
        })
        .catch(err => console.log(err))
        .finally(() => {
          setAuthCheck(true);
        });
    } else {
      setAuthCheck(true);
    }
  };

  React.useEffect(tokenCheck, [loggedIn]);

  const onRegister = (name, email, password) => {
    return MainApi.register(name, email, password)
      .then(() => {
        return onLogin(email, password);
      })
      .catch(err => {
        console.log(err);
        return Promise.reject(err);
      });
  };

  const onLogin = (email, password) => {
    return MainApi.authorize(email, password)
      .then((data) => {
        if (data.token) {
          setLoggedIn(true);
          history.push('/movies');
        };
      })
      .catch(err => {
        console.log(err);
        return Promise.reject(err);
      })
      .finally(() => {
        setAuthCheck(true);
      });
  };

  React.useEffect(() => {
    if (loggedIn) {
      if (localStorage.getItem(constants.MOVIES_LOCAL_KEY)) {

        setMovies(JSON.parse(localStorage.getItem(constants.MOVIES_LOCAL_KEY)));
      }
      MainApi.getMovies()
        .then(data => {
          setSavedMovies(data);
        }).catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);



  function saveMovie(data) {
    const newMovie = {
      country: data.country,
      director: data.director,
      duration: data.duration,
      year: data.year,
      description: data.description,
      image: `https://api.nomoreparties.co${data.image.url}`,
      trailer: data.trailerLink,
      movieId: data.id,
      nameRU: data.nameRU,
      nameEN: data.nameEN,
      thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
    };
    return MainApi.postMovies(newMovie)
      .then((res) => {
        let newMovies = movies.map((item) => {
          if (item.id === data.id) {
            item.isLiked = true;
          }
          return item;
        })
        setMovies(newMovies);
        savedMovies.push(res);
        setSavedMovies(savedMovies.slice(0));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function deleteMovie(id) {
    let idDel;
    savedMovies.some((movie) => {
      if (movie.movieId === id) {
        idDel = movie._id;
        return true;
      }
    });
    if (idDel) {
      return MainApi.deleteMovies(idDel)
        .then(() => {
          setSavedMovies(savedMovies.filter((item) => item.movieId !== id));
        })
        .catch((err) => {
          console.log(err);
        });
    }
    else {
      return Promise.resolve()
    };
  };

  return (
    <div className="app">
      <Route exact path={['/saved-movies', '/movies', '/', '/profile']}>
        <Header loggedIn={loggedIn} />
      </Route>
      {!isAuthCheck &&
        <Preloader />
      }
      {isAuthCheck &&
        <CurrentUser.Provider value={currentUser}>
          <Switch>
            <Route path="/signup">
              {loggedIn ? <Redirect to="/profile" /> : <Register onRegister={onRegister} />}
            </Route>
            <Route path="/signin">
              {loggedIn ? <Redirect to="/profile" /> : <Login onLogin={onLogin} />}
            </Route>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/movies">
              <ProtectedRoute
                path="/movies"
                loggedIn={loggedIn}
                component={Movies}
                pageSavedMovies={pageSavedMovies}// !!!!
                loggedIn={loggedIn}
                saveMovie={saveMovie}
                deleteMovie={deleteMovie}
                savedMovies={savedMovies}
                movies={movies}
                setMovies={setMovies}
              />
            </Route>
            <Route path="/saved-movies">
              <ProtectedRoute path="/saved-movies"
                loggedIn={loggedIn}
                component={SavedMovies}
                pageSavedMovies={!pageSavedMovies}// !!!!
                savedMovies={savedMovies}
                deleteMovie={deleteMovie} />
            </Route>
            <Route path="/profile">
              <ProtectedRoute path="/profile"
                loggedIn={loggedIn}
                component={Profile}
                onSignOut={onSignOut}
                Auth={MainApi}
                setCurrentUser={setCurrentUser} />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </CurrentUser.Provider>
      }
      <Route exact path={['/saved-movies', '/movies', '/']}>
        <Footer />
      </Route>
    </div>
  );
}

export default withRouter(App);
