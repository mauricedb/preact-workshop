import { h, Component } from "preact";
import MoviesPresentation from "./movies-presentation";

class MoviesContainer extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    fetch("/api/movies.json")
      .then(rsp => rsp.json())
      .then(movies => this.setState({ movies }));
  }

  render({}, { movies }) {
    return <MoviesPresentation movies={movies} />;
  }
}

export default MoviesContainer;
