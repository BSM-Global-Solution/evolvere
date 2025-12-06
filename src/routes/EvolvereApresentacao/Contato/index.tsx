import { IoIosArrowDropright } from "react-icons/io";
import { useTheme } from "../../../context/ThemeContextBase";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";

export default function Contato() {

  const { theme } = useTheme();

  return (
    <section className={`
      ${
        theme == "light"
        ? ""
        : "bg-black-dark"
      }
      flex flex-col py-26 font-inter
    `}>
      <header className={`
        ${
          theme == "light"
          ? "text-green-500"
          : "text-tertiary-200"
        }
        text-center
        `}>
        <h1 className="text-2xl font-bold pb-1 md:text-4xl lg:text-5xl lg:py-4 xl:text-6xl xl:py-5 2xl:text-7xl 2xl:py-6">
          Contate-nos
        </h1>
        <p className="text-[16px] pb-5 md:text-2xl md:px-14 lg:text-3xl lg:px-26 lg:mb-1 xl:px-32 2xl:text-4xl 2xl:px-70">
          Precisa de ajuda, encontrou algum problema no site, ou ficou com alguma
          dúvida?
        </p>
      </header>

      <section className={`
        ${
          theme == "light"
          ? "bg-tertiary-100"
          : "bg-green-500"
        }
         border-y-3 border-x border-tertiary-300 py-10 px-[51px]
      `}>
        <div className="flex justify-center">
          <h2 className={`
            ${
              theme == "light"
              ? "text-green-500"
              : "text-tertiary-200"
            }
            text-3xl font-semibold
            `}>
            Envie uma mensagem para nós!
          </h2>
        </div>
        <div className="mt-[50px] flex gap-6">
          <form className="w-3/2">
            <div className="flex gap-7.5">
              <div className="flex flex-col gap-2.5 w-1/2">
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
              <div className="flex flex-col gap-2.5 w-1/2">
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
          `}>
            <div>
              <h3 className="
                text-white text-3xl font-semibold
              ">
                Contato
              </h3>
              <ul className="flex flex-col gap-7.5 pt-5">
                <li className="flex items-center gap-2.5">
                  <div className="
                    bg-green-500 p-3 rounded-tl-[20px]
                     rounded-br-[20px] text-white
                  ">
                    <FiPhone size={28} />
                  </div>
                  <p className="text-white text-xl">
                    <b>Telefone:</b> (12) 3456-7891
                  </p>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="
                    bg-green-500 p-3 rounded-tl-[20px]
                     rounded-br-[20px] text-white
                  ">
                    <MdOutlineMail size={28} />
                  </div>
                  <p className="text-white text-xl">
                    <b>E-mail: </b> evolvere.contatos@gmail.com 
                  </p>
                </li>
              </ul>
            </div>
            <div className="mt-2.5">
              <h3 className="
                text-white text-3xl font-semibold
              ">
                Horários de Atendimento
              </h3>
              <ul className="flex flex-col gap-7.5 pt-5">
                <li className="flex items-start gap-2.5">
                  <div className="
                    bg-green-500 p-3 rounded-tl-[20px]
                     rounded-br-[20px] text-white
                  ">
                    <FaRegClock size={28} />
                  </div>
                  <ul className="flex flex-col ">
                    <li>
                      <p className="text-white text-xl">
                        <b>Segunda à Sexta:</b> das 07h às 20h
                      </p>
                    </li>
                    <li>
                      <p className="text-white text-xl">
                        <b>Sábados:</b> das 09h às 19h
                      </p>
                    </li>
                    <li>
                      <p className="text-white text-xl">
                        <b>Domingos e feriados:</b> fechado
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
