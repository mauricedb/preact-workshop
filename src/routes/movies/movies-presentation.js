import { h, Component } from "preact";
import style from "./style";

const MoviesPresentation = ({ movies }) => (
  <div class={style.movies}>
    <h2>Movies</h2>
    <ul>{movies.map(movie => <li>{movie.title}</li>)}</ul>
  </div>
);

export default MoviesPresentation;
