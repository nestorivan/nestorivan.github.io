import HeroPortrait from "./HeaderPortrait";
import HeroTitle from "./HeaderTitle";

const HeroBanner = () => {
  return (
    <header className="grid grid-cols-1 md:grid-cols-3 gap-4 min-h-[400px]">
      <HeroTitle />
      <HeroPortrait />
    </header>
  );
};

export default HeroBanner;
