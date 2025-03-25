import IconArrow from "../assets/images/icon-arrow.svg";
import BlackNavigationButton from "./BlackNavigationButton";

type HeroInfoProps = {
  title: string;
  description: string;
  handlePrev: () => void;
  handleNext: () => void;
};

function HeroInfo({
  title,
  description,
  handleNext,
  handlePrev,
}: HeroInfoProps) {
  return (
    <article className="px-8 pt-[3.75rem] pb-[4.5rem] lg:px-20 lg:pb-0 xl:px-[6.25rem] xl:pt-[7.5rem]">
      <h2 className="text-[2.5rem] leading-8 font-semibold tracking-[-1.67px]">
        {title}
      </h2>
      <p className="text-LightGray mt-4 leading-[1.375rem] font-medium tracking-[-0.33px]">
        {description}
      </p>

      <a
        href="#"
        className="mt-10 flex gap-[1.875rem] leading-4 font-[0.9375rem] tracking-[12.5px] uppercase"
        aria-label="Shop now"
      >
        Shop now{" "}
        <span className="text-black">
          <img src={IconArrow} alt="" />
        </span>
      </a>

      <BlackNavigationButton
        onHandleNextImage={handleNext}
        onHandlePrevImage={handlePrev}
        isHero
      />
    </article>
  );
}

export default HeroInfo;
