import Button from "./Button";
import moveRightIcon from "../assets/images/icon-angle-right.svg";
import moveLeftIcon from "../assets/images/icon-angle-left.svg";

type BlackNavigationButtonProps = {
  onHandlePrevImage: () => void;
  onHandleNextImage: () => void;
  isHero: boolean;
};

function BlackNavigationButton({
  onHandlePrevImage,
  onHandleNextImage,
  isHero,
}: BlackNavigationButtonProps) {
  return (
    <div
      className={`absolute bottom-0 ${isHero ? "hidden -translate-x-20 lg:block xl:-translate-x-[100px]" : "right-0 block lg:hidden"}`}
    >
      <Button
        onClick={onHandlePrevImage}
        isNavigation={true}
        ariaLabel="Slide to previous"
        menuIcon={moveLeftIcon}
      />
      <Button
        onClick={onHandleNextImage}
        isNavigation={true}
        ariaLabel="Slide to next"
        menuIcon={moveRightIcon}
      />
    </div>
  );
}

export default BlackNavigationButton;
