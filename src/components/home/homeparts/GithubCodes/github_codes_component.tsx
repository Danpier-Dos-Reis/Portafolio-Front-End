import "./github_codes.css"

function Github_Codes() {
  return (
    <div className="github_codes">
        <div className="ti_code">
            <h1>Código</h1>
        </div>
        <div className="cards_container">
            <div className="project_card">
                <p>Github Project Name</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam reprehenderit, animi perspiciatis error sint sapiente.</p>
                <br/><br/>
                <a href="#github_project1">Ver Repo</a>
                <div className="programming_languages">
                    <div className="cont_circles">
                        <div className="cir"><div></div><p>php</p></div>
                        <div className="cir"><div></div><p>javasvript</p></div>
                        <div className="cir"><div></div><p>react</p></div>
                        <div className="cir"><div></div><p>html</p></div>
                    </div>
                </div>
            </div>
            <div className="project_card">
                <p>Github Project Name</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam reprehenderit, animi perspiciatis error sint sapiente.</p>
                <br/><br/>
                <a href="#github_project2">Ver Repo</a>
                <div className="programming_languages">
                    {/* colocar los lenguajes usados en el projecto */}
                </div>
            </div>
            <div className="project_card">
                <p>Github Project Name</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam reprehenderit, animi perspiciatis error sint sapiente.</p>
                <br/><br/>
                <a href="#github_project3">Ver Repo</a>
                <div className="programming_languages">
                    {/* colocar los lenguajes usados en el projecto */}
                </div>
            </div>
        </div>
    </div>
  );
}

export default Github_Codes;