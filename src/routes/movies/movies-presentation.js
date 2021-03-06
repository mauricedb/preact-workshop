import { h, Component } from "preact";
import style from "./style";

import Movie from "../../components/movie";

export default ({ movies, observer }) => (
  <div class={style.movies}>
    <h2>Movies</h2>
    <div class="card-deck">
      {movies.map(movie => <Movie movie={movie} observer={observer} />)}
    </div>
  </div>
);
