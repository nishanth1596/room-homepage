import { useState } from "react";
import Header from "../ui/Header";

function Hero() {
  const [index, setIndex] = useState<number>(0);

  function handleNext() {
    setIndex((prev) => (prev + 1) % images.length);
  }

  function handlePrev() {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }
  return (
    <div className="">
      <Header handleNext={handleNext} index={index} handlePrev={handlePrev} />
    </div>
  );
}

export default Hero;
