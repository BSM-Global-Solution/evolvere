import { Link } from "react-router-dom";

export default function CardMentor() {
  return (
    <div
      className="
        flex justify-between items-center w-full
        max-[710px]:flex-col
        max-[710px]:justify-center
        max-[710px]:gap-5
        "
    >
      <div className="flex flex-col w-[70%] max-[710px]:w-full">
        <div>
          <h6
            className="
                font-instrument-sans font-bold text-5xl text-green-600
                max-[1200px]:text-4xl
                max-[989px]:text-3xl
                max-[765px]:text-2xl
                max-[710px]:text-4xl
                max-[556px]:text-3xl
                max-[477px]:text-2xl
                "
          >
            Mentor.IA - sua evolução <br />
            começa com uma conversa.
          </h6>
          <p
            className="
                w-full text-3xl font-inter font-medium text-green-600 mt-5
                max-[1200px]:text-2xl
                max-[989px]:text-[19px]
                max-[812px]:text-[16px]
                max-[710px]:text-2xl
                max-[607px]:text-xl
                max-[528px]:text-[18px]
                max-[486px]:text-[16px]
                max-[445px]:text-[14px]
                "
          >
            Fale com nossa inteligência artificial, descubra suas habilidades e
            monte um plano de carreira - <br />
            feita sob medida para o seu futuro.
          </p>
        </div>
        <Link
          to=""
          title="Clique aqui para ver o Mentor.IA"
          className="
            w-[50%] font-inter font-bold text-2xl mt-19 text-center
            bg-green-400 text-white px-4.5 py-4 rounded-[20px]
            border-r-5 border-b-5 border-green-500
            btn-hover-green-400
            max-[1200px]:text-xl
            max-[1200px]:w-[45%]
            max-[1004px]:w-[55%]
            max-[989px]:text-[18px]
            max-[989px]:mt-15
            max-[812px]:text-[16px]
            max-[765px]:text-[14px]
            max-[710px]:text-xl
            max-[556px]:text-[18px]
            max-[486px]:text-[14px]
            max-[445px]:text-[12px]
            max-[445px]:mt-10
            "
        >
          Conheça o Mentor.IA
        </Link>
      </div>
      <div className="w-[50%] max-[710px]:w-full">
        <span>
          <img
            src="/img_provisoria-.png" // imagem provisória até a imagem do projeto real
            alt=""
            className="
            rounded-[30px] w-[550px] h-[500px]
            max-[1200px]:w-[400px] max-[1200px]:h-[400px]
            max-[930px]:w-[350px] max-[930px]:h-[350px]
            max-[812px]:w-[300px] max-[812px]:h-[300px]
            max-[710px]:w-full max-[710px]:h-[250px]
            max-[445px]:w-full max-[445px]:h-[200px]
            "
          />
        </span>
      </div>
    </div>
  );
}
