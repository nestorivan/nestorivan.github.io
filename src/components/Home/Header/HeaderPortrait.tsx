const HeroPortrait = () => {
  return (
    <div className="flex flex-col full-w justify-center items-center">
      <img
        src={`${import.meta.env.BASE_URL}/src/assets/nestor.jpeg`}
        alt="Nestor Ivan"
        className="rounded-full w-60 h-60 object-cover mb-4"
      />
    </div>
  );
};

export default HeroPortrait;
