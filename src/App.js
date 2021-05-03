import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Favorites from "./pages/Favorites/Favorites";
import Home from "./pages/Home/Home";
import Movie from "./pages/Movie/Movie";
import SearchMovie from "./pages/SearchMovie/SearchMovie";
import './i18n';

function App() {
  return (
    <>
    <NavBar></NavBar>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/movie/:idMovie" component={Movie} />
          <Route exact path="/search/:query" component={SearchMovie} />
      </Switch>
      </>
  );
}

export default App;
