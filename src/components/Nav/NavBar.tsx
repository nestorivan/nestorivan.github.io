const NavBar = () => {
  return (
    <nav>
      <div className="container mx-auto px-4 flex justify-around">
        <div className="flex items-center justify-between py-6 md:min-w-[600px] min-w-full">
          <ul className="flex justify-between w-full">
            <li className="font-oswald text-xl">
              <a href="#" className="text-primary">
                Home
              </a>
            </li>
            <li className="font-oswald text-xl">
              <a href="#" className="text-primary">
                About
              </a>
            </li>
            <li className="font-oswald text-xl">
              <a href="#" className="text-primary">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
