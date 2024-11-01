import "./projects.css"

function Projects() {

  return (
    <>
      <h1>Projects Content</h1>
      <p className="p_init">Lorem ipsum dolor Animi, odio?</p>
      <section className='projects_section'>
        <div className="project_image">
          <img src="https://cdn.pixabay.com/photo/2018/12/14/23/57/web-3876081_960_720.jpg" alt="current_image" />
        </div>
        <div className="project_resume">
          <a href="/project" className="project_title">Pico Project</a>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, facilis?</p>
          <ul>
            <li>laravel</li>
            <li>typescript</li>
            <li>mysql</li>
          </ul>
          <a href="/project" className='btn_project'>Look</a>
        </div>
      </section>
    </>
  );
}

export default Projects;