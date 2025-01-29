import "./articles_component.css"
import Singular_Article from "./singular_article_component";
import { Link, Outlet, useParams } from 'react-router-dom';

function Articles() {

  const { id } = useParams(); // Detectar si hay un ID en la URL

  // Si hay un ID en la URL, mostrar solo el artículo singular
  if (id) {
    return <Singular_Article />;
  }

  return (
    <div className="home_articles">
      <div className={"ti_articles"}>
          <h1>Artículos</h1>
      </div>
      <div className={"arts_container"}>
        <Link to={'/articulos/1'} className="ti_article">Convertir listas de objetos en JSON utilizando FastAPI y Pydantic</Link>
        <div>
          <p className="type_article">Python</p> <p className="date_article">2025-01-09</p>
        </div>
        <p className="art_resume">Cuando trabajamos con APIs, es necesario transformar listas de objetos en formato JSON. Con FastAPI y Pydantic podemos hacerlo de forma eficiente y con menos errores.</p>
        <Link to={'/articulos/1'} className="art_calltoread">Read Article &gt;</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Articles;