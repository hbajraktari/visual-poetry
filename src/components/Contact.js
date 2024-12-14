import React from 'react';
import "../styles/components/_contact.css";

function Contact() {
    return ( 
        <div className='contact'>
        <div className="contact-container">
        <p className="question">Have a question?</p>
        <p className="answer">There is an answer</p>
        <p className="contact-link">
          <span>Contact Us</span>
          <span className="underline"></span>
        </p>
      </div>
      </div>
     );
}

export default Contact;