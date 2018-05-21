import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Home from '../routes/home';
import Movies from '../routes/movies';
import Movie from '../routes/movie';

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  state = { search: '' };

  search = text => {
    this.setState({ searchText: text });
  };

  render({}, { searchText }) {
    return (
      <div id="app" class="container">
        <Header search={this.search} />
        <Router onChange={this.handleRoute}>
          <Home path="/" />
          <Movies path="/movies" searchText={searchText} />
          <Movie path="/movie/:id" />
        </Router>
      </div>
    );
  }
}
