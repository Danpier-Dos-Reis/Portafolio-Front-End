import './App.css'
import React,{ Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './components/home/home_component';
// import Articles from './components/articles/articles_component';
// import Projects from './components/projects/projects_component';
import Main_Header from './components/header/header_component';
import Works from './components/work/work_component';
import ContactForm from './components/contact/contact_component';
import Make_Articles from './components/maker/mkArticles/mkarticles_component';
import TestPythonAPI from './components/test_api_connection/test_api_connection_component';
import AddGithubProject from './components/maker/mkGithubProjects/mkgithubprojects';
import AddWork from './components/maker/mkTrabajos/mktrabajos';

const Articles = React.lazy(() => import ('./components/articles/articles_component'));
const Projects = React.lazy(() => import ('./components/projects/projects_component'));

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
      {path:"/proyectos", element: <Suspense fallback={<div>Loading...</div>}><Projects/></Suspense>},
      {path:"/trabajos", element: <Works/>},
      {path:"/articulos", element: <Suspense fallback={<div>Loading...</div>}><Articles/></Suspense>},
      {path:"/contacto", element: <ContactForm/>},
      {path:"/mk-article", element: <Make_Articles/>},
      {path:"/add-github-project", element: <AddGithubProject/>},
      {path:"/add-work", element: <AddWork/>},
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