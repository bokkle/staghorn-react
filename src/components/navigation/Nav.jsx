const Nav = () => {
  return (
    <ul className="hidden gap-8 md:flex">
      <a href="#about">
        <li className="text-xl">About</li>
      </a>
      <a href="#services">
        <li className="text-xl">Services</li>
      </a>
      <a href="#reviews">
        <li className="text-xl">Reviews</li>
      </a>
      <a href="#contact">
        <li className="text-xl">Contact</li>
      </a>
    </ul>
  );
};

export default Nav;
