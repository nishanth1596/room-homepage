import { useState } from "react";
import Header from "../ui/Header";
import { images, productInfo } from "../utils/data";
import HeroInfo from "../ui/HeroInfo";

function Hero() {
  const [index, setIndex] = useState<number>(0);

  function handleNext() {
    setIndex((prev) => (prev + 1) % images.length);
  }

  function handlePrev() {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }
  return (
    <section className="xl:grid xl:grid-cols-[840fr_600fr]">
      <Header
        images={images}
        handleNext={handleNext}
        index={index}
        handlePrev={handlePrev}
      />

      <HeroInfo
        key={productInfo[index].id}
        title={productInfo[index].title}
        description={productInfo[index].description}
      />
    </section>
  );
}

export default Hero;
