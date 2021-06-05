import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit, errors } = useForm();

  const serviceID = "service_ID";
  const templateID = "template_ID";
  const userID = "user_E6Uq46TPoiNjWpnzSgdYC";

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description
      },
      userID
    )
    r.target.reset();
  }

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs.send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage("Form sent successfully! I'll contact you as soon as possible.");
      }).catch(err => console.error(`Something went wrong ${err}`));
  }

  return (
    <div className="contact-form">
        <h5>Get in touch</h5>
        <span className="success-message">{successMessage}</span>
        <form onSubmit={handleSubmit(onSubmit)}>
              {/* NAME INPUT */}
              <div className="form-item">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  ref={
                    register({
                      required: "Please enter your name",
                      maxLength: {
                        value: 20,
                        message: "Please enter a name with fewer than 20 characters"
                      }
                    })
                  }
                />
              </div>
              <span className="error-message">
                {errors.name && errors.name.message}
              </span>
              {/* PHONE INPUT */}
              <div className="form-item">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  name="phone"
                  ref={register}
                />
              </div>
              {/* EMAIL INPUT */}
              <div className="form-item">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  ref={
                    register({
                      required: "Please provide your email",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid Email"
                      }
                    })
                  }
                />
              </div>
              <span className="error-message">
                {errors.email && errors.email.message}
              </span>
              {/* SUBJECT INPUT */}
              <div className="form-item">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  ref={
                    register({
                      required: "Please add a subject",
                    })
                  }
                />
              </div>
              <span className="error-message">
                {errors.subject && errors.subject.message}
              </span>
              {/* DESCRIPTION */}
              <div className="form-item">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Message"
                  name="description"
                  ref={
                    register({
                      required: "Please enter a message",
                    })
                  }
                ></textarea>
              </div>
              <span className="error-message">
                {errors.description && errors.description.message}
              </span>
              <button type="submit">Contact me</button>
        </form>
    </div>
  )
}

export default ContactForm;
