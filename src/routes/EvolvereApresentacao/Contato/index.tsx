import { IoIosArrowDropright } from "react-icons/io";
import { useTheme } from "../../../context/ThemeContextBase";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { FaRegClock, FaYoutube } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { GrInstagram } from "react-icons/gr";
import { Link } from "react-router-dom";
import TituloHeader from "../../../components/EvolvereApresentacao/TituloHeader";

export default function Contato() {

  const { theme } = useTheme();

  return (
    <section className={`
      ${
        theme == "light"
        ? ""
        : "bg-black-dark"
      }
      flex flex-col font-inter
    `}>
     <TituloHeader 
      title="Contate-nos"
      subTitle="Precisa de ajuda, encontrou algum problema no site, ou ficou com alguma dúvida?"
      />
      <section className={`
        ${
          theme == "light"
          ? "bg-tertiary-100"
          : "bg-green-500"
        }
         border-y-3 border-x border-tertiary-300 py-10 px-[51px]
         max-[930px]:px-[31px]
         max-[488px]:px-[21px]
         max-[420px]:px-[11px]
      `}>
        <div className="flex justify-center">
          <h2 className={`
            ${
              theme == "light"
              ? "text-green-500"
              : "text-tertiary-200"
            }
            text-3xl font-semibold
            max-[497px]:text-2xl
            max-[422px]:text-center
            `}>
            Envie uma mensagem para nós!
          </h2>
        </div>
        <div className="
          mt-[50px] flex gap-6
          max-[890px]:flex-col
        ">
          <form className="w-3/2 max-[1109px]:w-2/2 max-[1062px]:w-2/2">
            <div className="flex gap-7.5 max-[1062px]:flex-col">
              <div className="flex flex-col gap-2.5 w-1/2 max-[1062px]:w-full">
                <label 
                htmlFor="nome"
                className={`
                  ${
                    theme == "light"
                    ? "text-green-500"
                    : "text-tertiary-200"
                  }
                  font-bold text-2xl
                `}
                >
                  Nome *
                </label>
                <input 
                  type="text"
                  id="nome"
                  placeholder="Digite seu nome"
                  className={`
                    ${
                      theme == "light"
                      ? "placeholder:text-gray-300"
                      : "placeholder:text-gray-200 text-white"
                    }
                    p-2.5 rounded-[10px] outline-none border border-gray-300
                    `}
                />
              </div>
              <div className="flex flex-col gap-2.5 w-1/2 max-[1062px]:w-full">
                <label 
                htmlFor="email"
                className={`
                  ${
                    theme == "light"
                    ? "text-green-500"
                    : "text-tertiary-200"
                  }
                  font-bold text-2xl
                `}
                >
                  E-mail *
                </label>
                <input 
                  type="text"
                  id="email"
                  placeholder="exemplo@email.com"
                  className={`
                    ${
                      theme == "light"
                      ? "placeholder:text-gray-300"
                      : "placeholder:text-gray-200"
                    }
                    p-2.5 rounded-[10px] outline-none border border-gray-300
                    `}
                />
              </div>
            </div>
            <div className="flex flex-col mt-10 gap-2.5">
              <label 
                htmlFor="assunto"
                className={`
                  ${
                    theme == "light"
                    ? "text-green-500"
                    : "text-tertiary-200"
                  }
                  font-bold text-2xl
                `}
                >
                  Assunto *
                </label>
                <input 
                  type="text"
                  id="assunto"
                  placeholder="Digite o assunto da mensagem"
                  className={`
                    ${
                      theme == "light"
                      ? "placeholder:text-gray-300"
                      : "placeholder:text-gray-200 text-white"
                    }
                    p-2.5 rounded-[10px] outline-none border border-gray-300
                    `}
                />
            </div>
            <div className="flex flex-col mt-10 gap-2.5">
              <label 
                htmlFor="mensagem"
                className={`
                  ${
                    theme == "light"
                    ? "text-green-500"
                    : "text-tertiary-200"
                  }
                  font-bold text-2xl
                `}
                >
                  Sua mensagem *
                </label>
                <textarea 
                  id="mensagem"
                  placeholder="Digite sua mensagem"
                  className={`
                    ${
                      theme == "light"
                      ? "placeholder:text-gray-300"
                      : "placeholder:text-gray-200 text-white"
                    }
                    p-2.5 rounded-[10px] outline-none border border-gray-300
                    resize-none h-55
                    `}
                />
            </div>
              <button 
              title="Enviar mensagem"
              className={`
                ${
                  theme == "light"
                  ? "bg-green-400 hover:bg-green-400/80"
                  : "bg-green-600 hover:bg-green-600/60"
                }
                flex items-center gap-2 text-white px-2.5 py-3
                text-xl rounded-[15px] mt-[23px] duration-300
                cursor-pointer
              `}>
                Enviar mensagem
                <span>
                  <IoIosArrowDropright size={30} />
                </span>
              </button>
          </form>
          <div className={`
            ${
              theme == "light"
              ? "bg-green-400"
              : "bg-green-600"
            }
            w-full rounded-[30px] pl-7.5 pt-7.5 pr-10 pb-9
            border-3 border-green-600 shadow-[10px_10px_16px_#043732]
            flex flex-col gap-10
            max-[465px]:pr-8
            max-[465px]:pl-5.5
            max-[420px]:pl-4.5
          `}>
            <div>
              <h3 className="
                text-white text-3xl font-semibold
                max-[400px]:text-2xl
              ">
                Contato
              </h3>
              <ul className="flex flex-col gap-7.5 pt-5">
                <li className="flex items-center gap-2.5">
                  <div className="
                    bg-green-500 p-3 rounded-tl-[20px]
                     rounded-br-[20px] text-white
                  ">
                    <FiPhone className="text-[28px] max-[400px]:text-[24px]" />
                  </div>
                  <p className="
                  text-white text-xl
                    max-[400px]:text-[16px]
                  ">
                    <b>Telefone:</b> (12) 3456-7891
                  </p>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="
                    bg-green-500 p-3 rounded-tl-[20px]
                     rounded-br-[20px] text-white
                  ">
                    <MdOutlineMail className="text-[28px] max-[400px]:text-[24px]" />
                  </div>
                  <p className="
                  text-white text-xl
                    max-[400px]:text-[16px]
                  ">
                    <b>E-mail: </b> evolvere.contatos@gmail.com 
                  </p>
                </li>
              </ul>
            </div>
            <div className="mt-2.5">
              <h3 className="
                text-white text-3xl font-semibold
                  max-[400px]:text-2xl
              ">
                Horários de Atendimento
              </h3>
              <ul className="flex flex-col gap-7.5 pt-5">
                <li className="flex items-start gap-2.5">
                  <div className="
                    bg-green-500 p-3 rounded-tl-[20px]
                     rounded-br-[20px] text-white
                  ">
                    <FaRegClock className="text-[28px] max-[400px]:text-[24px]" />
                  </div>
                  <ul className="flex flex-col ">
                    <li>
                      <p className="
                      text-white text-xl
                      max-[1185px]:text-lg
                      max-[449px]:text-[16px]
                      max-[400px]:text-sm
                      max-[365px]:text-[12px]
                      ">
                        <b>Segunda à Sexta:</b> das 07h às 20h
                      </p>
                    </li>
                    <li>
                      <p className="
                      text-white text-xl 
                      max-[1185px]:text-lg
                      max-[449px]:text-[16px]
                      max-[400px]:text-sm
                      max-[365px]:text-[12px]
                      ">
                        <b>Sábados:</b> das 09h às 19h
                      </p>
                    </li>
                    <li>
                      <p className="
                      text-white text-xl 
                      max-[1185px]:text-lg
                      max-[449px]:text-[16px]
                      max-[400px]:text-sm
                      max-[365px]:text-[12px]
                      ">
                        <b>Domingos e feriados:</b> fechado
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="
                text-white text-3xl font-semibold
                max-[400px]:text-2xl
              ">
                Siga-nos:
              </h3>
              <ul className="flex gap-7.5 pt-5">
                <li className="flex items-center gap-2.5">
                  <Link 
                  to=""
                  title="Ver Twiter do Evolvere"
                  className="
                    bg-green-500 p-3 rounded-tl-[20px]
                     rounded-br-[20px] text-white
                     hover:bg-green-500/80 duration-300
                  ">
                    <RiTwitterXFill className="text-[28px] max-[400px]:text-[20px]" />
                  </Link>
                </li>
                <li className="flex items-center gap-2.5">
                  <Link 
                  to=""
                  title="Ver Instagram do Evolvere"
                  className="
                    bg-green-500 p-3 rounded-tl-[20px]
                     rounded-br-[20px] text-white
                     hover:bg-green-500/80 duration-300
                  ">
                    <GrInstagram className="text-[28px] max-[400px]:text-[20px]" />
                  </Link>
                </li>
                <li className="flex items-center gap-2.5">
                  <Link 
                  to=""
                  title="Ver Youtube do Evolvere"
                  className="
                    bg-green-500 p-3 rounded-tl-[20px]
                     rounded-br-[20px] text-white
                     hover:bg-green-500/80 duration-300
                  ">
                    <FaYoutube className="text-[28px] max-[400px]:text-[20px]" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={`
        h-screen pt-14 px-36.5 pb-17.5
      `}>
        <header className="text-center">
          <h4 className={`
            ${
              theme == "light"
              ? "text-green-500"
              : "text-tertiary-200"
            }
             font-bold text-6xl
          `}>
            O que você achou do nosso projeto?
          </h4>
          <p className={`
              ${
                theme == "light"
                ? "text-green-500"
                : "text-tertiary-200"
              }
              pt-2.5 text-3xl font-light
          `}>
            Sua opinião é essencial para melhorarmos cada vez mais. <br />
            Conte pra gente como tem sido sua experiência com a Evolvere!
          </p>
        </header>
      </section>
    </section>
  );
}
