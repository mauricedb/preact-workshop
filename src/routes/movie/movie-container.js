import { h, Component } from 'preact';
import MoviePresentation from './movie-presentation';

export default class MovieContainer extends Component {
  state = { movie: null };

  onChange = (value, name) => {
    const movie = { ...this.state.movie, [name]: value };

    this.setState({ movie });
  };

  onSave = () => {
    alert('Saving ' + this.state.movie.title);
  };

  // componentDidMount() {
  //   const id = +this.props.id;

  //   fetch("/api/movies.json")
  //     .then(rsp => rsp.json())
  //     .then(movies => movies.find(m => m.id === id))
  //     .then(movie => this.setState({ movie }));
  // }

  async componentDidMount() {
    const id = +this.props.id;

    const rsp = await fetch('/api/movies.json');
    const movies = await rsp.json();
    const movie = movies.find(m => m.id === id);
    this.setState({ movie });
  }

  render(props, { movie }) {
    if (!movie) return null;

    return (
      <MoviePresentation
        movie={movie}
        onChange={this.onChange}
        onSave={this.onSave}
      />
    );
  }
}
