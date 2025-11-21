import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function Integrantes() {
  interface CardsIntegrantes {
    img: string;
    figcaption: string;
    icon: React.ReactNode;
    role: string;
    rm: string;
    turma: string;
    github: string;
    linkedin: string;
  }

  const cardsPessoas: CardsIntegrantes[] = [
    {
      img: "https://res.cloudinary.com/dt26mfzpw/image/upload/v1763684929/img-moises_pjeymd.jpg",
      figcaption: "Moisés Barsoti Andrade de Oliveira",
      icon: <FaPlus />,
      role: "Desenvolvedor Fullstack",
      rm: "565049",
      turma: "1TDSPG",
      github: "",
      linkedin: "",
    },
    {
      img: "https://res.cloudinary.com/dt26mfzpw/image/upload/v1763685190/img-sofia_hrzsac.jpg",
      figcaption: "Sofia Siqueira Fontes",
      icon: <FaPlus />,
      role: "Designer UI/UX",
      rm: "563829",
      turma: "1TDSPG",
      github: "",
      linkedin: "",
    },
    {
      img: "https://res.cloudinary.com/dt26mfzpw/image/upload/v1763684953/img-felipe_ndm51d.jpg",
      figcaption: "Felipe Kirschner Modesto",
      icon: <FaPlus />,
      role: "Desenvolvedor Back-end",
      rm: "561810",
      turma: "1TDSPG",
      github: "",
      linkedin: "",
    },
  ];

  const [cardAtivo, setCardAtivo] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setCardAtivo(cardAtivo === index ? null : index);
  };

  return (
    <section>
      <div>
        <h1>Conheça nossa equipe!</h1>
        <hr />
      </div>
      <p>Conheça os desenvolvedores por trás do projeto Evolvere:</p>

      <div>
        {cardsPessoas.map((pessoa, index) => (
          <div key={index} onClick={() => toggleCard(index)}>
            <figure>
              <img src={pessoa.img} alt={pessoa.figcaption} />
              <figcaption>{pessoa.figcaption}</figcaption>

              <span className="icon">
                {cardAtivo === index ? <FaMinus /> : <FaPlus />}
              </span>
            </figure>

            {cardAtivo === index && (
              <div>
                <h3>{pessoa.role}</h3>
                <hr />
                <p>
                  <strong>RM:</strong> {pessoa.rm}
                </p>
                <p>
                  <strong>Turma:</strong> {pessoa.turma}
                </p>

                <h4>Redes Sociais:</h4>
                <div>
                  <a href={pessoa.github} target="_blank">
                    GitHub
                  </a>
                  <a href={pessoa.linkedin} target="_blank">
                    LinkedIn
                  </a>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCardAtivo(null);
                  }}
                >
                  –
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <h2>Porquê criamos o Projeto Evolvere?</h2>
      <p>
        O Evolvere nasceu como resposta ao desafio da FIAP (Faculdade de
        Informática e Administração Paulista). Nosso objetivo é ajudar pessoas a
        encontrarem caminhos profissionais mais conscientes, tecnológicos e
        humanos ao mesmo tempo sempre olhando para a empregabilidade do futuro.
      </p>
    </section>
  );
}
