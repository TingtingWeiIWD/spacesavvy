import "./styles.scss";
import ContentCard from "../ContentCard";

function TextImageBlock({ title, children, src, alt, className }) {
  return (
    <div className={"text-image " + className || ""}>
      <div className="text">
        <h3>{title}</h3> {children}
      </div>
      <div className="image">
        <img src={src} alt={alt} />
        <div className="color-block"></div>
      </div>
    </div>
  );
}

function ImageTextBlock({ title, children, src, alt, className }) {
  return (
    <div className={"image-text " + className || ""}>
      <div className="image">
        <img src={src} alt={alt} />
        <div className="color-block"></div>
      </div>
      <div className="text">
        <h3>{title}</h3> {children}
      </div>
    </div>
  );
}

export { ImageTextBlock, TextImageBlock };
