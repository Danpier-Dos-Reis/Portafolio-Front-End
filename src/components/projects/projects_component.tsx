import "./projects.css"

function Projects() {

  return (
    <>
      <h1>Projects Content</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, odio?</p>
      <section className='projects_section'>
        <div className="project_image"></div>
        <div className="project_resume">
          <a href="/project">Pico Project</a>
          <ul>
            <li>laravel</li>
            <li>typescript</li>
            <li>mysql</li>
          </ul>
          <button className='btn_project'></button>
        </div>
      </section>
    </>
  );
}

export default Projects;