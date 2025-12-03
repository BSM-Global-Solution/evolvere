import { Link } from "react-router-dom";
import { mentores } from "../../data/mentoresData";

export default function Mentores() {
  return (
    <section>
      <header className="flex flex-col items-center pt-[140px] font-inter">
        <h1 className="text-5xl font-bold text-green-500">
          Conheça nossos Mentores
        </h1>
        <p className="text-3xl text-green-500">
          Especialistas prontos para orientar você em sua jornada.
        </p>
      </header>

      <ul className="
      pt-[90px] px-12.5 pb-[70px]
      flex justify-between flex-wrap
      gap-20
      ">
        {mentores.map((mentor) => (
          <li key={mentor.id}>
            <Link 
            to={mentor.link}
            title="Clique para ver mentor"
            >
              <figure className="
                bg-green-400 w-[414px] min-h-[493px]
                flex flex-col items-center gap-5
                px-[26px] rounded-[25px] pb-5 pt-[30px]
                text-white hover:bg-green-400/80 duration-300
              ">
                <img 
                  src={mentor.foto} 
                  alt="Uma fotografia do mentor"
                  className="w-[220px] rounded-[10px]"
                />
                <div className="flex flex-col items-center gap-2.5">
                  <figcaption className="font-bold text-2xl">
                    {mentor.nome} - {mentor.cargo}
                  </figcaption>
                  <p className="">
                    {mentor.descricao}
                  </p>
                </div>
                <span className="border border-white py-2.5 px-4.5 rounded-[10px]">
                  Ver Contato
                </span>
              </figure>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
