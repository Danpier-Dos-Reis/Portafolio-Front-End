import "./articles_component.css"
import { useState,useEffect } from 'react';
import Engine from "../../Engine/Engine";
import {Articulo,ArticuloApiResponse} from "../../models/Articulo";

function Articles() {
  const [articulos, setArticulos] = useState<Articulo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5000/getallarticles');
      const result:ArticuloApiResponse[] = await response.json();
      setArticulos(Engine.parseArticles(result));
    };
    fetchData();
  }, []);

  return (
    <div className="home_articles">
        <div className="ti_articles">
            <h1>Artículos</h1>
        </div>
        {articulos.map((art)=>(
          <div className="arts_container" key={art.Id}>
            <a href="#article" className="ti_article">{art.Titulo}</a>
            <div>
              <p className="type_article">{art.Categoria}</p> <p className="date_article">{art.Fecha}</p>
            </div>
            <p className="art_resume">{art.Descripcion}</p>
            <a href="#article" className="art_calltoread">Read Article &gt;</a>
          </div>
        ))}
    </div>
  );
}

export default Articles;