import { h, Component } from 'preact';
import MoviesObserver from './movies-observer';

export default class MoviesContainer extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    fetch('/api/movies.json')
      .then(rsp => rsp.json())
      .then(movies => this.setState({ movies }));
  }

  // async componentDidMount() {
  //   const rsp = await fetch('/api/movies.json');
  //   const movies = await rsp.json();
  //   this.setState({ movies });
  // }

  render({ searchText }, { movies }) {
    if (searchText) {
      movies = movies.filter(m => m.title.indexOf(searchText) != -1);
    }

    return <MoviesObserver movies={movies} />;
  }
}
