import "./App.css";
import React from "react";
import Header from "./components/header/header";
import SearchPanel from "./components/search-panel/search-panel";
import Login from "./components/login/login";
import Favourites from "./components/favourite/favourite";
import { Redirect, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route
          exact
          path={"/"}
          render={() => <Redirect to={"/search-panel"} />}
        />
        <Route path={"/search-panel"} render={() => <SearchPanel />} />
        <Route path={"/favourite"} render={() => <Favourites />} />
        <Route path={"/login"} render={() => <Login />} />
        <Route path={"/*"} render={() => <div>404 NOT FOUND</div>} />
      </Switch>
    </div>
  );
};

export default App;
