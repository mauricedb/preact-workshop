import { h, Component } from 'preact';
import MoviesPresentation from './movies-presentation';

export default class MoviesObserver extends Component {
  constructor() {
    super();
    this.observer = new IntersectionObserver(this.onIntersection);
    this.observer.POLL_INTERVAL = 100; // Time in milliseconds for the polyfill.
  }

  onIntersection = entries => {
    const { movies } = this.props;

    entries.forEach(entry => {
      const id = +entry.target.dataset.id;
      const movie = movies.find(m => m.id === id);
      if (movie) {
        movie.isVisible = movie.isVisible || entry.isIntersecting;
      }
    });
    
    this.forceUpdate();
  };

  render({ movies }) {
    return <MoviesPresentation movies={movies} observer={this.observer} />;
  }
}
