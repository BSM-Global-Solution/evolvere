import { FaYoutube } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="
    bg-green-600 w-full h-87 px-7.5 pt-5 pb-6
    max-[900px]:h-75
    max-[780px]:h-full
    ">
        <div className="
        flex max-[1091px]:gap-8
        max-[780px]:flex-col
        ">
            <div className="
            w-1/2 flex flex-col justify-center items-center gap-3
            max-[1091px]:w-1/3
            max-[780px]:w-full
            ">
                <span>
                    <img
                     src="https://res.cloudinary.com/dtbgsboo5/image/upload/v1763390416/logo-evolvere_vjbdlq.png" 
                     alt="Logo do Evolvere"
                     className="max-[780px]:w-full"
                    />
                </span>
                <ul className="flex justify-center items-center gap-5 w-full">
                    <li>
                        <a 
                        href="" 
                        title="Ver o Twiter do Evolvere"
                        className="
                        flex bg-cyan-200 rounded-br-[15px] rounded-tl-[15px] pr-2 pt-2 pl-[7px] pb-[7px]
                        "
                        >
                            <RiTwitterXFill className="
                            text-[40px]
                            max-[1046px]:text-[30px] 
                            max-[830px]:text-[20px] 
                            "/>
                        </a>
                    </li>
                    <li>
                        <a 
                        href="" 
                        title="Ver o Twiter do Evolvere"
                        className="flex bg-cyan-200 rounded-br-[15px] rounded-tl-[15px] pr-2 pt-2 pl-[7px] pb-[7px]"
                        >
                            <GrInstagram className="
                            text-[40px]
                            max-[1046px]:text-[30px]
                            max-[830px]:text-[20px]
                            "/>
                        </a>
                    </li>
                    <li>
                        <a 
                        href="" 
                        title="Ver o Twiter do Evolvere"
                        className="flex bg-cyan-200 rounded-br-[15px] rounded-tl-[15px] pr-2 pt-2 pl-[7px] pb-[7px]"
                        >
                            <FaYoutube className="
                            text-[40px]
                            max-[1046px]:text-[30px]
                            max-[830px]:text-[20px]
                            " />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="
            w-1/2 font-plus-jakarta-sans  
            max-[1091px]:w-full
            ">
                <ul className="
                flex justify-between 
                max-[601px]:flex-wrap
                max-[601px]:gap-5
                ">
                    <li className="flex flex-col gap-2">
                        <h6 className="text-cyan-200 font-bold">Planos de Carreira para você</h6>
                        <ul className="flex flex-col gap-2 text-gray-100">
                            <li>
                                <a href="" className="flex items-center text-[12px]">
                                    <IoIosArrowForward />
                                    Tecnologia e IA
                                </a>
                            </li>
                            <li>
                                <a href="" className="flex items-center text-[12px]">
                                    <IoIosArrowForward />
                                    Negócios e Estratégia de Dados
                                </a>
                            </li>
                            <li>
                                <a href="" className="flex items-center text-[12px]">
                                    <IoIosArrowForward />
                                    Sustentabilidade e Meio Ambiente
                                </a>
                            </li>
                            <li>
                                <a href="" className="flex items-center text-[12px]">
                                    <IoIosArrowForward />
                                    Economia Criativa e Conteúdo
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="flex flex-col gap-2">
                        <h6 className="text-cyan-200 font-bold">Contato</h6>
                        <ul className="flex flex-col gap-1 text-gray-100">
                            <li>
                                <a href="" className="flex items-center text-[12px]">
                                    <IoIosArrowForward />
                                    Nosso time
                                </a>
                            </li>
                            <li>
                                <a href="" className="flex items-center text-[12px]">
                                    <IoIosArrowForward />
                                    Entrar em contato
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="flex flex-col gap-2">
                        <h6 className="text-cyan-200 font-bold">Dúvidas</h6>
                        <ul className="flex flex-col gap-1 text-gray-100">
                            <li>
                                <Link to="" className="flex items-center text-[12px]">
                                    <IoIosArrowForward />
                                    Envie uma mensagem
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <div className="pt-3 max-[600px]:pt-7">
            <Link to="" className="flex justify-end items-center gap-0.5 text-white">
                <MdOutlineMail />
                <span>
                    evolvere.contato@gmail.com
                </span>
            </Link>
            <div className="border border-white my-2"></div>
            <p className="text-white">
                Produzido por Grupo BSM - Copyright © 2025. Todos os Direitos Reservados
            </p>
        </div>
    </footer>
  );
}