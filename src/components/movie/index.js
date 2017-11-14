import { h, Component } from "preact";
import { Link } from "preact-router";
import style from "./style";

export default class Movie extends Component {
  element = null;

  componentDidMount() {
    this.props.observer.observe(this.element);
  }

  componentWillUnmount() {
    this.props.observer.unobserve(this.element);
  }

  render({ movie }) {
    return (
      <div
        class={["card", style.movieCard].join(" ")}
        ref={el => (this.element = el)}
        data-id={movie.id}
      >
        <img
          class="card-img-top"
          src={
            movie.isVisible
              ? movie.image
              : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII="
          }
          alt="Card image cap"
          height="140"
        />
        <div class="card-body">
          <h4 class="card-title">{movie.title}</h4>
          <Link href={`/movie/${movie.id}`}>Edit</Link>
          <p class="card-text">{movie.overview}</p>
        </div>
        <div class="card-footer text-cente">
          {movie.genres.map(genre => (
            <span
              class={[
                "badge",
                "badge-pill",
                "badge-info",
                style.genreBadge
              ].join(" ")}
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
    );
  }
}
