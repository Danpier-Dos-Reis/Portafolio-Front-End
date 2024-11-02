import "./articles_component.css"

function Articles() {

  return (
    <div className="home_articles">
        <div className="ti_articles">
            <p>Artículos</p>
        </div>
        <div className="arts_container">
          <a href="#article" className="ti_article">I'm Dad!</a>
          <div>
            <p className="type_article">life</p> <p className="date_article">12/10/2024</p>
          </div>
          <p className="art_resume">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas autem, esse quam nam cumque quas hic veritatis nostrum recusandae vel?</p>
          <a href="#article" className="art_calltoread">Read Article &gt;</a>
        </div>
    </div>
  );
}

export default Articles;