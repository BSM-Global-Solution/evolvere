import LinkMenu from "../LinkMenu";

interface MenuProps {
    className?: string
}

export default function Menu({className}: MenuProps) {
  return (
    <ul
      className={`
        flex gap-10
        ${className ?? ""}
    `}
        >
      <li>
        <LinkMenu to="/" title="Ir para o início">
          Home
        </LinkMenu>
      </li>
      <li>
        <LinkMenu to="/" title="Ir para a página sobre">
          Sobre
        </LinkMenu>
      </li>
      <li>
        <LinkMenu to="/" title="Ir para página de integrantes">
          Nossa Equipe
        </LinkMenu>
      </li>
      <li>
        <LinkMenu to="/" title="Ir para a página de mentores">
          Mentores
        </LinkMenu>
      </li>
      <li>
        <LinkMenu to="/" title="Ir para a página de contato">
          Contato
        </LinkMenu>
      </li>
    </ul>
  );
}
