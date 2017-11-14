import { h } from "preact";

export default ({ value, name, children, onChange }) => (
  <div class="form-group">
    <label for={name}>{children}</label>
    <input
      type="text"
      class="form-control"
      id={name}
      value={value}
      onChange={e => onChange(e.target.value, name)}
    />
  </div>
);
