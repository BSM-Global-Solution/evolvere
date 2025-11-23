import { useTheme } from "../../context/ThemeContextBase";

export default function CardConstruindoFuturo() {

  const { theme } = useTheme();


  return (
    <div
      className={`
        ${
          theme == "light"
          ? "border-green-600 shadow-[5px_7px_15px_rgba(0,0,0,.5)]"
          : "border-green-200 shadow-[5px_7px_15px_#29D5C4]"
        }
        flex justify-center border-4 rounded-[50px]
        max-[520px]:rounded-[30px]
        `}
    >
      <h4
        className={`
            ${
              theme == "light"
              ? "text-green-600"
              : "text-tertiary-200"
            }
            text-4xl text-center px-9 py-10 font-instrument-sans font-bold
            
            max-[720px]:text-3xl
            max-[626px]:text-2xl
            max-[538px]:text-xl
            max-[472px]:text-lg
            max-[440px]:text-sm
            max-[440px]:px-6
            `}
      >
        Estamos construindo o futuro do desenvolvimento profissional. Vem
        evoluir com a gente!
      </h4>
    </div>
  );
}
