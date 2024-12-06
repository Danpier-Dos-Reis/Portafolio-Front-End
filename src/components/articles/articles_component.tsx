import "./articles_component.css"
import { useState,useEffect,useRef } from 'react';
import Engine from "../../Engine/Engine";
import {Articulo,ArticuloApiResponse} from "../../models/Articulo";
import { Link, Outlet } from 'react-router-dom';

function Articles() {
  const [articulos, setArticulos] = useState<Articulo[]>([]);
  const homeArticlesRef = useRef<HTMLDivElement | null>(null);
  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // Limpiar el contenido de .home_articles
    if (homeArticlesRef.current) {
      homeArticlesRef.current.innerHTML = ""; // Borra todo el contenido
    }
  };

  useEffect(() => {
    //Obtener articulos de la API
    const fetchData = async () => {
      const response = await fetch('http://localhost:5000/getallarticles');
      const result:ArticuloApiResponse[] = await response.json();
      setArticulos(Engine.parseArticles(result));
    };
    fetchData();
  }, []);

  return (
    <div className="home_articles" ref={homeArticlesRef}>
      <div className="ti_articles">
          <h1>Artículos</h1>
      </div>
      {articulos.map((art)=>(
        <div className="arts_container" key={art.Id}>
          <Link to={`/articulos/${art.Id}`} className="ti_article" onClick={handleLinkClick}>{art.Titulo}</Link>
          <div>
            <p className="type_article">{art.Categoria}</p> <p className="date_article">{art.Fecha}</p>
          </div>
          <p className="art_resume">{art.Descripcion}</p>
          <Link to={`/articulos/${art.Id}`} className="art_calltoread" onClick={handleLinkClick}>Read Article &gt;</Link>
        </div>
      ))}
      <Outlet/>
    </div>
  );
}

export default Articles;