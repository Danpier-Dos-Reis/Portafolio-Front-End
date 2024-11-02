import "./work.css"

function Works() {

  return (
    <>
      <h1>Works Content</h1>
      <p className="w_init">Lorem ipsum dolor Animi, odio?</p>
      <section className='works_section'>
        <div className="work_image">
          <img src="https://cdn.pixabay.com/photo/2018/12/14/23/57/web-3876081_960_720.jpg" alt="current_image" />
        </div>
        <div className="work_resume">
          <a href="/work" className="work_title">Pico Work</a>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, facilis?</p>
          <ul>
            <li>laravel</li>
            <li>typescript</li>
            <li>mysql</li>
          </ul>
          <a href="/work" className='btn_work'>Look</a>
        </div>
      </section>
    </>
  );
}

export default Works;