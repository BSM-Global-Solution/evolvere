import { FaPlus } from "react-icons/fa";

export interface CardsIntegrantes {
    img: string;
    figcaption: string;
    icon: React.ReactNode;
    role: string;
    rm: string;
    turma: string;
    github: string;
    linkedin: string;
  }

export const cardIntegrantes: CardsIntegrantes[] = [
    {
      img: "https://avatars.githubusercontent.com/u/146322015?v=4",
      figcaption: "Moisés Barsoti Andrade de Oliveira",
      icon: <FaPlus/>,
      role: "Desenvolvedor Fullstack",
      rm: "565049",
      turma: "1TDSPG",
      github: "https://github.com/moisesBarsoti",
      linkedin: "https://www.linkedin.com/in/mois%C3%A9s-barsoti-468869278/",
    },
    {
      img: "https://avatars.githubusercontent.com/u/202108239?v=4",
      figcaption: "Sofia Siqueira Fontes",
      icon: <FaPlus/>,
      role: "Designer UI/UX",
      rm: "563829",
      turma: "1TDSPG",
      github: "https://github.com/sSofia-s",
      linkedin: "https://www.linkedin.com/in/sofia-siqueira-0111a230b/",
    },
    {
      img: "https://avatars.githubusercontent.com/u/202126798?v=4",
      figcaption: "Felipe Kirschner Modesto",
      icon: <FaPlus/>,
      role: "Desenvolvedor Back-end",
      rm: "561810",
      turma: "1TDSPG",
      github: "https://github.com/FeKiModesto",
      linkedin: "https://www.linkedin.com/in/felipe-modesto-348986366/",
    },
  ];
