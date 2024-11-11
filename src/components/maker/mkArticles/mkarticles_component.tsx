import "./mkarticles.css"

function Make_Articles() {

  return (
    <section className="mkarticles_section">
        <div className="ti_div">
            <h1>Make an Article</h1>
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

export default Make_Articles;