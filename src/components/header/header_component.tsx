import { Link } from "react-router-dom";

interface Main_Header_Properties{
  image_link:string;
}

function Main_Header(props:Main_Header_Properties) {

  return (
    <header className='main_header'>
      <img src={props.image_link} alt="perfil_image" />
      <div className="main_menu">
        <Link to="/" className="myname">Danpier</Link>
        <div className="links_container">
          <Link to="/projects">PROJECTS</Link>
          <a href="#">WORK</a>
          <a href="#">ARTICLES</a>
          <a href="#">CONTACT</a>
        </div>
      </div>
    </header>
  );
}

export default Main_Header;