import { Link } from "react-router-dom";
import { useState } from "react"; 
import { planosDeCarreiraData } from "../../../data/planosDeCarreiraData";

export default function CardCarreira() {
  const [mostrarMais, setMostrarMais] = useState<boolean>(false);

  const categoriasVisiveis = mostrarMais
    ? planosDeCarreiraData 
    : planosDeCarreiraData.slice(0, 2); 

  return (
    <div className="
    px-7.5 pt-50
    max-[445px]:px-2
    ">
      <h6 className="text-white font-inter font-light text-3xl">
        Conheça alguns Planos de carreira para você se inspirar:
      </h6>

      <ul className="flex flex-col gap-10 mt-20">
        {categoriasVisiveis.map((planoCategoria, index) => (
          <li key={index}>
            <h6 className="
            font-inter text-3xl text-white font-bold
            max-[503px]:text-2xl
            max-[380px]:text-xl
            ">
              {planoCategoria.categoria}
            </h6>
            <hr className="text-white border my-3" />

            <ul className="flex justify-between flex-wrap gap-5 max-[417px]:justify-center">
              {planoCategoria.planos.map((plano, indexPlano) => (
                <li key={indexPlano}>
                  <Link to="/entrarConta" title="Clique aqui para ver esse plano">
                    <figure
                      className="
                        w-108 h-80 bg-green-600 rounded-[20px]
                        border-2 border-white
                        hover:bg-green-600/80 duration-300
                        max-[944px]:w-80 
                        max-[717px]:w-70 
                        max-[628px]:w-100 
                        max-[417px]:w-90 
                        max-[380px]:w-80 
                      "
                    >
                      <img
                        src={plano.img}
                        alt={plano.alt}
                        className="border-b-2 border-white rounded-t-[20px]"
                      />

                      <div className="flex flex-col gap-3 px-4 pt-4 pb-7.5 font-instrument-sans">
                        <figcaption className="text-white font-bold">
                          {plano.title}
                        </figcaption>
                        <p className="text-white font-light">
                          {plano.description}
                        </p>
                      </div>
                    </figure>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <div className="
      flex justify-center items-center gap-4 py-14.5 text-white
      max-[736px]:flex-col
      max-[736px]:items-start
      ">
        <p className="
        font-inter font-light text-2xl
        max-[821px]:text-xl
        ">
          {mostrarMais
            ? "Quer ver menos planos de carreira?"
            : "Quer ver mais planos de carreira?"}
        </p>

        <button
          onClick={() => setMostrarMais(!mostrarMais)}
          title={mostrarMais ? "Clique aqui para ver menos" : "Clique aqui para ver mais"}
          className="
            text-white font-inter font-bold text-xl cursor-pointer
            bg-green-500 border-2 border-green-600 py-2 px-4 rounded-[20px]
            btn-hover-green-460
          "
        >
          {mostrarMais ? "Clique aqui para ver menos" : "Clique aqui!"}
        </button>
      </div>
    </div>
  );
}
