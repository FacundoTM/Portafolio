import RevealOnScroll from "./RevealOnScroll";

function Hero() {
  return (
    <>
      <RevealOnScroll>
        <div className="bg-neutral-900">
          <div className="max-w-5xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-24">
            <h1 className="cursor-default font-semibold text-white text-5xl md:text-6xl">
              Hola soy <span className="text-[#ff0] ">Facundo</span>.
            </h1>
            <div className="max-w-4xl">
              <p className="mt-5 text-neutral-400 text-lg cursor-default">
                Soy un desarrollador frontend y backend con experiencia en la
                creación de aplicaciones web modernas y escalables. Trabajo con
                tecnologías como React, NestJS, Tailwind CSS, MySQL y
                PostgreSQL. Me especializo en desarrollar interfaces de usuario
                intuitivas y sistemas backend robustos, enfocados en el
                rendimiento, la seguridad y la mantenibilidad del código.
              </p>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </>
  );
}

export default Hero;
