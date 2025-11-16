import { MdMenuOpen } from "react-icons/md";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { useEffect, useState } from "react";
import Menu from "../Menu";
import EntrarCriarConta from "../EntrarCriarConta";

export default function Header() {
  
  const [open, setOpen] = useState(false)

    useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 862) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <header className={`
    fixed w-full px-17 pt-7 text-white font-inter z-1000
    max-[1180px]:px-10 
    max-[975px]:px-5 
    ${
      open ? 
      "max-[862px]:h-full max-[862px]:px-0 max-[862px]:pt-0 max-[862px]:w-1/2 "
      : ""
    }  
    `}>
      <nav className="
      bg-green-400 pl-6 pr-5 py-3 
      border-green-500 border-b-5 border-r-2 border-l-2
      rounded-b-2xl
      max-[862px]:h-full
      ">
        <ul className="flex justify-between items-center font-bold">
          <li>
            <Link to="/" title="Ir para o início"
             className="
             text-3xl max-[1091px]:text-2xl"
             >
              Evolvere
            </Link>
          </li>
          <li>
            <Menu className="max-[862px]:hidden" />
          </li>
          <li>
            <EntrarCriarConta className="max-[862px]:hidden items-center" />
          </li>

          <li className="hidden max-[862px]:block">
            <button onClick={() => setOpen(!open)}>
              {open ? <MdMenuOpen size={25} /> : <TiThMenu size={20} />}
            </button>
          </li>
        </ul>

        {/* Opções de menu do mobile */}
        <Menu className={`${open ? "max-[862px]:flex-col mt-10" : "hidden min-[863px]:hidden"}`}/>

        {/* Entrar e Criar conta do mobile */}
        <EntrarCriarConta className={`${open ? "max-[862px]:flex-col mt-10" : "hidden min-[863px]:hidden"}`} />
      </nav>
    </header>
  );
}