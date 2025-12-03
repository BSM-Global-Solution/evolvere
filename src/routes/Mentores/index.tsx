import { CardMentores } from "../../components/CardMentores";
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

      {/* <div>
        {mentores.map((mentor) => (
          <CardMentores
            key={mentor.id}
            foto={mentor.foto}
            nome={mentor.nome}
            cargo={mentor.cargo}
            descricao={mentor.descricao}
          />
        ))}
      </div> */}
    </section>
  );
}
