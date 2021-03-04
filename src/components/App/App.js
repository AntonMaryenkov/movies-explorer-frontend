import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Register from '../landing/Form/AuthForm/Register/Register';
import Profile from '../landing/Form/Profile/Profile';
import ProtectedRoute from '../landing/ProtectedRoute/ProtectedRoute';
import MainRoutes from '../landing/MainRoutes/MainRoutes';
import Login from '../landing/Form/AuthForm/Login/Login';
import NotFound from '../landing/NotFound/NotFound';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(true);

  return (
    <div className="app">
      <Switch>
        <Route path="/(profile)">
          <ProtectedRoute component={Profile} loggedIn={loggedIn} />
        </Route>
        <Route path="/(signup)">
          <ProtectedRoute component={Register} />
        </Route>
        <Route path="/(signin)">
          <ProtectedRoute component={Login} />
        </Route>
        <Route path="/(notfound)">
          <NotFound />
        </Route>
        <Route path="/">
          <ProtectedRoute component={MainRoutes} loggedIn={loggedIn} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
