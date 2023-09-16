import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:sgurjot0001@yahoo.com">
        <Button>Contact: sgurjot0001@yahoo.com</Button>
      </a>
    </div>
  );
};

export default Contact;