import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

export default class Header extends Component {
  onSearch = e => {
    e.preventDefault();
    this.props.search(e.target.elements.search.value);
  };

  render({ search }) {
    return (
      <nav class="navbar navbar-expand navbar-dark bg-dark">
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
        <form class="form-inline my-2 my-lg-0" onSubmit={this.onSearch}>
          <input
            class="form-control mr-sm-2"
            name="search"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </nav>
    );
  }
}
