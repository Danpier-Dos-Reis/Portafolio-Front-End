import "./header.css"
import { Link } from "react-router-dom";


function Main_Header() {
  return (
    <header className='main_header'>
      <img src="https://avatars.githubusercontent.com/u/101151666?v=4" alt="perfil_image" />
      <div className="main_menu">
        <Link to="/" className="myname">Danpier</Link>
        <div className="links_container">
          <Link to="/proyectos">PROYECTOS</Link>
          <Link to="/trabajos">TRABAJOS</Link>
          <Link to="/articulos">ARTÍCULOS</Link>
          <Link to="/contacto">CONTACTO</Link>
        </div>
      </div>
    </header>
  );
}

export default Main_Header;