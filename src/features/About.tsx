import darkImg from "../assets/images/image-about-dark.jpg";
import lightImg from "../assets/images/image-about-light.jpg";

function About() {
  return (
    <section className="">
      <img
        src={darkImg}
        alt="Two sofa chair and a round table in a dim light"
      />

      <article className="mx-8 mt-12 mb-10">
        <h3 className="text-sm leading-[1.375rem] font-bold tracking-[5.83px] uppercase">
          About our furniture
        </h3>
        <p className="text-LightGray mt-4 leading-[1.375rem] font-medium tracking-[-0.33px]">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </article>

      <img src={lightImg} alt="A White four legged stool with a back rest" />
    </section>
  );
}

export default About;
