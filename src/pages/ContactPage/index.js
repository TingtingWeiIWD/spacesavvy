import team from "./team.jpg";
import "./styles.scss";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
export default function ContactPage() {
  return (
    <div className="contact-page">
      <div>
        <div className="contact-text">
          <h2>
            Have any query?
            <br />
            Fell free to contact us!
          </h2>
          <div className="phone">
            <span className="icon-container">
              <BsTelephone />
            </span>
            <span className="contact-span">+123 456 7890</span>
          </div>
          <div className="address">
            <span className="icon-container">
              <HiOutlineLocationMarker />
            </span>
            <span className="contact-span">
              130 Dundas Street, London Ontario
            </span>
          </div>
        </div>
        <div className="contact-form">
          <form>
            <div>
              <label>Hi I'm *</label>
              <input
                className="inputName"
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label>Email *</label>
              <input
                className="inputEmail"
                type="email"
                name="user_email"
                placeholder="Your Email for Reply"
                required
              />
            </div>

            <div className="inputMessage">
              <label>Message</label>
              <textarea name="message" placeholder="Tell About Something..." />
            </div>

            <div>
              <input type="submit" value="Send →" className="submit" />
            </div>
          </form>
        </div>
      </div>

      <img src={team} alt="SpaceSavvy team in a meeting" />
    </div>
  );
}
