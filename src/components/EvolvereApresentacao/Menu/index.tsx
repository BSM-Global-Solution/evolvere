// src/components/Menu.tsx
import { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LinkMenu from "../LinkMenu";
import { menuData } from "../../../data/menuData";

interface MenuProps {
  className?: string;
}

export default function Menu({ className }: MenuProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const pendingScrollRef = useRef<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      pendingScrollRef.current = null;
    }
  };

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

  const handleScrollLink = (sectionId: string) => {
    if (window.location.pathname === "/") {
      scrollToSection(sectionId);
      return;
    }
    pendingScrollRef.current = sectionId;
    navigate("/");
  };

  return (
    <ul className={`flex gap-10 ${className ?? ""}`}>
      {menuData.map((m) => (
        <li key={m.children}>
          <LinkMenu
            to={m.link}
            title={m.title}
            classname="text-hover-cyan-70"
            onClick={(e) => {
              if (m.handleScrollLink) {
                e.preventDefault();
                handleScrollLink(m.handleScrollLink);
              }
            }}
          >
            {m.children}
          </LinkMenu>
        </li>
      ))}
    </ul>
  );
}