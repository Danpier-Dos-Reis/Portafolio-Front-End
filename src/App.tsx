import './App.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './components/home/home_component';
import Projects from './components/projects/projects_component';
import Main_Header from './components/header/header_component';
import Works from './components/work/work_component';
import Articles from './components/articles/articles_component';
import ContactForm from './components/contact/contact_component';
import Make_Articles from './components/maker/mkArticles/mkarticles_component';
import TestPythonAPI from './components/test_api_connection/test_api_connection_component';

const router_one = createBrowserRouter([
  {
    path:"/",
    element:(
      <section className='main_section'>
        <Main_Header image_link='https://raw.githubusercontent.com/Danpier-Dos-Reis/Portafolio-Front-End/refs/heads/main/public/perfil_portfolio.png' />
        <Outlet/>
      </section>),
    errorElement: <h1>Error 404</h1>,
    children:[
      {path:"/", element: <Home/>},
      {path:"/proyectos", element: <Projects/>},
      {path:"/trabajos", element: <Works/>},
      {path:"/articulos", element: <Articles/>},
      {path:"/contacto", element: <ContactForm/>},
      {path:"/mk-articles", element: <Make_Articles/>},
      {path:"/python", element: <TestPythonAPI/>}
    ]
  }
]);

function App() {

  return (
    <section className='main_section'>
      <RouterProvider router={router_one}/>
    </section>
  );
}

export default App;