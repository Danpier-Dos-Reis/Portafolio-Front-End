import "./work.css"
import { useState,useEffect,Fragment } from 'react';
import Engine from "../../Engine/Engine";
import { Work, WorkApiResponse } from "../../models/Work";

function Works() {
  const [works, setWorks] = useState<Work[]>([]);
  const [technologiesByWorks, setTechnologiesByWorks] = useState<Record<number, string[]>>({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5000/getallworks');
      const result:WorkApiResponse[] = await response.json();
      setWorks(Engine.parseWorks(result));
    };
    fetchData();
  }, []);

  /*
  Warning: The final argument passed to useEffect changed size between renders. The order and size of this array must remain constant.
  */
  //Para que renderize cada vez que se actualize Works. El error es porque "works" no es una constante
  useEffect(() => {setTechnologiesByWorks(Engine.getTecnologies(works));},works);

  return (
    <>
      <h1>Mis trabajos</h1>
      <p className="w_init">Lorem ipsum dolor Animi, odio?</p>
      <section className='works_section'>
        {works.map((wk)=>(
          <Fragment key={wk.Id}>
            <div className="work_image">
              <img src={wk.Image_Link} alt="current_image" />
            </div>
            <div className="work_resume">
              <a href={`/trabajos/${wk.Id}`} className="work_title">{wk.Titulo}</a>
              <p>{wk.Descripcion}</p>
              <ul>
                {technologiesByWorks[wk.Id!]?.map((tech,index)=>(
                  <li key={index}>{tech}</li>
                )) || <li>No technologies available</li>}
              </ul>
              <a href={`/trabajos/${wk.Id}`} className='btn_work'>Look</a>
            </div>
          </Fragment>
        ))}
      </section>
    </>
  );
}

export default Works;