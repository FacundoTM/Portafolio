const content = [
  {
    titulo: "Aplicación de clima",
    descripcion:
      "Sistema para ver el clima de determinada ciudad. Se utilizó React para el FrontEnd y Nestjs para el backend.",
    imagen: "https://i.imgur.com/XTJMShW.jpeg",
    link: "https://app-clima-f.vercel.app/",
    id: 3,
  },
  {
    titulo: "Aplicación de peliculas",
    descripcion:
      "Aplicación para ver un catálogo de peliculas, se utilizó Vite y NestJS.",
    imagen: "https://i.imgur.com/lWJOE5r.png",
    link: "https://app-movie-f.vercel.app/",
    id: 4,
  },
  {
    titulo: "Lista de tareas",
    descripcion:
      "Pagina web que guardará todas las notas que desees. Creado con React y LocalStorage.",
    imagen: "https://i.imgur.com/87zK76o.jpeg",
    link: "https://facundotm.github.io/ListaDeTareas/",
    id: 1,
  },
  {
    titulo: "Sistema de turnos (CRUD)",
    descripcion:
      "Una aplicación para gestionar turnos de un lavadero. Se utilizó React, Express, MongoDB, Tailwind.",
    imagen: "https://i.imgur.com/yTDjHYQ.jpeg",
    link: "https://turnos-lh9a.onrender.com/",
    id: 2,
  },
];

function Card() {
  return (
    <>
      {content.map((e) => {
        return (
          <div key={e.id}>
            <a
              className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl hover:shadow-lg focus:outline-hidden focus:shadow-lg transition dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
              href={e.link}
            >
              <img
                className="w-full h-auto rounded-t-xl"
                src={e.imagen}
                alt="Card Image"
              />
              <div className="p-4 md:p-5">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  {e.titulo}
                </h3>
                <p className="mt-1 text-gray-500 dark:text-neutral-400">
                  {e.descripcion}
                </p>
              </div>
            </a>
          </div>
        );
      })}
    </>
  );
}

export default Card;
