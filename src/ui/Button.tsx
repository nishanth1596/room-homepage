type ButtonProps = {
  menuIcon: string;
  ariaLabel: string;
  onClick: () => void;
  isNavigation: boolean;
};

function Button({ menuIcon, ariaLabel, isNavigation, onClick }: ButtonProps) {
  return (
    <button
      className={`${isNavigation && "hover:bg-blackHover bg-black px-6 py-5"} cursor-pointer transition-all duration-300 ease-in xl:px-8 xl:py-7`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <img src={menuIcon} alt="" />
    </button>
  );
}

export default Button;
