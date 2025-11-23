import { MdMenu, MdMenuOpen } from "react-icons/md";
import { HeaderUsuarioData } from "../../../data/headerUsuarioData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function HeaderUsuario() {

    const [open, setOpen] = useState<boolean>(false);

    return (
        <header className={`
        ${
            open ? "w-[300px]" : "w-[90px]"
        }
         h-full bg-green-600
         pl-6 pr-5 pt-5 pb-7.5
         duration-300 fixed
         `}>
            <nav className="flex flex-col min-h-full">
                <button 
                onClick={() => setOpen(!open)}
                title={open ? "Fechar o menu" : "Abrir o menu"}
                className={`
                ${
                    open ? "justify-end" : "justify-center pb-2"
                }
                flex  text-white cursor-pointer
                hover:text-green-200 duration-300
                `}>
                    {
                        open
                        ? <MdMenuOpen size={30} />
                        : <MdMenu size={30} />
                    }
                </button>
                <span>
                    {
                        open
                        ? <img 
                            src="https://res.cloudinary.com/dtbgsboo5/image/upload/v1763892728/logo-evolvere-sem-texto_vagw9g.png" 
                            alt="Logo do Evolvere" 
                        />
                        : <img 
                            src="https://res.cloudinary.com/dtbgsboo5/image/upload/v1763900643/logo-evolvere-e_bapody.png" 
                            alt="Logo do Evolvere" 
                        />
                    }

                </span>
                <ul className="flex flex-col justify-between grow pt-20">
                    <li>
                        <ul className={`
                        ${ open ? "" : "items-center"}
                        flex flex-col gap-1.5
                        `}>
                            {HeaderUsuarioData.slice(0, 5).map((menu, i) => (
                                <li key={i} className="items-center justify-center">
                                    <Link 
                                     to={menu.link}
                                     title={menu.title}
                                     className={`
                                        ${ open ? "" : "px-2" }
                                        flex items-center gap-2
                                        text-white font-light
                                        text-2xl font-inter py-2
                                        rounded-[10px]
                                        hover:bg-green-500/50 duration-300
                                        hover:text-green-200
                                     `}
                                    >
                                    {menu.icon}
                                    {open && <span>{menu.label}</span>}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li>
                        <ul className="flex justify-end flex-col h-full w-full">
                         {HeaderUsuarioData.slice(5, 6).map((menu, i) => (
                                <li key={i}>
                                    <button 
                                    title={menu.title}
                                    className={`
                                        ${ open ? "" : "justify-center"}
                                        w-full cursor-pointer h-full
                                        flex items-center gap-2
                                        text-white font-light
                                        text-2xl font-inter py-2
                                        rounded-[10px]
                                        hover:bg-green-500/50 duration-300
                                        hover:text-green-200
                                     `}
                                    >
                                    {menu.icon}
                                    {open && <span>{menu.label}</span>}
                                    </button>
                                </li>
                         ))}
                        {HeaderUsuarioData.slice(6, 7).map((menu, i) => (
                            <li key={i} className="items-center justify-center">
                                <Link 
                                    to={menu.link}
                                    title={menu.title}
                                    className={`
                                    ${ open ? "" : "px-2" }
                                    flex items-center gap-2
                                    text-white font-light
                                    text-2xl font-inter py-2
                                    rounded-[10px]
                                    hover:bg-green-500/50 duration-300
                                    hover:text-green-200
                                    `}
                                >
                                {menu.icon}
                                {open && <span>{menu.label}</span>}
                                </Link>
                            </li>
                         ))}
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    )
}