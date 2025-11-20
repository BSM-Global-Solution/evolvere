import { MdOutlineDarkMode } from "react-icons/md";
import LinkMenu from "../LinkMenu";
import { useTheme } from "../../context/ThemeContextBase";
import { FaSun } from "react-icons/fa";

interface EntrarCriarConta {
    className?: string
}

export default function EntrarCriarConta({className}: EntrarCriarConta) {

  const {theme, toggleTheme} = useTheme();

  return (
    <ul
      className={`
        flex gap-3 text-xl
        ${className ?? ""}
        `}
    >
      <li>
        <LinkMenu to="/entrarConta" title="Clique aqui para entrar na conta"
        classname="text-hover-cyan-70"
        >
          Entrar
        </LinkMenu>
      </li>
      <li>
        <LinkMenu
          to="/criarConta"
          title="Clique aqui para criar sua conta"
          classname="
          bg-green-500 py-2 px-3 rounded-[5px]
            btn-hover-green-580-70
           "
        >
          Criar Conta
        </LinkMenu>
      </li>
      <li>
        <button
          onClick={toggleTheme}
          className="cursor-pointer max-[862px]: mt-3 text-hover-cyan-70 outline-none"
          title={
            theme == "light" 
            ? "Clique para mudar para o modo Dark" 
            : "Clique para mudar para o modo Light"
          }
        >
          {theme === "light" ? <MdOutlineDarkMode size={35} /> : <FaSun size={35} /> }
        </button>
      </li>
    </ul>
  );
}
