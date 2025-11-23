import { useTheme } from "../../context/ThemeContextBase";

export default function CardPlanoCarreira() {

  const { theme } = useTheme();

  return (
    <article
      className={`
        ${
          theme == "light"
          ? "bg-green-500"
          : "bg-green-600"
        }
        w-full rounded-full
        text-center text-white absolute -mt-20
        max-md:-mt-10
        `}
    >
      <h6
        className="
        font-inria-sans font-bold text-6xl pt-15
        max-[1281px]:text-5xl
        max-[1025px]:text-4xl
        max-[769px]:text-3xl
        max-[640px]:text-2xl
        max-[521px]:text-xl
        max-[445px]:text-[18px]
        max-[400px]:text-sm
        "
      >
        Construa seu plano de crescimento profissional!
      </h6>
      <p
        className="
        font-inria-sans font-regular text-3xl mt-2 pb-15
        max-[1281px]:text-2xl
        max-[1025px]:text-xl
        max-[769px]:text-lg
        max-[640px]:text-md
        max-[586px]:text-sm
        max-[400px]:text-[12px]
        "
      >
        Veja como evoluir em sua carreira com passos práticos e metas
        alcançáveis.
      </p>
    </article>
  );
}
