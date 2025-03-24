import About from "../features/About";
import Hero from "../features/Hero";

function Main() {
  return (
    <main className="xl:grid xl:grid-rows-[534fr_266fr]">
      <Hero />
      <About />
    </main>
  );
}

export default Main;
