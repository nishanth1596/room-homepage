import { useEffect, useState } from "react";
import Button from "./Button";
import menuOpenIcon from "../assets/images/icon-hamburger.svg";
import menuCloseIcon from "../assets/images/icon-close.svg";

import NavBar from "./NavBar";
import Logo from "./Logo";
import BlackNavigationButton from "./BlackNavigationButton";

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
      className="relative bg-cover bg-no-repeat px-6 pt-12 pb-[18rem] transition-all duration-500 lg:bg-cover lg:px-16 lg:pt-16 lg:pb-0"
      style={{
        backgroundImage: `url(${isDesktop ? images[index].desktop : images[index].mobile})`,
      }}
    >
      <div className="hidden items-start gap-14 lg:flex">
        <Logo />
        <NavBar />
      </div>

      {!isbtnVisible && !isDesktop && (
        <div className="flex items-center gap-28 md:hidden">
          <Button
            onClick={handleVisible}
            ariaLabel="Click to open menu"
            menuIcon={menuOpenIcon}
            isNavigation={false}
          />
          <Logo />
        </div>
      )}

      <BlackNavigationButton
        onHandleNextImage={handleNext}
        onHandlePrevImage={handlePrev}
        isHero={false}
      />

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
