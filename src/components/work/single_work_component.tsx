import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Engine from "../../Engine/Engine";
import { Work, WorkApiResponse } from "../../models/Work";

function Singular_Work() {
    const { id } = useParams(); // Accedes al id desde la URL
    const [works, setWorks] = useState<Work[] | null>(null);

    useEffect(() => {
      // Obtener articulo de la API
      const fetchData = async () => {
        const response = await fetch(`http://localhost:5000/getallworks/${id}`);
        const result: WorkApiResponse[] = await response.json();
        console.log(result);
        setWorks(Engine.parseWorks(result));
      };
      fetchData();
    }, [id]);

  return (
    <>
      {works && works.length > 0 ? (
        <div className="split_workcontainer">
          <h2>{works[0].Titulo}</h2>
          <div dangerouslySetInnerHTML={{ __html: works[0].Contenido }} />
        </div>
      ) : (
        <p>Cargando artículo...</p>
      )}
    </>
  );
}

export default Singular_Work;