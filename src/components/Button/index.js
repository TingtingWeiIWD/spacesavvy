import "./styles.scss";

function Button({ text, href }) {
  return (
    <a href={href} className="btn">
      <span>{text}</span>
    </a>
  );
}
function Link({ text, href }) {
  return (
    <a href={href} className="link">
      <span>{text}</span>
    </a>
  );
}

export { Button, Link };
