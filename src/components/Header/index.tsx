import { MdOutlineDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";
import LinkMenu from "../LinkMenu";

export default function Header() {
  return (
    <header className="fixed w-full px-17 pt-7 text-white font-inter z-1000">
      <nav className="
      bg-green-400 pl-6 pr-5 py-3 
      border-green-500 border-b-5 border-r-2 border-l-2
      rounded-b-2xl
      ">
        <ul className="flex justify-between items-center font-bold">
          <li>
            <Link to="/" className="text-3xl" title="Ir para o início">Evolvere</Link>
          </li>
          <li>
            <ul className="flex gap-10">
              <li>
                <LinkMenu to="/" title="Ir para o início">Home</LinkMenu>
              </li>
              <li>
                <LinkMenu to="/" title="Ir para a página sobre">Sobre</LinkMenu>
              </li>
              <li>
                <LinkMenu to="/" title="Ir para página de integrantes">Nossa Equipe</LinkMenu>
              </li>
              <li>
                <LinkMenu to="/" title="Ir para a página de mentores">Mentores</LinkMenu>
              </li>
              <li>
                <LinkMenu to="/" title="Ir para a página de contato">Contato</LinkMenu>
              </li>
            </ul>
          </li>
          <li>
            <ul className="flex gap-3 text-xl items-center">
              <li>
                <LinkMenu to="/" title="Clique aqui para entrar na conta">Entrar</LinkMenu>
              </li>
              <li>
                <LinkMenu to="/" title="Clique aqui para criar sua conta"
                  classname="bg-green-500 py-2 px-3 rounded-[5px]"
                >
                  Criar Conta
                </LinkMenu>
              </li>
              <li>
                <button 
                className="cursor-pointer"
                title="Clique para mudar para o modo Dark"
                >
                  <MdOutlineDarkMode size={35}/>
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}