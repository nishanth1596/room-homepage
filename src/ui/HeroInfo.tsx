import IconArrow from "../assets/images/icon-arrow.svg";

type HeroInfoProps = {
  title: string;
  description: string;
};

function HeroInfo({ title, description }: HeroInfoProps) {
  return (
    <article className="mx-8 mt-[3.75rem] mb-[4.5rem]">
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
    </article>
  );
}

export default HeroInfo;
