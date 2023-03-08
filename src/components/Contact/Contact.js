import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fy63k3r', 'template_9mzhjp9', form.current, 'LV6r9cd-UI-pL-5es')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    
    <form ref={form} onSubmit={sendEmail} className="contact-build">
      <h1 className="ct-title">Kontakt</h1>
      <label>Namn</label>
      <input type="text" name="from_name" className="inputs" placeholder="Namn" />
      <label>Email</label>
      <input type="email" name="from_email" className="inputs" placeholder="E-mail" />
      <label>Meddelande</label>
      <textarea name="message" className="send-textarea" placeholder="Meddelande" />
      <input type="submit" value="Send" className="btn-press" />
    </form>
  );
};