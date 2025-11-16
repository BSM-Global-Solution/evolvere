// src/components/Menu.tsx
import { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LinkMenu from "../LinkMenu";

interface MenuProps {
  className?: string;
}

export default function Menu({ className }: MenuProps) {
  const navigate = useNavigate();
  const location = useLocation();

  // Guarda a seção para rolar após navegação
  const pendingScrollRef = useRef<string | null>(null);

  // Função para rolar até a section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      pendingScrollRef.current = null;
    }
  };

  // Quando a rota mudar, se houver pendingScroll, tenta rolar
  useEffect(() => {
    if (pendingScrollRef.current) {
      const t = setTimeout(() => {
        if (pendingScrollRef.current) {
          scrollToSection(pendingScrollRef.current);
        }
      }, 120);

      return () => clearTimeout(t);
    }
  }, [location.pathname]);

  // Função de clique usada pelo menu
  const handleScrollLink = (sectionId: string) => {
    // Se já estamos na home, rola imediatamente
    if (window.location.pathname === "/") {
      const currentSection = document.getElementById(sectionId);

      if (currentSection) {
        const rect = currentSection.getBoundingClientRect();
        const isVisible =
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2;

        if (isVisible) {
          const welcome = document.getElementById("welcome");
          if (welcome) {
            welcome.scrollIntoView({ behavior: "smooth", block: "start" });
          } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
          return;
        }
      }

      scrollToSection(sectionId);
      return;
    }

    // Se não estiver na home → navega e registra o scroll pendente
    pendingScrollRef.current = sectionId;
    navigate("/");
  };

  return (
    <ul className={`flex gap-10 ${className ?? ""}`}>
      <li>
        <LinkMenu 
        to="/" 
        title="Ir para o início"
        onClick={() => {handleScrollLink("/");}}
        >
          Home
        </LinkMenu>
      </li>

      <li>
        <LinkMenu
          to="#sobre"
          title="Ir para a página sobre"
          onClick={() => {handleScrollLink("sobre");}}
        >
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