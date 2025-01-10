import "./mktrabajos.css"
import { useState } from "react";

function AddWork() {

  // Estados para capturar los valores de los campos
  const [titulo, setTitulo]:any = useState("");
  const [image_link, setImageLink]:any = useState("");
  const [descripcion, setDescripcion]:any = useState("");
  const [tecnologias, setTecnologias]:any = useState("");

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    // Construye el JSON a partir de los valores de los estados
    const work = {
      image_link: image_link,
      titulo: titulo,
      descripcion: descripcion,
      tecnologias: tecnologias
   };
   
   try {
      // Enviar el JSON al backend usando fetch
      const response = await fetch("http://127.0.0.1:5000/addwork", {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(work)
      });
       
      if (response.ok) {
         // const result:string = await String(response.body);
         // if(window.confirm("Artículo se guardó?")){console.log(response);}
         window.confirm("proyecto guardado");
      } else {
         console.error("Error al enviar el artículo");
      }
   }
   catch (error) {
      console.error("Error en la solicitud:", error);
   }
   };

  return (
    <section className="add_githubprojects_section">
        <div className="ti_div">
            <h1>Add Work</h1>
        </div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="inp_title" >Título</label>
            <input type="text" name="inp_title" id="inp_title" value={titulo} onChange={(e) => setTitulo(e.target.value)}/>

            <label htmlFor="inp_imagelink">Image Link</label>
            <input type="text" name="inp_imagelink" id="inp_imagelink" value={image_link} onChange={(e) => setImageLink(e.target.value)}/>

            <label htmlFor="inp_descripcion">Descripción</label>
            <input type="text" name="inp_descripcion" id="inp_descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/>

            <label htmlFor="w_tecnologias">Mensaje</label>
            <textarea placeholder="Escribe aquí..." id="w_tecnologias" value={tecnologias} onChange={(e) => setTecnologias(e.target.value)}/>

            <input type="submit" value="Enviar" id="btn_postgithubprojects"/>
        </form>
    </section>
  );
}

export default AddWork;