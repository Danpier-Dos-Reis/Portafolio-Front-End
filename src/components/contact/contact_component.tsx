import "./contact_component.css"

function ContactForm() {

  return (
    <section className="contact_section">
        <div className="ti_div">
            <h1>Contact Me</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <form action="" method="POST">
            <input type="text" name="inp_name" id="name" /> <input type="email" name="inp_email" id="email" />
            <input type="text" name="inp_subject" id="subject" />
            <input type="text" name="inp_message" id="message" />
            <input type="submit" value="Send Message" />
        </form>
    </section>
  );
}

export default ContactForm;