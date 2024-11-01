import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/home/home_component';
import Projects from './components/projects/projects_component';

const router_one = createBrowserRouter([
  {path:"/", element: <Home/>, errorElement: <h1>Error 404</h1>},
  {path:"/projects", element: <Projects/>, errorElement: <h1>Error 404</h1>}

]);

function App() {

  return (
    <section className='main_section'>
      <RouterProvider router={router_one}/>
    </section>
  );
}

export default App;