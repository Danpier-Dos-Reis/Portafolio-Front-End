import "./work.css"
import Singular_Work from "./single_work_component";
import { Link,Outlet,useParams } from "react-router-dom";

function Works() {
  const { id } = useParams(); // Detectar si hay un ID en la URL

  // Si hay un ID en la URL, mostrar solo el artículo singular
  if (id) {
    return <Singular_Work />;
  }

  return (
    <>
      <h1>Mis trabajos</h1>
      <section className={"works_section"}>
          <div className="work">
            <div className="work_image">
              <img src="https://i.ytimg.com/vi/XvIw6mQ8kPs/maxresdefault.jpg" alt="current_image" />
            </div>
            <div className="work_resume">
              <Link to={'/trabajos/1'} className="work_title">Hispatec Chile</Link>
              <p>Me uní a este maravilloso equipo de trabajo en el cual ejercí el cargo de desarrollador jr.</p>
              <ul>
                  <li>C#</li>
                  <li>SQL Server</li>
                  <li>Crystal Report</li>
              </ul>
              <Link to={'/trabajos/1'} className='btn_work'>Ver más</Link>
            </div>
          </div>
      </section>
      <Outlet/>
    </>
  );
}

export default Works;