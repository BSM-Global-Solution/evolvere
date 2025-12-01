import { FaMinus } from "react-icons/fa";

interface Pessoa {
  img: string;
  figcaption: string;
  role: string;
  rm: string;
  turma: string;
  github: string;
  linkedin: string;
  icon: React.ReactNode;
}

interface Props {
  pessoa: Pessoa;
  ativo: boolean;
  onToggle: () => void;
  cortarNome: (nome: string) => string;
}

export default function IntegranteInicioCard({ pessoa, ativo, onToggle, cortarNome }: Props) {
  return (
    <div
      onClick={onToggle}
      className="bg-green-600 cursor-pointer rounded-2xl border-4 border-green-500
      transition-all duration-300 hover:scale-[1.02]"
    >
      <figure className="flex flex-col items-center gap-5 pt-5">
        <img
          src={pessoa.img}
          alt={pessoa.figcaption}
          className={`w-[85%] border-4 rounded-[20px] border-green-500 transition-all duration-300
        ${ativo ? "opacity-0 h-0 overflow-hidden" : "opacity-100"}
      `}
        />

        <figcaption className="text-cyan-100 text-2xl text-center w-[90%]">
          <strong>
            {ativo ? pessoa.figcaption : cortarNome(pessoa.figcaption)}
          </strong>
        </figcaption>
      </figure>

      {ativo && (
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
            <a href={pessoa.github} target="_blank">
              <img src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1763756821/icon-github_y8ytrf.png" />
            </a>

            <a href={pessoa.linkedin} target="_blank">
              <img src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1763756820/icon-linkedin_ueql1w.png" />
            </a>
          </div>
        </div>
      )}

      <span className="text-cyan-100 flex justify-end pr-5 pb-3 text-xl">
        {ativo ? <FaMinus /> : pessoa.icon}
      </span>
    </div>
  );
}
