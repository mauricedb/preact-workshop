import { h, Component } from "preact";
import style from "./style";

class Movies extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    fetch("/api/movies.json")
      .then(rsp => rsp.json())
      .then(movies => this.setState({ movies }));
  }

  render({}, { movies }) {
    return (
      <div class={style.movies}>
        <h2>Movies</h2>
        <ul>{movies.map(movie => <li>{movie.title}</li>)}</ul>
      </div>
    );
  }
}

export default Movies;
