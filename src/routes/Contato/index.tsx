import { IoIosArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import { contatoDataGerais, contatoDataRedesSociais } from "../../data/contatoData";

export default function Contato() {
  return (
    <section className="flex flex-col text-center py-26 px-10">
      <h1 className="text-2xl text-green-500 font-bold pb-1 md:text-4xl lg:text-5xl lg:py-4 xl:text-6xl xl:py-5 2xl:text-7xl 2xl:py-6">
        Contate-nos
      </h1>
      <p className="text-[16px] text-green-500 pb-5 md:text-2xl md:px-14 lg:text-3xl lg:px-26 lg:mb-1 xl:px-32 2xl:text-4xl 2xl:px-70">
        Precisa de ajuda, encontrou algum problema no site, ou ficou com alguma
        dúvida?
      </p>
      <div className="bg-tertiary-100 border rounded-[20px] border-cyan-300 flex flex-col">
        <h2 className="text-green-500 font-semibold text-[16px] py-1 
        md:py-2 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
          Envie uma mensagem para nós!
        </h2>
        <div className="md:flex md:flex-row">
          <div className="px-2 flex flex-col md:items-start md:w-[57.5%] md:pl-6 lg:w-[65%] xl:w-[70%] xl:mt-1 2xl:mt-12 2xl:w-full">
            <label className="text-[16px] text-green-500 font-bold flex py-2 px-1 
            md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
              Nome *
            </label>
            <input
              type="text"
              placeholder="Digite seu nome"
              className="border-2 border-gray-200 rounded-[10px] text-[14px] text-gray-300 font-medium p-1.5 px-2 
              md:text-[16px] md:w-[80%] xl:p-2.5 2xl:w-[90%] 2xl:p-3 2xl:text-xl"
            />
            <label className="text-[16px] text-green-500 font-bold flex py-2 px-1 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
              Email *
            </label>
            <input
              type="text"
              placeholder="Digite seu email"
              className="border-2 border-gray-200 rounded-[10px] text-[14px] text-gray-300 font-medium p-1.5 px-2 
              md:text-[16px] md:w-[80%] xl:p-2.5 2xl:w-[90%] 2xl:p-3 2xl:text-xl"
            />
            <label className="text-[16px] text-green-500 font-bold flex py-2 px-1 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
              Assunto *
            </label>
            <input
              type="text"
              placeholder="Digite o assunto da mensagem"
              className="border-2 border-gray-200 rounded-[10px] text-[14px] text-gray-300 font-medium p-1.5 px-2 
              md:text-[16px] md:w-[80%] xl:p-2.5 2xl:w-[90%] 2xl:p-3 2xl:text-xl"
            />
            <label className="text-[16px] text-green-500 font-bold flex py-2 px-1 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
              Sua mensagem *
            </label>
            <textarea
              placeholder="Digite sua mensagem"
              className="border-2 border-gray-200 rounded-[10px] text-[14px] text-gray-300 font-medium p-1.5 px-2 
              md:text-[16px] md:w-[80%] md:mb-4 
              lg:h-25 xl:text-xl xl:mt-1 xl:mb-0 xl:p-2.5
              2xl:w-[90%] 2xl:p-3 2xl:text-xl 2xl:h-35"
            />
            <div className="flex justify-center py-3 xl:px-34.5 2xl:px-70">
              <button
                type="submit"
                title="Clique aqui para enviar mensagem"
                className="w-[80%] border border-green-400 bg-green-400 rounded-[15px] text-[18px] text-white flex justify-center gap-3 p-1.5
                hover:bg-[#158277c0] hover:border-[#158277c0] hover:duration-300
                sm:w-[40%] 
                md:items-center md:w-full 
                lg:mt-0 lg:p-3 
                xl:p-4 xl:text-xl xl:mt-2 
                2xl:mt-3 2xl:text-2xl 2xl:px-4 2xl:py-4.5"
              >
                Enviar mensagem <IoIosArrowDropright size={24} />
              </button>
            </div>
          </div>
          <div
            className="bg-green-400 rounded-[20px] flex flex-col items-center py-1
                        sm:items-start md:mt-10 md:mb-3 md:mr-5 md:ml-5 lg:w-[40%] lg:mr-7 lg:mb-7 lg:py-3 xl:mr-9 xl:ml-9 xl:py-4 2xl:ml-14 2xl:mr-14 2xl:py-8 2xl:mt-14"
          >
            <h3 className="text-white text-2xl font-semibold flex px-4 lg:text-3xl xl:text-4xl 2xl:text-[40px]">
              Contato
            </h3>
            <ul className="flex flex-col gap-2">
              {contatoDataGerais.map((cardsEvolvere, index) => (
                <li className="flex hover:cursor-default" key={index}>
                  <Link
                    to={cardsEvolvere.link}
                    className="w-full hover:cursor-default"
                    title={cardsEvolvere.title}
                  >
                    <figure className="flex items-center gap-3 px-3 py-2">
                      <div className="bg-green-500 hover:cursor-default rounded-[10px] p-3 text-white">
                        {cardsEvolvere.icon}
                      </div>
                      <div className="flex flex-col gap-1 font-bold hover:cursor-default">
                        <figcaption className="text-[14px] text-white mr-24.5 lg:text-xl xl:text-2xl 2xl:text-[22px] 2xl:mt-0 2xl:mr-65">
                          {cardsEvolvere.figcaption}
                        </figcaption>
                        <p className="text-white text-[12px] xl:text-[14px] 2xl:text-[16px]">
                          <span className="underline text-[12px] xl:text-[16px] hover:cursor-pointer 2xl:mr-26">
                            {cardsEvolvere.span}
                          </span>{" "}
                          <text className="flex text-start">
                            {cardsEvolvere.text} <br /> {cardsEvolvere.text1}{" "}
                            <br /> {cardsEvolvere.text2}
                          </text>
                        </p>
                      </div>
                    </figure>
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-white text-2xl font-semibold flex px-4 xl:text-3xl 2xl:text-[32px]">
              Siga-nos
            </h4>
            <ul className="flex">
              {contatoDataRedesSociais.map((rede, index) => (
                <li className="flex" key={index}>
                  <Link
                    to={rede.link}
                    className="w-full flex items-center gap-3 px-3 py-2 xl:p-3 2xl:py-3"
                    title={rede.title}
                  >
                    <div className="bg-green-500 hover:bg-[#1aa194c4] hover:border-[#1aa194c4] hover:duration-300 rounded-[10px] p-3 text-white">
                      {rede.icon}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <section className="flex flex-col items-center text-center p-4">
        <h1 className="text-green-500 font-bold text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl 2xl:py-1">
          Quer entrar em contato conosco?
        </h1>
        <p className="text-green-500 text-[16px] pb-5 lg:text-xl xl:text-2xl xl:px-60 2xl:text-3xl 2xl:px-70 2xl:mt-2">
          Entre em contato diretamente com algum dos membros da equipe. <br />
          Clique abaixo para ser direcionado à página de integrantes.
        </p>
        <div className="py-1">
          <Link
            to="/nossaEquipe"
            title="Clique aqui para seguir para a página de integrantes"
            className="w-full border border-green-400 bg-green-400 rounded-[15px] text-[18px] text-white flex gap-3 p-1.5 
            hover:bg-[#158277c0] hover:border-[#158277c0] hover:duration-300
            sm:p-2 sm:mb-1 lg:p-3 lg:mt-1 xl:px-4 xl:py-3.5 xl:text-xl 2xl:text-2xl 2xl:p-4 2xl:items-center"
          >
            Ver integrantes
          </Link>
        </div>
        <h2 className="text-green-500 font-bold text-xl pb-3 lg:text-2xl xl:text-3xl 2xl:text-4xl">
          Gostaria de deixar um comentário? <br />
          <span className="font-normal text-[16px] lg:text-xl xl:text-[22px] 2xl:text-[26px]">
            (Caso não queira, deixe este espaço em branco).
          </span>
        </h2>
        <textarea
          name="Mensagem"
          id="Mensagem"
          placeholder="Digite sua mensagem"
          className="w-full border border-gray-200 rounded-[10px] p-2 gap-1 text-[14px] 
          sm:w-[70%] sm:h-25 
          lg:w-[50%] lg:h-30 lg:py-3 lg:mt-1.5
          xl:w-[45%] xl:py-4 xl:px-2
          2xl:text-xl 2xl:mt-1 2xl:py-2 2xl:h-45"
        ></textarea>
        <div className="py-3">
          <button
            type="submit"
            title="Clique aqui para enviar o feedback"
            className="w-full border border-green-400 bg-green-400 rounded-[15px] text-[18px] text-white flex gap-3 p-1.5 
            hover:bg-[#158277c0] hover:border-[#158277c0] hover:duration-300
            lg:p-3 lg:mt-1 xl:px-4 xl:py-3.5 xl:text-xl 2xl:text-2xl 2xl:p-4 2xl:items-center"
          >
            Enviar feedback <IoIosArrowDropright size={24} />
          </button>
        </div>
      </section>
    </section>
  );
}
