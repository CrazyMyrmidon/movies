import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
// import DiscoverMoviesPage from "../pages/DiscoverMoviesPage";
// import HomePage from "../pages/HomePage";
// import AboutPage from "../pages/AboutPage";

export default function NavBar() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/AboutPage">About</NavLink>
            </li>
            <li>
              <NavLink to="/DiscoverMoviesPage">Discover Movies</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="/AboutPage">
            <AboutPage />
          </Route>
          <Route path="/DiscoverMoviesPage">
            <DiscoverMoviesPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function HomePage() {
  return <h2>Home</h2>;
}
function AboutPage() {
  return <h2>About</h2>;
}
function DiscoverMoviesPage() {
  return <h2>Discover Movies</h2>;
}
