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
      img: "https://res.cloudinary.com/dt26mfzpw/image/upload/v1763755022/img-moises_pjeymd.png",
      figcaption: "Moisés Barsoti Andrade de Oliveira",
      icon: <FaPlus />,
      role: "Desenvolvedor Fullstack",
      rm: "565049",
      turma: "1TDSPG",
      github: "https://github.com/moisesBarsoti",
      linkedin: "https://www.linkedin.com/in/mois%C3%A9s-barsoti-468869278/",
    },
    {
      img: "https://res.cloudinary.com/dt26mfzpw/image/upload/v1763755002/img-sofia_hrzsac.png",
      figcaption: "Sofia Siqueira Fontes",
      icon: <FaPlus />,
      role: "Designer UI/UX",
      rm: "563829",
      turma: "1TDSPG",
      github: "https://github.com/sSofia-s",
      linkedin: "https://www.linkedin.com/in/sofia-siqueira-0111a230b/",
    },
    {
      img: "https://res.cloudinary.com/dt26mfzpw/image/upload/v1763755015/img-felipe_ndm51d.png",
      figcaption: "Felipe Kirschner Modesto",
      icon: <FaPlus />,
      role: "Desenvolvedor Back-end",
      rm: "561810",
      turma: "1TDSPG",
      github: "https://github.com/FeKiModesto",
      linkedin: "https://www.linkedin.com/in/felipe-modesto-348986366/",
    },
  ];

  const [cardAtivo, setCardAtivo] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setCardAtivo(cardAtivo === index ? null : index);
  };

  const cortarNome = (nome: string) => {
    const partes = nome.split(" ");
    return partes.slice(0, 2).join(" ");
  };

  return (
    <>
      <section className="bg-tertiary-100 pt-30 px-5 border-b-2 border-green-400">
        <div className="flex items-center gap-4 mb-3">
          <h1 className="text-3xl font-bold text-green-600">
            Conheça nossa equipe!
          </h1>
          <hr className="hidden w-[15%] border-green-600 border-2 rounded" />
        </div>

        <p className="text-green-600 font-medium text-xl mb-5">
          Conheça os desenvolvedores por trás do projeto Evolvere:
        </p>

        <div className="flex flex-col gap-10 justify-center items-center">
          {cardsPessoas.map((pessoa, index) => (
            <div
              key={index}
              onClick={() => toggleCard(index)}
              className="bg-green-600 cursor-pointer rounded-2xl border-4 border-green-500
          transition-all duration-300 hover:scale-[1.02]"
            >
              <figure className="flex flex-col items-center gap-5 pt-5">
                <img
                  src={pessoa.img}
                  alt={pessoa.figcaption}
                  className={`w-[85%] border-4 rounded-[20px] border-green-500
                transition-all duration-300
                ${
                  cardAtivo === index
                    ? "opacity-0 h-0 overflow-hidden"
                    : "opacity-100"
                }
              `}
                />

                <figcaption className="text-cyan-100 text-2xl text-center w-[90%]">
                  <strong>
                    {cardAtivo === index
                      ? pessoa.figcaption
                      : cortarNome(pessoa.figcaption)}
                  </strong>
                </figcaption>
              </figure>

              {cardAtivo === index && (
                <div className="text-cyan-100 px-5 flex flex-col animate-fade-in duration-600 mt-4">
                  <h2 className="text-xl text-green-200 font-medium self-center">
                    {pessoa.role}
                  </h2>
                  <hr className="w-[95%] self-center" />

                  <ul className="text-xl mt-3 mb-5">
                    <li>
                      <strong>RM:</strong> {pessoa.rm}
                    </li>
                    <li>
                      <strong>Turma:</strong> {pessoa.turma}
                    </li>
                  </ul>

                  <p className="text-2xl">
                    <strong>Redes Sociais:</strong>
                  </p>
                  <div className="gap-3 flex flex-row py-4">
                    <a
                      href={pessoa.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1763756821/icon-github_y8ytrf.png"
                        alt="Logotipo do GitHub"
                      />
                    </a>

                    <a
                      href={pessoa.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1763756820/icon-linkedin_ueql1w.png"
                        alt="Logotipo do LinkedIn"
                      />
                    </a>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCardAtivo(null);
                    }}
                  ></button>
                </div>
              )}
              <span className="text-cyan-100 flex justify-end pr-5 pb-3 text-xl">
                {cardAtivo === index ? <FaMinus /> : <FaPlus />}
              </span>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-green-500 mt-10 mb-5">
          Porquê criamos o Projeto Evolvere?
        </h2>
        <p className="text-lg text-green-500 font-medium mb-5">
          O <strong>Evolvere</strong> nasceu como resposta ao desafio da{" "}
          <strong>
            FIAP (Faculdade de Informática e Administração Paulista)
          </strong>
          . Nosso objetivo é ajudar pessoas a encontrarem caminhos profissionais
          mais conscientes, tecnológicos e humanos ao mesmo tempo sempre olhando
          para a empregabilidade do futuro.
        </p>
      </section>

      <section className=" flex flex-col gap-10 py-10 px-5">
        <div className="flex flex-col gap-5 items-center">
          <h2 className="text-green-500 font-bold text-4xl text-center">Sobre o desafio - <br />
          Global Solution <br />
          2025
          </h2>
          <img src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1763302241/banner-global-solution_rdl0bo.png"
          alt="Banner do Global Solution 2025." />
        </div>

        <p className="text-green-600 text-2xl">O <strong>Global Solution</strong>, é um grande desafio que integra diversas áreas do conhecimento e incentiva os alunos a resolverem problemas reais usando tecnologia e impacto social.</p>
        
        <div className="border-4 border-green-400 rounded-[50px] shadow-[5px_7px_8px_rgba(0,0,0,.5)] p-5">
          <div className="flex items-center gap-4 mb-3">
            <h1 className="text-3xl font-bold text-green-400">
              O desafio 
            </h1>
            <hr className="whitespace-nowrap w-[35%] border-green-400 border-2 rounded" />
          </div>

          <p className="text-green-600 text-xl">Imaginar como será o trabalho em um mundo onde a <strong>tecnologia</strong> está em todos os lugares, mas as <strong>relações humanas</strong> continuam no centro de tudo. O desafio é propor uma solução que use <strong>inovação, tecnologia e boas ideias</strong> para melhorar a vida das pessoas, preparar organizações para novos tempos e criar oportunidades mais justas, inclusivas e sustentáveis.</p>
        </div>
      </section>
    </>
  );
}
