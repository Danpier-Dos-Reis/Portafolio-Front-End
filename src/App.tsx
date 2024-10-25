import Main_Header from './components/header/header_componenet';
import My_Description from './components/home/my_description_component';
import Github_Codes from './components/home/github_codes_component';
import Home_Articles from './components/home/home_articles_component';
import './App.css'

function App() {

  return (
    <section className='main_section'>
      <Main_Header image_link='../src/assets/Photos/perfil_portfolio.png' />
      <My_Description/>
      <Github_Codes/>
      <Home_Articles/>
    </section>
  );
}

export default App;