import { h } from "preact";
import { Link } from "preact-router/match";

export default () => (
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link class="navbar-brand" href="/">
      The MovieDB
    </Link>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <Link class="nav-link" activeClassName="active" href="/">
          Home
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" activeClassName="active" href="/movies">
          Movies
        </Link>
      </li>
    </ul>
  </nav>
);
