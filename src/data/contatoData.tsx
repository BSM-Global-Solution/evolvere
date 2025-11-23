import type React from "react";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { GrInstagram } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa";

  interface CardsGerais {
    icon: React.ReactNode;
    link: string;
    title: string;
    figcaption: string;
    span: string;
    text: string;
    text1: string;
    text2: string;
  }

export const contatoDataGerais: CardsGerais[] = [
    {
      icon: <FiPhone size={24} />,
      link: "",
      title: "",
      figcaption: "Telefone:",
      span: "",
      text: "(12) 3456-7891",
      text1: "",
      text2: "",
    },
    {
      icon: <MdOutlineMail size={24} />,
      link: "",
      title: "",
      figcaption: "E-mail:",
      span: "evolvere.contatos@gmail.com",
      text: "",
      text1: "",
      text2: "",
    },
    {
      icon: <FaRegClock size={24} />,
      link: "",
      title: "",
      figcaption: "Horários de Atendimento",
      span: "",
      text: "Segunda à Sexta: das 07h às 20h",
      text1: "Sábados: das 09h às 19h",
      text2: "Domingos e feriados: fechado",
    },
  ];

  interface RedeSocial {
    icon: React.ReactNode;
    link: string;
    title: string;
  }

export const contatoDataRedesSociais: RedeSocial[] = [
    {
      icon: <RiTwitterXFill size={20} />,
      link: "",
      title: "Clique para visualizar o X (twitter) do Evolvere",
    },
    {
      icon: <GrInstagram size={20} />,
      link: "",
      title: "Clique para visualizar o instagram do Evolvere",
    },
    {
      icon: <FaYoutube size={20} />,
      link: "",
      title: "Clique para visualizar o youtube do Evolvere",
    },
  ];