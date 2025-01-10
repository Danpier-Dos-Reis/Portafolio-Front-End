import "./contact_component.css"

function ContactForm() {

  return (
    <section className="contact_section">
        <div className="ti_div">
            <h1>Contáctame</h1>
            <p>Puedo sumarle a tu equipo de trabajo más que una mejora en la productividad.</p>
            <br />
            <span style={{fontWeight:"bold"}}>danpier_dr@hotmail.com</span>
        </div>
        <div className="rrss_container">
          <a href="https://www.instagram.com/gaussian.cl/" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png" alt="instagram"/>
          </a>
          <a href="https://www.linkedin.com/in/danpier-dos-reis-4b597119a/" target="_blank">
            <img src="https://www.freepnglogos.com/uploads/linkedin-logo-hd-png-3.png" alt="instagram"/>
          </a>
        </div>
    </section>
  );
}

export default ContactForm;