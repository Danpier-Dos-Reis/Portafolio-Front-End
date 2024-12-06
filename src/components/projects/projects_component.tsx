import "./projects.css"
import { useState,useEffect, Fragment } from 'react';
import Engine from "../../Engine/Engine";
import { Project,ProjectApiResponse } from "../../models/Project";

function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [technologiesByProjects, setTechnologiesByProjects] = useState<Record<number, string[]>>({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5000/getallprojects');
      const result:ProjectApiResponse[] = await response.json();
      setProjects(Engine.parseProjects(result));
    };
    fetchData();
  }, []);

  /*
  Warning: The final argument passed to useEffect changed size between renders. The order and size of this array must remain constant.
  */
  //Para que renderize cada vez que se actualize Projects. El error es porque "projects" no es una constante
  useEffect(() => {setTechnologiesByProjects(Engine.getTecnologies(projects));},projects);

  return (
    <>
      <h1>Proyectos</h1>
      <p className="p_init">Proyectos en los que he participado</p>
      <section className='projects_section'>
        {projects.map((prj)=>(
          <Fragment key={prj.Id}>
            <div className="project_image">
              <img src={prj.Image_Link} alt="current_image" />
            </div>
            <div className="project_resume">
              <a href={prj.Github_Link} target="_blank" className="project_title">{prj.Titulo}</a>
              <p>{prj.Descripcion}</p>
              <ul>
                {/* Crear las etiquetas <li> dinámicamente */}
                {technologiesByProjects[prj.Id!]?.map((tech, index) => (
                  <li key={index}>{tech}</li>
                  )) || <li>No technologies available</li>
                }
              </ul>
              <a href={prj.Github_Link} target="_blank" className='btn_project'>Look</a>
            </div>
          </Fragment>
        ))}
      </section>
    </>
  );
}

export default Projects;