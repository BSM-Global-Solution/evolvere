import { IoIosArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <section className="w-full h-screen bg-tertiary-700 px-5 py-15 text-white
    sm:py-20 sm:px-8
    md:px-15">
      <div className="flex flex-col justify-between items-center w-full h-full">
        <h1 className="text-4xl font-bold text-center
        sm:text-5xl
        md:text-6xl">
            Página não encontrada!
        </h1>
        <ul className="flex flex-col gap-8 max-w-220 bg-tertiary-600 p-5 text-2xl
        rounded-br-[20px] rounded-tl-[20px] border-2 border-white
        max-sm:text-xl
        sm:p-7">
          <li>
            Parece que a página que você está tentando acessar não existe ou não
            foi encontrada.
          </li>
          <li>
            <ul className="ml-10 list-disc">
              <li>Verifique se o endereço digitado está correto.</li>
              <li>Ou volte para a página inicial.</li>
            </ul>
          </li>
        </ul>
        <div className="flex justify-center max-sm:text-xl">
          <Link to="/" title="Voltar para a página inicial"
          className="flex justify-center py-3 px-4 gap-2 bg-tertiary-600
          text-2xl text-white font-inter font-semibold rounded-[20px]">
            <span className="flex flex-row items-center gap-3">
                Ir para Home <IoIosArrowDropright />
            </span>
          </Link> 
        </div>
      </div>
    </section>
  );
}
