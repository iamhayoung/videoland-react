import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from "Components/Header";
import Home from "Screens/Home";
import Movie from "Screens/Movie";
import TV from "Screens/TV";
import Search from "Screens/Search";
import MovieDetail from "Screens/MovieDetail";
import TVDetail from "Screens/TVDetail";

function Sitemap() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movie" exact component={Movie} />
        <Route path="/tv" exact component={TV} />
        <Route path="/search" component={Search} />
        <Route path="/movie/:id" component={MovieDetail} />
        <Route path="/tv/:id" component={TVDetail} />
        <Redirect path="*" to="/" />
      </Switch>
    </Router>
  )
}

export default Sitemap;