import "./projects.css"

function Projects() {

  return (
    <>
      <h1>Proyectos</h1>
      <p className="p_init">Proyectos en los que he participado</p>
      <section className='projects_section'>
          <div className="project">
            <div className="project_image">
              <img src="https://raw.githubusercontent.com/Danpier-Dos-Reis/Secure_API/main/frontendSecureAPI/src/assets/Docs/Register.png" alt="current_image" />
            </div>
            <div className="project_resume">
              <a href="https://github.com/Danpier-Dos-Reis/Secure_API" target="_blank" className="project_title">Secure_API</a>
              <p>Este proyecto encapsula una página web (UI) donde los usuarios ingresan datos para registrarse en el sistema y obtener credenciales para ingresar la solicitud de envío al sistema back-end.</p>
              <ul>
                <li>C#, JavaScript</li>
              </ul>
              <a href="https://github.com/Danpier-Dos-Reis/Secure_API" target="_blank" className='btn_project'>Ver más</a>
            </div>
          </div>
          <div className="project">
            <div className="project_image">
              <img src="https://www.devopsschool.com/blog/wp-content/uploads/2022/03/php-programming-language.jpg" alt="current_image" />
            </div>
            <div className="project_resume">
              <a href="https://github.com/Danpier-Dos-Reis/php_getexceldata" target="_blank" className="project_title">Php Excel Manipulation</a>
              <p>En este proyecto pruebo cómo gestionar datos de documentos .xlsx y .csv.</p>
              <ul>
                <li>Php</li>
              </ul>
              <a href="https://github.com/Danpier-Dos-Reis/php_getexceldata" target="_blank" className='btn_project'>Ver más</a>
            </div>
          </div>
          <div className="project">
            <div className="project_image">
              <img src="https://www.devopsschool.com/blog/wp-content/uploads/2022/03/php-programming-language.jpg" alt="current_image" />
            </div>
            <div className="project_resume">
              <a href="https://github.com/Danpier-Dos-Reis/Php-Button" target="_blank" className="project_title">Php Button</a>
              <p>En este proyecto aprendo cómo cargar archivos binarios en mi servidor a través de un objeto JavaScript para luego procesar los datos del archivo con Php.</p>
              <ul>
                <li>Php</li>
              </ul>
              <a href="https://github.com/Danpier-Dos-Reis/Php-Button" target="_blank" className='btn_project'>Ver más</a>
            </div>
          </div>
          <div className="project">
            <div className="project_image">
              <img src="https://blog.educalix.com/wp-content/uploads/2023/04/Desktop-1.jpg" alt="current_image" />
            </div>
            <div className="project_resume">
              <a href="https://github.com/Danpier-Dos-Reis/CsharpAdvance" target="_blank" className="project_title">C# Advanced</a>
              <p>Este proyecto posee tres ramas donde cada una utilizo herramientas avanzadas de C# (Linq , JWT , Loggin System).</p>
              <ul>
                <li>C#</li>
              </ul>
              <a href="https://github.com/Danpier-Dos-Reis/CsharpAdvance" target="_blank" className='btn_project'>Ver más</a>
            </div>
          </div>
      </section>
    </>
  );
}

export default Projects;