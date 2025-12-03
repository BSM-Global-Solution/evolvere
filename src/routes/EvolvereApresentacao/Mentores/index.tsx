import { Link } from "react-router-dom";
import { mentores } from "../../../data/mentoresData";

export default function Mentores() {
  return (
    <section className="max-[535px]:px-3">
      <header className="flex flex-col items-center gap-3 pt-[140px] font-inter">
        <h1 className="
        text-5xl font-bold text-green-500
        max-[765px]:text-4xl
        max-[535px]:text-center
        ">
          Conheça nossos Mentores
        </h1>
        <p className="
        text-3xl text-green-500
        max-[765px]:text-2xl
        max-[614px]:text-xl
        max-[535px]:text-center
        ">
          Especialistas prontos para orientar você em sua jornada.
        </p>
      </header>

      <ul className="
      pt-[90px] px-12.5 pb-[70px]
      flex justify-between flex-wrap
      gap-20
      max-[900px]:justify-center
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
                max-[1008px]:w-[380px]
                max-[940px]:w-[360px]
              ">
                <img 
                  src={mentor.foto} 
                  alt="Uma fotografia do mentor"
                  className="w-[220px] rounded-[10px] max-[940px]:w-[210px]"
                />
                <div className="flex flex-col items-center gap-2.5">
                  <figcaption className="font-bold text-2xl max-[940px]:text-xl">
                    {mentor.nome} - {mentor.cargo}
                  </figcaption>
                  <p className="max-[940px]:text-lg">
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
