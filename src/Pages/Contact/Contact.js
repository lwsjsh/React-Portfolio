import React, { useRef, useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [error, setError] = useState("");

  const nameRef = useRef("");
  const emailRef = useRef("");
  const messageRef = useRef("");

  const handleSubmit = () => {
    setError("");
    if (
      nameRef.current.value.trim() === "" ||
      emailRef.current.value.trim() === ""
    ) {
      setError("Please fill all the details");
      return;
    }
    const mailformat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRef.current.value.match(mailformat)) {
      setError("Please enter a valid email address");
      return;
    }
  };

  return (
    <div className="contact">
      <h2>Contact</h2>
      <div className="contact__container">
        <label>Name:</label> <br />
        <input ref={nameRef} />
        <br /> <br />
        <label>Email address:</label> <br />
        <input ref={emailRef} />
        <br /> <br />
        <label>Message:</label> <br />
        <textarea ref={messageRef} />
        <br /> <br />
        {error && <p>{error}</p>}
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Contact;
