import './App.css'
import React,{ Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './components/home/home_component';
import Singular_Article from './components/articles/singular_article_component';
import Main_Header from './components/header/header_component';
import ContactForm from './components/contact/contact_component';
import Make_Articles from './components/maker/mkArticles/mkarticles_component';
import TestPythonAPI from './components/test_api_connection/test_api_connection_component';
import AddGithubProject from './components/maker/mkGithubProjects/mkgithubprojects';
import AddWork from './components/maker/mkTrabajos/mktrabajos';
import Singular_Work from './components/work/single_work_component';

const Articles = React.lazy(() => import ('./components/articles/articles_component'));
const Projects = React.lazy(() => import ('./components/projects/projects_component'));
const Works = React.lazy(() => import ('./components/work/work_component'));

const router_one = createBrowserRouter([
  {
    path:"/",
    element:(
      <section className='main_section'>
        <Main_Header />
        <Outlet/>
      </section>),
    errorElement: <h1>Error 404</h1>,
    children:[
      {path:"/", element: <Home/>},
      {path:"/proyectos", element: <Suspense fallback={<div>Loading...</div>}><Projects/></Suspense>},
      {path:"/trabajos", element: <Suspense fallback={<div>Loading...</div>}><Works/></Suspense>,
      children:[
        {path:":id", element: <Singular_Work />}
      ]
      },
      {path:"/articulos", element: <Suspense fallback={<div>Loading...</div>}><Articles/></Suspense>,
      children:[
        {path:":id", element: <Singular_Article />}
      ]
      },
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