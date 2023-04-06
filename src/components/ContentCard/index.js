import "./styles.scss";

export default function ContentCard({ title, children, className }) {
  return (
    <main className="content">
      <h3>{title}</h3>
      <div className={"container " + className || ""}>{children}</div>
    </main>
  );
}
