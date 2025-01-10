import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Engine from "../../Engine/Engine";
import { Articulo, ArticuloApiResponse } from "../../models/Articulo";

function Singular_Article() {
  const { id } = useParams(); // Accedes al id desde la URL
  const [articulos, setArticulos] = useState<Articulo[] | null>(null);

  useEffect(() => {
    // Obtener articulo de la API
    const fetchData = async () => {
      const response = await fetch(`http://localhost:5000/getallarticles/${id}`);
      const result: ArticuloApiResponse[] = await response.json();
      setArticulos(Engine.parseArticles(result));
    };
    fetchData();
  }, [id]);

  return (
    <>
      {articulos && articulos.length > 0 ? (
        <>
          <h2>{articulos[0].Titulo}</h2>
          <div dangerouslySetInnerHTML={{ __html: articulos[0].Contenido }} />
        </>
      ) : (
        <p>Cargando artículo...</p>
      )}
    </>
  );
}

export default Singular_Article;

/*
function Singular_Article() {
    const { id } = useParams(); // Accedes al id desde la URL

  return (
    <h1>Hola soy el art número = {id}</h1>
  );
}
*/