import React from "react";
import MainLayout from "../../layouts/MainLayout";
import emailjs from "@emailjs/browser";
function Index() {
  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wkr80os",
        "template_tw0xx35",
        form.current,
        "cfb2n4hwNsmbzyQDB"
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
    <MainLayout>
      <form ref={form} onSubmit={sendEmail} style={{ margin: "150" }}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </MainLayout>
  );
}

export default Index;
