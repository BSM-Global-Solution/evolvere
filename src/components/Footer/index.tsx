import { FaYoutube } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-green-600 w-full h-87 px-7.5 pt-5 pb-6">
        <div className="flex">
            <div className="w-1/2 flex flex-col justify-center items-center gap-3">
                <span>
                    <img
                     src="https://res.cloudinary.com/dtbgsboo5/image/upload/v1763390416/logo-evolvere_vjbdlq.png" 
                     alt="Logo do Evolvere"
                    />
                </span>
                <ul className="flex justify-center items-center gap-5 w-full">
                    <li>
                        <a 
                        href="" 
                        title="Ver o Twiter do Evolvere"
                        className="flex bg-cyan-200 rounded-br-[15px] rounded-tl-[15px] pr-2 pt-2 pl-[7px] pb-[7px]"
                        >
                            <RiTwitterXFill className="text-[40px]"/>
                        </a>
                    </li>
                    <li>
                        <a 
                        href="" 
                        title="Ver o Twiter do Evolvere"
                        className="flex bg-cyan-200 rounded-br-[15px] rounded-tl-[15px] pr-2 pt-2 pl-[7px] pb-[7px]"
                        >
                            <GrInstagram className="text-[40px]"/>
                        </a>
                    </li>
                    <li>
                        <a 
                        href="" 
                        title="Ver o Twiter do Evolvere"
                        className="flex bg-cyan-200 rounded-br-[15px] rounded-tl-[15px] pr-2 pt-2 pl-[7px] pb-[7px]"
                        >
                            <FaYoutube className="text-[40px]"/>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="w-1/2 font-plus-jakarta-sans">
                <ul className="flex justify-between">
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
        <div className="pt-3">
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