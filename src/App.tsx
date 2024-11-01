import './App.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './components/home/home_component';
import Projects from './components/projects/projects_component';
import Main_Header from './components/header/header_component';

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
      {path:"/projects", element: <Projects/>}
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