import "./articles_component.css"
import { useState} from 'react';
import { Link, Outlet } from 'react-router-dom';

function Articles() {
  const [hiden, setHiden] = useState(true);

  return (
    <div className="home_articles">
      <div className={`ti_articles ${hiden === true ? "":"no_display"}`}>
          <h1>Artículos</h1>
      </div>
      <div className={`arts_container ${hiden === true ? "":"no_display"}`}>
        <Link to={'/articulos/1'} className="ti_article" onClick={()=>{setHiden(!hiden)}}>Convertir listas de objetos en JSON utilizando FastAPI y Pydantic</Link>
        <div>
          <p className="type_article">Python</p> <p className="date_article">2025-01-09</p>
        </div>
        <p className="art_resume">Cuando trabajamos con APIs, es necesario transformar listas de objetos en formato JSON. Con FastAPI y Pydantic podemos hacerlo de forma eficiente y con menos errores.</p>
        <Link to={'/articulos/1'} className="art_calltoread" onClick={()=>{setHiden(!hiden)}}>Read Article &gt;</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Articles;