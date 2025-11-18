
import { Link } from "react-router-dom";
import CardIASobre from "../../components/CardIASobre";
import { IoSettingsOutline } from "react-icons/io5";
import CardsSobreEvolvere from "../../components/CardsSobreEvolvere";
import { RiRobot2Line } from "react-icons/ri";
import { FaHandsHelping } from "react-icons/fa";
import CardConstruindoFuturo from "../../components/CardConstruindoFuturo";
import CardConhecendoEquipe from "../../components/CardConhecendoEquipe";
import CardMentor from "../../components/CardMentor";
import CardPlanoCarreira from "../../components/CardPlanoCarreira";
import CardCarreira from "../../components/CardCarreira/indes";
import VideoPitch from "../../components/VideoPitch";
import { FaCirclePlay } from "react-icons/fa6";

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
                      btn-hover-green-580
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
                      btn-hover-white-30
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
      <section className="flex flex-col gap-10 px-10 min-h-screen mb-40" id="sobre">
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

      {/* mentor.IA */}
      <section className="
      flex h-screen bg-tertiary-100 border-t-5 border-green-400 pl-7.5 pr-12.5
      max-[445px]:pr-2
      max-[445px]:pl-4
      ">
        <CardMentor />
      </section>

      {/* plano de carreira */}
      <section className="min-h-screen bg-green-400" id="planos-carreira">
        <CardPlanoCarreira />
        <CardCarreira />
      </section>

      {/* pitch */}
      <section className="
      min-h-screen px-12.5 pt-14.5 pb-17.5
      max-[645px]:px-4
      ">
        <header className="flex flex-col gap-5">
          <h6 className="
          font-instrument-sans text-6xl font-bold text-green-600
          max-[596px]:text-5xl
          ">
            Conheça o Evolvere
          </h6>
          <p className="
          font-instrument-sans font-light text-3xl
          max-[596px]:text-2xl
          ">
            Assista ao nosso vídeo de apresentação e veja
            como o Evolvere conecta pessoas ao melhor caminho
            profissional:
          </p>
        </header>

        <VideoPitch />

        <div className="flex flex-col gap-3 pt-15 pb-20">
            <p className="
            font-instrument-sans font-light text-3xl
            max-[596px]:text-2xl
            ">
              Caso o vídeo não carregue,
              você pode assistir diretamente
              pelo YouTube:
            </p>
            <span 
            title="Clique aqui para ver o vídeo no youtube"
            className="
            flex justify-center items-center gap-3
            bg-green-400 text-white py-3.5
            w-[25%] rounded-full cursor-pointer
            btn-hover-green-460
            max-[1160px]:w-[30%]
            max-[966px]:w-[35%]
            max-[838px]:w-[40%]
            max-[778px]:w-[50%]
            max-[596px]:w-[60%]
            max-[481px]:w-[70%]
            max-[408px]:w-full
            ">
              <a href="" className="border-b text-2xl">Assistir no Youtube</a>
              <FaCirclePlay className="text-[30px]"/>
            </span>
        </div>

      </section>
    </section>
  );
}