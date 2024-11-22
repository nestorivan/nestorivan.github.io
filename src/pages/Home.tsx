import HeroBanner from "../components/Home/Header/HeaderBanner";
import NavBar from "../components/Nav/NavBar";
import Skills from "../components/Skills/Skills";

const Home = () => {
  return (
    <div className="w-full">
      <NavBar />
      <HeroBanner />
      <Skills />
    </div>
  );
};

export default Home;
