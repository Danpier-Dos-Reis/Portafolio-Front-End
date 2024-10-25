function Github_Codes() {
  return (
    <div className="github_codes">
        <div className="ti_code">
            <p>Código - <span style={{ fontSize: '12px' }}>*Falta hacerle responsive, las animaciones u la imágenes*</span></p>
        </div>
        <div className="cards_container">
            <div className="project_card">
                <p>Github Project Name</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam reprehenderit, animi perspiciatis error sint sapiente.</p>
                <br/><br/>
                <a href="#github_project1">Ver Repo</a>
                <div className="programming_languages">
                <div className="cont_circles">
                        <div></div><p>php</p>
                        <div></div><p>javascript</p>
                        <div></div><p>react</p>
                        <div></div><p>html</p>
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