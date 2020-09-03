import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import DiscoverMoviePages from "./pages/DiscoverMoviesPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/discover" component={DiscoverMoviePages} />
      </Switch>
    </div>
  );
}

export default App;
