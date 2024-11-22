import HeaderDescription from "./HeaderDescription";

const HeroTitle = () => {
  return (
    <div className="flex flex-col col-span-2 justify-center pt-4">
      <div className="font-roboto text-xl sm:tx-2xl">Hello traveler, I'm </div>
      <h1 className="font-oswald text-8xl border-solid border-b-[1px] border-primary pb-6">
        Nestor
      </h1>
      <HeaderDescription />
    </div>
  );
};

export default HeroTitle;
