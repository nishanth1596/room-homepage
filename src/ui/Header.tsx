import { useEffect, useState } from "react";
import Button from "./Button";
import menuOpenIcon from "../assets/images/icon-hamburger.svg";
import menuCloseIcon from "../assets/images/icon-close.svg";
import Logo from "../assets/images/logo.svg";
import moveRightIcon from "../assets/images/icon-angle-right.svg";
import moveLeftIcon from "../assets/images/icon-angle-left.svg";
import NavBar from "./NavBar";

type ImagesProp = {
  mobile: string;
  desktop: string;
}[];

type HeaderProps = {
  index: number;
  handlePrev: () => void;
  handleNext: () => void;
  images: ImagesProp;
};

function Header({ index, images, handlePrev, handleNext }: HeaderProps) {
  const [isbtnVisible, setIsBtnVisible] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  function handleVisible() {
    setIsBtnVisible((show) => !show);
  }

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= 768);
    }
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className="relative bg-cover bg-no-repeat px-6 pt-12 pb-[18rem] transition-all duration-500 xl:bg-contain"
      style={{
        backgroundImage: `url(${isDesktop ? images[index].desktop : images[index].mobile})`,
      }}
    >
      <div></div>

      {!isbtnVisible && !isDesktop && (
        <div className="flex items-center gap-28 md:hidden">
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
            <NavBar />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
