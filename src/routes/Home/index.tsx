
import { Link } from "react-router-dom";
import CardIASobre from "../../components/CardIASobre";

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
      <section className="px-10 h-screen" id="sobre">
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

          
      </section>
    </section>
  );
}