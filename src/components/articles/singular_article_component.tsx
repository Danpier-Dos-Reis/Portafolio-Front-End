import { useParams } from "react-router-dom";

function Singular_Article() {
    const { id } = useParams(); // Accedes al id desde la URL

  return (
    <h1>Hola soy el art número = {id}</h1>
  );
}

export default Singular_Article;