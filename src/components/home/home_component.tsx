import Main_Header from '../header/header_component';
import My_Description from './homeparts/my_description_component';
import Github_Codes from './homeparts/github_codes_component';
import Home_Articles from './homeparts/home_articles_component';

function Home() {

  return (
    <section className='main_section'>
      <Main_Header image_link='https://raw.githubusercontent.com/Danpier-Dos-Reis/Portafolio-Front-End/refs/heads/main/src/assets/Photos/perfil_portfolio.png' />
      <My_Description/>
      <Github_Codes/>
      <Home_Articles/>
    </section>
  );
}

export default Home;