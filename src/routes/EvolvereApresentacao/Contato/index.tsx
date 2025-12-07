import { IoIosArrowDropright } from "react-icons/io";
import { useTheme } from "../../../context/ThemeContextBase";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { FaRegClock, FaRegStar, FaYoutube } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { GrInstagram } from "react-icons/gr";
import { Link } from "react-router-dom";
import TituloHeader from "../../../components/EvolvereApresentacao/TituloHeader";
import { useState } from "react";
import { stars } from "../../../data/contatoData";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Contato() {

  const { theme } = useTheme();
  const [ active, setActive ] = useState(0);
  const [ratingLabel, setRatingLabel] = useState("");

  const sMensagem = z.object({
    nome: z
    .string()
    .min(2, "O nome deve ter no mínimo 2 caracteres."),
    email: z.email({
      message: "E-mail deve conter '@' e '.', insira um e-mail válido.",
    }),
    assunto: z
    .string("Digite o assunto da mensagem")
    .min(2, "Deve ter no mínimo 2 digitos"),
    mensagem: z
    .string("Digite a sua mensagem")
    .min(5, "Digite no mínimo 5 caracteres")
  })

  type sMensagem = z.infer<typeof sMensagem>

  const { register, handleSubmit, formState: { errors } } = useForm<sMensagem>({
    resolver: zodResolver(sMensagem)
  })

  const onSubmitMensagem = async (data: sMensagem) => {
    console.log(data)
  }

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
          <form 
            onSubmit={handleSubmit(onSubmitMensagem)}
            className="w-3/2 max-[1109px]:w-2/2 max-[1062px]:w-2/2
          ">
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
                  {...register("nome")}
                  className={`
                    ${
                      theme == "light"
                      ? "placeholder:text-gray-300"
                      : "placeholder:text-gray-200 text-white"
                    }
                    p-2.5 rounded-[10px] outline-none border border-gray-300
                    `}
                />
                {errors.nome && (
                  <span className="text-red-500">
                    {errors.nome.message}
                  </span>
                )}
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
                  {...register("email")}
                  className={`
                    ${
                      theme == "light"
                      ? "placeholder:text-gray-300"
                      : "placeholder:text-gray-200 text-white"
                    }
                    p-2.5 rounded-[10px] outline-none border border-gray-300
                    `}
                />
                {
                  errors.email && (
                    <span className="text-red-500">
                      {errors.email.message}
                    </span>
                  )
                }
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
                  {...register("assunto")}
                  className={`
                    ${
                      theme == "light"
                      ? "placeholder:text-gray-300"
                      : "placeholder:text-gray-200 text-white"
                    }
                    p-2.5 rounded-[10px] outline-none border border-gray-300
                    `}
                />
                {
                  errors.assunto && (
                    <span className="text-red-500">
                      {errors.assunto.message}
                    </span>
                  )
                }
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
                  {...register("mensagem")}
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
                {
                  errors.mensagem && (
                    <span className="text-red-500">
                      {errors.mensagem.message}
                    </span>
                  )
                }
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
        min-h-screen pt-14 px-36.5 pb-17.5
        max-[1250px]:px-20
        max-[1162px]:px-10
        max-[681px]:px-5
        max-[641px]:px-2
      `}>
        <header className="text-center">
          <h4 className={`
            ${
              theme == "light"
              ? "text-green-500"
              : "text-tertiary-200"
            }
             font-bold text-6xl
             max-[1082px]:text-5xl
             max-[881px]:text-4xl
             max-[620px]:text-3xl
             max-[525px]:text-2xl
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
              max-[1082px]:text-2xl
              max-[881px]:text-xl
              max-[620px]:text-[16px]
              max-[525px]:text-[14px]
              max-[400px]:text-[12px]
          `}>
            Sua opinião é essencial para melhorarmos cada vez mais. <br />
            Conte pra gente como tem sido sua experiência com a Evolvere!
          </p>
        </header>
        <form className="flex flex-col items-center">
          <ul className="flex justify-between gap-10 py-12.5">
            {stars.map((star) => (
              <li key={star.value}>
                <FaRegStar
                  title={star.label}
                  onClick={() => {
                    setActive(star.value);
                    setRatingLabel(star.label);
                  }}
                  className={`
                    ${
                      theme == "light"
                      ? "text-green-600"
                      : "text-white"
                    }
                    text-[85px] cursor-pointer duration-200 
                    ${active >= star.value ? "text-yellow-300" : ""}
                    hover:text-yellow-300
                    max-[881px]:text-[60px]
                    max-[620px]:text-[40px]
                    max-[525px]:text-[30px]
                  `}
                />
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-7.5 pt-5">
            <h5 className={`
              ${
                theme == "light"
                ? "text-green-500"
                : "text-tertiary-200"
              }
              text-center text-4xl
              max-[881px]:text-3xl
              max-[620px]:text-2xl
              max-[525px]:text-xl
            `}>
              <span className="font-semibold">Gostaria de deixar um comentário? </span> <br />
              <span className="
              font-light text-3xl
              max-[881px]:text-2xl
              max-[620px]:text-xl
              max-[525px]:text-[16px]
              ">
                (Caso não queira, deixe este espaço em branco).
              </span> 
            </h5>
            <textarea 
              placeholder="Digite sua mensagem"
              className={`
              ${
                theme == "light"
                ? ""
                : "text-white"
              }  
              placeholder:text-gray-200
              border border-gray-200 resize-none w-full
              outline-none px-4 py-3 rounded-[10px] min-h-37.5
              `}
            ></textarea>
            <div className="flex justify-center">
              <button 
                title="Enviar Feedback"
                className={`
                  ${
                    theme == "light"
                    ? "bg-green-400 hover:bg-green-400/80"
                    : "bg-green-600 hover:bg-green-600/60"
                  }
                  flex items-center gap-2 text-white px-2.5 py-3
                  text-xl rounded-[15px] mt-[23px] duration-300
                  cursor-pointer font-semibold
                  max-[525px]:text-[16px]
                `}>
                  Enviar feedback
                  <span>
                    <IoIosArrowDropright size={30} />
                  </span>
                </button>
            </div>
          </div>
        </form>
      </section>
    </section>
  );
}
