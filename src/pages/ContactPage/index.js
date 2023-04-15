import team from "./team.jpg";
import "./styles.scss";
import { BsTelephone } from "react-icons/bs";
import { RiMapPinLine } from "react-icons/ri";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
export default function ContactPage() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log("aa");
    emailjs
      .sendForm(
        "service_lnklt1j",
        "template_28bjm8q",
        form.current,
        "JY__oOxBpIzgf0ztE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-page">
      <div>
        <div className="contact-text">
          <h2>
            Have any query?
            <br />
            Feel free to contact us!
          </h2>
          <div className="phone">
            <span className="icon-container">
              <BsTelephone />
            </span>
            <span className="contact-span">+123 456 7890</span>
          </div>
          <div className="address">
            <span className="icon-container">
              <RiMapPinLine />
            </span>
            <span className="contact-span">
              <a
                href="https://goo.gl/maps/eJn38JCtYHK12Fkz6"
                target="_blank"
                rel="noopener noreferrer"
              >
                130 Dundas Street, London Ontario
              </a>
            </span>
          </div>
          <iframe
            title="map to SpacaSavvy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2918.747411450811!2d-81.25364082314628!3d42.98359417114179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ef21d6f008d79%3A0xa4887a476f953f44!2s130%20Dundas%20St%2C%20London%2C%20ON%20N6A%201G2!5e0!3m2!1sen!2sca!4v1681581300281!5m2!1sen!2sca"
            width="100%"
            //height="200"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contact-form" onSubmit={sendEmail}>
          <form ref={form}>
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
