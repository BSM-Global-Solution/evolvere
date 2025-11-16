
import { Link } from "react-router-dom";
import CardIASobre from "../../components/CardIASobre";
import { IoSettingsOutline } from "react-icons/io5";
import CardsSobreEvolvere from "../../components/CardsSobreEvolvere";
import { RiRobot2Line } from "react-icons/ri";
import { FaHandsHelping } from "react-icons/fa";
import CardConstruindoFuturo from "../../components/CardConstruindoFuturo";
import { IoIosArrowDropright } from "react-icons/io";
import CardConhecendoEquipe from "../../components/CardConhecendoEquipe";

export default function Home() {
  return (
    <section>
      <section className="relative w-full h-screen overflow-hidden text-white font-bold" id="/">
        <video
          src="/bg-home.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        <div className="inset-0 bg-black/40 absolute"></div>
      
        <div className="relative z-10 flex flex-col items-center justify-end h-full text-center">
              <h1 className="
              text-7xl font-instrument-sans
              max-[895px]:text-6xl
              max-[770px]:text-5xl
              max-[645px]:text-4xl
              max-[473px]:text-3xl
              max-[390px]:text-2xl
              ">
              Evoluir é o primeiro passo <br />
              para transformar o futuro.
              </h1>

              <nav className="mt-50 mb-20">
              <ul className="flex gap-15 max-[396px]:flex-col">
                  <li>
                      <Link 
                      to=""
                      title="Clique aqui para saber mais"
                      className="
                      py-2 px-4 bg-green-400 rounded-[20px]
                      border-3 border-green-500 text-2xl
                      "
                      >
                          Saber Mais!
                      </Link>
                  </li>
                  <li>
                      <Link 
                      to=""
                      title="Clique aqui para fazer login"
                      className="
                      py-2 px-4 bg-none rounded-[20px]
                      border-3 border-white text-2xl
                      "
                      >
                          Fazer login
                      </Link>
                  </li>
                  
              </ul>
              </nav>
        </div>
      </section>

      {/* sobre */}
      <section className="flex flex-col gap-10 px-10 min-h-screen mb-30" id="sobre">
          <CardIASobre />

          <div className="flex flex-col items-center gap-14 mt-20">
             <h2 className="
             text-7xl font-instrument-sans font-bold text-green-600
             max-[560px]:text-5xl
             max-[500px]:text-4xl
             max-[400px]:text-3xl
             ">
                Sobre o Evolvere
              </h2>
             <p className="
             w-300 text-4xl font-inter
             max-[1210px]:w-full
             max-[560px]:text-3xl
             max-[500px]:text-xl
             ">
              Unimos <span className="text-green-600 font-bold">Inteligência Artificial </span>
              e <span className="text-green-600 font-bold">mentoria humana </span>para ajudar o usuário a 
              evoluir suas hard e soft skills, acompanhando seu progresso e conectando-o 
              a mentores de forma dinâmica e <span className="text-green-600 font-bold">personalizada.</span>
              </p>
              <p className="
                 w-300 text-4xl font-inter
                 max-[1210px]:w-full
                 max-[560px]:text-3xl
                 max-[500px]:text-xl
             ">
              Nosso objetivo é: destravar habilidades, abrir portas e 
              <span className="text-green-600 font-bold"> impulsionar carreiras </span>
              de verdade para o <span className="text-green-600 font-bold">futuro.</span>
              </p>
          </div>

          <ul className=" flex flex-col gap-10 w-full xl:px-29">
            <li>
                <CardsSobreEvolvere
                 icon={<IoSettingsOutline />}
                 title="Personalização real"
                 p="Planos de carreira e recomendações moldados ao seu ritmo, seus objetivos e seu estilo de aprendizado."
                 /> 
            </li>
            <li>
                <CardsSobreEvolvere
                 icon={<RiRobot2Line />}
                 title="IA que aconselha"
                 p="Uma inteligência que analisa seu progresso e recomenda Planos de Carreira, cursos e melhorias tudo de forma contínua."
                 /> 
            </li>
            <li>
                <CardsSobreEvolvere
                 icon={<FaHandsHelping />}
                 title="Mentoria que acompanha"
                 p="Especialistas e profissionais prontos para orientar, aconselhar e abrir caminhos."
                 /> 
            </li>
            <li>
              <CardConstruindoFuturo />
            </li>
          </ul>

          <div className="mt-20">
              <CardConhecendoEquipe />
          </div>

      </section>
    </section>
  );
}