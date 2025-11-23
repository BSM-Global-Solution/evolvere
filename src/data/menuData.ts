interface MenuItem {
  link: string;
  title: string;
  handleScrollLink?: string;
  children: string;
}

export const menuData: MenuItem[] = [
  {link: "/", title: "Ir para o início", handleScrollLink: "/", children: "Home"},
  {link: "#sobre", title: "Ir para a página sobre", handleScrollLink: "sobre", children: "Sobre"},
  {link: "nossaEquipe", title: "Ir para página de integrantes", children: "Nossa Equipe"},
  {link: "mentores", title: "Ir para página de mentores", children: "Mentores"},
  {link: "contato", title: "Ir para a página de contato", children: "Contato"},
];