type ButtonProps = {
  menuIcon: string;
  ariaLabel: string;
  onClick: () => void;
  isNavigation: boolean;
};

function Button({ menuIcon, ariaLabel, isNavigation, onClick }: ButtonProps) {
  return (
    <button
      className={`${isNavigation && "hover:bg-blackHover cursor-pointer bg-black px-6 py-5 transition-colors duration-300 ease-in"}`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <img src={menuIcon} alt="" />
    </button>
  );
}

export default Button;
