import "./work.css"
import { useState } from 'react';
import { Link,Outlet } from "react-router-dom";

function Works() {
  const [hiden, setHiden] = useState(true);

  return (
    <>
      <h1 className={hiden === true ? "":"no_display"}>Mis trabajos</h1>
      {/* <p className={`w_init ${hiden === true ? "":"no_display"}`}>Lorem ipsum dolor Animi, odio?</p> */}
      <section className={`works_section ${hiden === true ? "":"no_display"}`}>
          <div className="work">
            <div className="work_image">
              <img src="https://i.ytimg.com/vi/XvIw6mQ8kPs/maxresdefault.jpg" alt="current_image" />
            </div>
            <div className="work_resume">
              <Link to={'/trabajos/1'} className="work_title" onClick={()=>{setHiden(!hiden)}}>Hispatec Chile</Link>
              <p>Me uní a este maravilloso equipo de trabajo en el cual ejercí el cargo de desarrollador jr.</p>
              <ul>
                  <li>C#</li>
                  <li>SQL Server</li>
                  <li>Crystal Report</li>
              </ul>
              <Link to={'/trabajos/1'} className='btn_work' onClick={()=>{setHiden(!hiden)}}>Ver más</Link>
            </div>
          </div>
      </section>
      <Outlet/>
    </>
  );
}

export default Works;