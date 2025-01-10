import "./articles_component.css"
import { useState,useEffect } from 'react';
import Engine from "../../Engine/Engine";
import {Articulo,ArticuloApiResponse} from "../../models/Articulo";
import { Link, Outlet } from 'react-router-dom';

function Articles() {
  const [articulos, setArticulos] = useState<Articulo[]>([]);
  const [hiden, setHiden] = useState(true);

  useEffect(() => {
    //Obtener articulos de la API
    const fetchData = async () => {
      const response = await fetch('http://159.203.117.167:8000/getallarticles');
      const result:ArticuloApiResponse[] = await response.json();
      setArticulos(Engine.parseArticles(result));
    };
    fetchData();
  }, []);

  // useEffect(() => console.log("renderiza cada que cambia su valor"),[hiden]);

  return (
    <div className="home_articles">
      <div className={`ti_articles ${hiden === true ? "":"no_display"}`}>
          <h1>Artículos</h1>
      </div>
      {articulos.map((art)=>(
        <div className={`arts_container ${hiden === true ? "":"no_display"}`} key={art.Id}>
          <Link to={`/articulos/${art.Id}`} className="ti_article" onClick={()=>{setHiden(!hiden)}}>{art.Titulo}</Link>
          <div>
            <p className="type_article">{art.Categoria}</p> <p className="date_article">{art.Fecha}</p>
          </div>
          <p className="art_resume">{art.Descripcion}</p>
          <Link to={`/articulos/${art.Id}`} className="art_calltoread" onClick={()=>{setHiden(!hiden)}}>Read Article &gt;</Link>
        </div>
      ))}
      <Outlet />
    </div>
  );
}

export default Articles;