function NavBar() {
  return (
    <nav>
      <ul className="flex gap-8">
        <li className="navLinks">
          <a href="#">Home</a>
        </li>
        <li className="navLinks">
          <a href="#">Shop</a>
        </li>
        <li className="navLinks">
          <a href="#">About</a>
        </li>
        <li className="navLinks">
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
