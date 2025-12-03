import { useTheme } from "../../../context/ThemeContextBase";

interface Props {
  pessoa: {
    img: string;
    nome: string;
    funcoes: string[];
  };
}

export default function IntegranteFinalCard({ pessoa }: Props) {7

  const { theme } = useTheme();

  return (
    <div className={`
      ${
        theme == "light"
        ? "bg-green-300/35"
        : "bg-green-300"
      }
     flex flex-col items-center gap-5 py-5
     rounded-2xl border-4 border-green-500
    `}>
      <img
        src={pessoa.img}
        alt={pessoa.nome}
        className="w-[85%] border-4 rounded-[20px] border-green-500"
      />

      <h3 className={`
        ${
          theme == "light"
          ? "text-green-600"
          : "text-tertiary-100"
        }
        text-3xl font-bold md:text-2xl
        `}>
        {pessoa.nome}
      </h3>

      <ul>
        {pessoa.funcoes.map((funcao, i) => (
          <li
            key={i}
            className={`
              ${
                theme == "light"
                ? "text-green-400"
                : "text-teal-200"
              }
            list-disc font-medium text-xl
            sm:text-2xl
            md:text-xl 
            lg:text-2xl
            `}>
            {funcao}
          </li>
        ))}
      </ul>
    </div>
  );
}
