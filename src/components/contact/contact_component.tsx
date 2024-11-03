import "./contact_component.css"

function ContactForm() {

  return (
    <section className="contact_section">
        <div className="ti_div">
            <h1>Contáctame</h1>
            <p>Puedo sumarle a tu equipo de trabajo más que una mejora en la productividad.</p>
        </div>
        <form action="" method="POST">
            <label htmlFor="name" >Nombre</label> <label htmlFor="email">Email</label>
            <input type="text" name="inp_name" id="name" /> <input type="email" name="inp_email" id="email" />
            <label htmlFor="subject">Título</label>
            <input type="text" name="inp_subject" id="subject" />
            <label htmlFor="message">Mensaje</label>
            <textarea placeholder="Escribe aquí..." id="message" />
            <input type="submit" value="Enviar" id="btnsubmit"/>
        </form>
    </section>
  );
}

export default ContactForm;