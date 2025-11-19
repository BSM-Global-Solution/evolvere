import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";
import { footerDataLinks, footerDataRedesSociais } from "../../data/footerData";

export default function Footer() {
  return (
    <footer className="
    bg-green-600 w-full h-87 px-7.5 pt-5 pb-6
    max-[900px]:h-75
    max-[780px]:h-full
    ">
    <div className="flex max-[1091px]:gap-8 max-[780px]:flex-col">
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
                {footerDataRedesSociais.map((redes, i) => (
                    <li key={i}>
                        <a 
                        href={redes.link} 
                        title={redes.title}
                        className="
                        flex bg-cyan-200 rounded-br-[15px] 
                        rounded-tl-[15px] pr-2 pt-2 pl-[7px] 
                        pb-[7px] btn-hover-cyan-70
                        ">
                          {redes.icon}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
        <div className="w-1/2 font-plus-jakarta-sans max-[1091px]:w-full">
            <ul className="
            flex justify-between 
            max-[601px]:flex-wrap
            max-[601px]:gap-5
            ">
            {footerDataLinks.map((titleLink, i) => (
                <li className="flex flex-col gap-2" key={i}>
                    <h6 className="text-cyan-200 font-bold">{titleLink.title}</h6>
                    <ul className="flex flex-col gap-2 text-gray-100">
                        {titleLink.links.map((link, index) => (
                            <li key={index}>
                                <a 
                                href={link.link}
                                title={link.title}
                                className="flex items-center text-[12px] text-hover-cyan-70">
                                    <IoIosArrowForward />
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </li>
                ))}
            </ul>
        </div>
        </div>
        <div className="pt-3 max-[600px]:pt-7">
            <Link 
            to=""
            title="Clique aqui para nos enviar uma mensagem"
            className="flex justify-end items-center gap-0.5 text-white text-hover-cyan-70">
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