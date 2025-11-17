import { IoIosArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

export default function CardConhecendoEquipe() {
  return (
            <div className="
            flex justify-center
            max-[624px]:flex-col
            max-[624px]:gap-5
            ">
              <div className="
              flex justify-center items-center text-end
              max-[624px]:justify-end
              ">
                <h5 className="
                  font-instrument-sans font-bold text-green-400 text-6xl
                  max-[1055px]:text-5xl
                  max-[881px]:text-4xl
                  max-[737px]:text-3xl
                  max-[664px]:text-2xl
                  max-[624px]:text-6xl
                  max-[490px]:text-5xl
                  max-[400px]:text-4xl
                ">
                  Conheça <br /> nossa equipe!
                </h5>
              </div>
              <div className="w-0.5 bg-green-700 mx-6"></div>
              <div className="
              flex flex-col gap-3
              max-[624px]:items-end
              ">
                <p className="
                text-3xl font-inter font-medium
                max-[1055px]:text-2xl
                max-[881px]:text-xl
                max-[737px]:text-lg
                max-[624px]:text-2xl
                max-[517px]:text-xl
                max-[429px]:text-[18px]
                max-[400px]:text-[14px]
                ">
                  Saiba quem são os responsáveis pela <br />
                  criação e desenvolvimento do Evolvere:
                </p>
                <Link 
                to=""
                title="Ir para a página de integrantes"
                className="
                w-[35%] flex justify-center py-2 gap-2 items-center bg-green-400
                text-2xl text-white font-inter font-bold rounded-[20px]
                border-r-5 border-b-5 border-green-500
                max-[1055px]:text-xl
                max-[881px]:text-lg
                max-[881px]:w-[40%]
                max-[737px]:text-md
                max-[737px]:w-[45%]
                max-[624px]:text-2xl
                max-[517px]:text-xl
                max-[429px]:w-[50%]
                max-[400px]:w-[60%]
                btn-hover-green-460
                "
                >
                  <span>Saiba mais!</span>
                  <IoIosArrowDropright />
                </Link>
              </div>
            </div>
  );
}
