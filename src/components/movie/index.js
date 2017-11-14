import { h } from "preact";
import { Link } from "preact-router";
import style from "./style";

export default ({ movie }) => (
  <div class={["card", style.movieCard].join(" ")}>
    <img class="card-img-top" src={movie.image} alt="Card image cap" />
    <div class="card-body">
      <h4 class="card-title">{movie.title}</h4>
      <Link href={`/movie/${movie.id}`}>Edit</Link>
      <p class="card-text">{movie.overview}</p>
    </div>
    <div class="card-footer text-cente">
      {movie.genres.map(genre => (
        <span
          class={["badge", "badge-pill", "badge-info", style.genreBadge].join(
            " "
          )}
        >
          {genre}
        </span>
      ))}
    </div>
  </div>
);
