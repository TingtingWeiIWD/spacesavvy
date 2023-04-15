import ContentCard from "../../components/ContentCard";
import { NavLink } from "react-router-dom";
import "./styles.scss";

export default function PageNotFound() {
  return (
    <div className="not-found-page">
      <img
        src="https://cdn.dribbble.com/userupload/5037521/file/original-cd5b529259f936ac757851ac9da94f3b.png?compress=1&resize=3352x2501"
        alt="a kitchen with modern design"
      />
      <ContentCard title="Oops.. We cant't find this page" className=" ">
        We searched everything but couldn't find what you're looking for.
        <br />
        let's find a better place for you to go.
        <NavLink to="/">Back to Home</NavLink>
      </ContentCard>
    </div>
  );
}
