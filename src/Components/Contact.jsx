import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_am6l56l",   // Your EmailJS service ID
        "template_kh9wiy9", // Your template ID
        form.current,
        "7f3tXYpuczDHwPhNv" // Your public key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("✅ Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          alert("❌ Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get In Touch</h2>
      <span className="section__subtitle">
        Feel free to reach out to me for any questions or opportunities!
      </span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk To Me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">harsh07641@gmail.com</span>
              <a href="mailto:harsh07641@gmail.com" className="contact__button">
                Mail me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">+91 7798504763</span>
              <a
                href="https://wa.me/917798504763"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__button"
              >
                Text me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">
            Email me <i className="bx bxs-rocket"></i>
          </h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Email</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Message</label>
              <textarea
                name="message"
                className="contact__form-input"
                rows="6"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            <button className="button button--flex" type="submit">
              Send Message
              <svg
                className="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="var(--container-color)"
              >
                <path d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352..." />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
