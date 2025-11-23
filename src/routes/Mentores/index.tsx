import { CardMentores } from "../../components/CardMentores";
import { mentores } from "../../data/mentoresData";

export default function Mentores() {
  return (
    <section>
      <h1>Conheça nossos Mentores</h1>
      <p>Especialistas prontos para orientar você em sua jornada.</p>

      <div>
        {mentores.map((mentor) => (
          <CardMentores
            key={mentor.id}
            foto={mentor.foto}
            nome={mentor.nome}
            cargo={mentor.cargo}
            descricao={mentor.descricao}
          />
        ))}
      </div>
    </section>
  );
}
