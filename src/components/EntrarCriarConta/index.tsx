import { MdOutlineDarkMode } from "react-icons/md";
import LinkMenu from "../LinkMenu";

interface EntrarCriarConta {
    className?: string
}

export default function EntrarCriarConta({className}: EntrarCriarConta) {
  return (
    <ul
      className={`
        flex gap-3 text-xl
        ${className ?? ""}
        `}
    >
      <li>
        <LinkMenu to="/" title="Clique aqui para entrar na conta"
        classname="text-hover-cyan-70"
        >
          Entrar
        </LinkMenu>
      </li>
      <li>
        <LinkMenu
          to="/"
          title="Clique aqui para criar sua conta"
          classname="
          bg-green-500 py-2 px-3 rounded-[5px]
            btn-hover-green-580/70
           "
        >
          Criar Conta
        </LinkMenu>
      </li>
      <li>
        <button
          className="cursor-pointer max-[862px]: mt-3 text-hover-cyan-70"
          title="Clique para mudar para o modo Dark"
        >
          <MdOutlineDarkMode size={35} />
        </button>
      </li>
    </ul>
  );
}
