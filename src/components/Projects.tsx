import Card from "./Card";
import RevealOnScroll from "./RevealOnScroll";

function Projects() {
  return (
    <>
      <RevealOnScroll>
        <h1 className="mt-100 text-4xl dark:text-white text-center">
          Proyectos
        </h1>
        <p className="text-neutral-400 text-center">
          Listado de proyectos junto con las{" "}
          <span className="text-[#ff0]">tecnologias</span> utilizadas.
        </p>
        <div className="pt-15 grid-cols-2 grid md:grid-cols-4 gap-4 px-4">
          <Card />
        </div>
      </RevealOnScroll>
    </>
  );
}

export default Projects;
