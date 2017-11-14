import { h, Component } from "preact";
import style from './style';

class Movies extends Component {
  render() {
    return (
      <div class={style.movies}>
        <h2>Movies</h2>
      </div>
    );
  }
}

export default Movies;
