import "./mkarticles.css"
import { useState } from "react";

function Make_Articles() {

  // Estados para capturar los valores de los campos
  const [title, setTitle]:any = useState("");
  const [category, setCategory]:any = useState("");
  const [description, setDescription]:any = useState("");
  const [content, setContent]:any = useState("");

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Construye el JSON a partir de los valores de los estados
    const articleData = {
          title: title,
          category: category,
          description: description,
          content: content
         };
  
    try {
         // Enviar el JSON al backend usando fetch
         const response = await fetch("http://127.0.0.1:5000/mkarticle", {
            method: "POST",
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify(articleData)
         });
       
         if (response.ok) {
            // const result:string = await String(response.body);
            // if(window.confirm("Artículo se guardó?")){console.log(response);}
            window.prompt("articulo guadado");
         } else {
            console.error("Error al enviar el artículo");
         }
      } catch (error) {
         console.error("Error en la solicitud:", error);
      }
    };

  return (
    <section className="mkarticles_section">
        <div className="ti_div">
            <h1>Make an Article</h1>
        </div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="inp_title" >Título</label>
            <input type="text" name="inp_title" id="inp_title" value={title} onChange={(e) => setTitle(e.target.value)}/>

            <label htmlFor="inp_category">Categoría</label>
            <input type="text" name="inp_category" id="inp_category" value={category} onChange={(e) => setCategory(e.target.value)}/>

            <label htmlFor="inp_description">Descripción</label>
            <input type="text" name="inp_description" id="inp_description" value={description} onChange={(e) => setDescription(e.target.value)}/>

            <label htmlFor="art_content">Mensaje</label>
            <textarea placeholder="Escribe aquí..." id="art_content" value={content} onChange={(e) => setContent(e.target.value)}/>

            <input type="submit" value="Enviar" id="btn_postarticle"/>
        </form>
    </section>
  );
}

export default Make_Articles;