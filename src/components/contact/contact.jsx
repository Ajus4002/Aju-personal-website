import "./contact.css";
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
        <a
          href="https://github.com/Ajus4002"
          className="contact youtube"
          target={"blank"}
        >
          <AiOutlineGithub className="icon" />
          <h2>
            Github <span>Aju S</span>
          </h2>
        </a>

        <a
          href="https://web.whatsapp.com/"
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            whatsapp <span>+91 9544435814</span>
          </h2>
        </a>

        <a href="https://www.linkedin.com/in/aju-s-9ab268221" className="contact instagram">
          <AiOutlineLinkedin className="icon" />
          <h2>
            Linkedin <span>_aju_s</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
