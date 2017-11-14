import { h, Component } from "preact";
import style from "./style";

export default ({ movie }) => {
  return (
    <div class={["card", style.movieCard].join(" ")}>
      <img
        class="card-img-top"
        src={movie.image}
        alt="Card image cap"
      />
      <div class="card-body">
        <h4 class="card-title">{movie.title}</h4>
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
};
