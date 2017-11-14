import { h } from "preact";
import { Link } from "preact-router";

import Input from "../../components/input";
import TextArea from "../../components/textarea";

export default ({ movie, onChange, onSave }) => (
  <form>
    <Input value={movie.title} name="title" onChange={onChange}>
      Title
    </Input>
    <TextArea value={movie.overview} name="overview" onChange={onChange}>
      Overview
    </TextArea>
    <div class="btn-group">
      <button type="button" className="btn btn-primary" onClick={onSave}>
        Save changes
      </button>
      <Link className="btn btn-warning" href="/movies">
        Cancel
      </Link>
    </div>
  </form>
);
