import { useParams } from "react-router-dom";

function Singular_Work() {
    const { id } = useParams(); // Accedes al id desde la URL

  return (
    <h1>Hola soy el Work número = {id}</h1>
  );
}

export default Singular_Work;