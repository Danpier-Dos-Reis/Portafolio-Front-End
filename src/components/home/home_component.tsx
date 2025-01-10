import My_Description from './homeparts/Description/my_description_component';
import Github_Codes from './homeparts/GithubCodes/github_codes_component';
import Home_Articles from './homeparts/Articles/home_articles_component';

function Home() {

  return (
    <>
      <My_Description/>
      <Github_Codes/>
      <Home_Articles/>
    </>
  );
}

export default Home;