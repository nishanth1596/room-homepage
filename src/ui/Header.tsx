import { useState } from "react";
import Button from "./Button";
import menuOpenIcon from "../assets/images/icon-hamburger.svg";
import menuCloseIcon from "../assets/images/icon-close.svg";
import Logo from "../assets/images/logo.svg";
import moveRightIcon from "../assets/images/icon-angle-right.svg";
import moveLeftIcon from "../assets/images/icon-angle-left.svg";

const images = [
  {
    mobile: "/mobile-image-hero-1.jpg",
    desktop: "/desktop-image-hero-1.jpg",
  },
  {
    mobile: "/mobile-image-hero-2.jpg",
    desktop: "/desktop-image-hero-2.jpg",
  },
  {
    mobile: "/mobile-image-hero-3.jpg",
    desktop: "/desktop-image-hero-3.jpg",
  },
];

type HeaderProps = {
  index: number;
  handlePrev: () => void;
  handleNext: () => void;
};

function Header({ index, handlePrev, handleNext }: HeaderProps) {
  const [isbtnVisible, setIsBtnVisible] = useState<boolean>(false);

  function handleVisible() {
    setIsBtnVisible((show) => !show);
  }

  return (
    <header
      className="relative bg-cover bg-no-repeat px-6 pt-12 pb-[18rem] transition-all duration-500"
      style={{
        backgroundImage: `url(${window.innerWidth >= 768 ? images[index].desktop : images[index].mobile})`,
      }}
    >
      {!isbtnVisible && (
        <div className="flex items-center gap-28">
          <Button
            onClick={handleVisible}
            ariaLabel="Click to open menu"
            menuIcon={menuOpenIcon}
            isNavigation={false}
          />
          <img src={Logo} alt="Room Logo" />
        </div>
      )}

      <div className="absolute right-0 bottom-0">
        <Button
          onClick={handlePrev}
          isNavigation={true}
          ariaLabel="Slide to previous"
          menuIcon={moveLeftIcon}
        />
        <Button
          onClick={handleNext}
          isNavigation={true}
          ariaLabel="Slide to next"
          menuIcon={moveRightIcon}
        />
      </div>

      {isbtnVisible && (
        <div className="fixed inset-0 bg-black/50">
          <div className="fixed top-0 right-0 left-0 flex items-center justify-between bg-white px-6 py-12">
            <Button
              ariaLabel="Click to close menu"
              onClick={handleVisible}
              menuIcon={menuCloseIcon}
              isNavigation={false}
            />
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
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
