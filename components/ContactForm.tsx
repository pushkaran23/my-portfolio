"use client";
import { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(() => alert("Message sent!"))
      .catch((err) => alert("Error: " + err));
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input name="user_name" placeholder="Your Name" />
      <input name="user_email" placeholder="Your Email" />
      <textarea name="message" placeholder="Message" />
      <button type="submit">Send</button>
    </form>
  );
}
