import type React from "react";
import { FaYoutube } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { RiTwitterXFill } from "react-icons/ri";

interface FooterDataRedesSociaisProps {
    link: string;
    title: string;
    icon: React.ReactNode;
}

export const footerDataRedesSociais:FooterDataRedesSociaisProps[] = [
    {
        link: "https://x.com/Evolvere295579",
        title: "Ver o Twiter do Evolvere",
        icon: 
        <RiTwitterXFill className="
        text-[40px] max-[1046px]:text-[30px] max-[830px]:text-[20px]
        "/> 
    },
    {
        link: "https://www.instagram.com/evolvere_evoluir?igsh=MTkyNHBsNzQ1MmRvZA==",
        title: "Ver o Instagram do Evolvere",
        icon: 
        <GrInstagram className="
        text-[40px] max-[1046px]:text-[30px] max-[830px]:text-[20px]
        "/> 
    },
    {
        link: "https://www.youtube.com/@Evolvere-Channel",
        title: "Ver o Youtube do Evolvere",
        icon: 
        <FaYoutube className="
        text-[40px] max-[1046px]:text-[30px] max-[830px]:text-[20px]
        "/> 
    }
] 

interface FooterDataLinksProps {
    title: string;
    links: {
        name: string;
        title: string;
        link: string;
    }[];
}

export const footerDataLinks: FooterDataLinksProps[] = [
    {
        title: "Planos de Carreira para você",
        links: [
            {name: "Tecnologia e IA", title: "Clique aqui para ver mais", link: "#planos-carreira"},
            {name: "Negócios e Estratégia de Dados", title: "Clique aqui para ver mais", link: "#planos-carreira"},
            {name: "Sustentabilidade e Meio Ambiente", title: "Clique aqui para ver mais", link: "#planos-carreira"},
            {name: "Economia Criativa e Conteúdo", title: "Clique aqui para ver mais", link: "#planos-carreira"}
        ]
    },
    {
        title: "Contato",
        links: [
            {name: "Nosso time", title: "Clique aqui para ver mais", link: "/nossaEquipe"},
            {name: "Entrar em contato", title: "Clique aqui para ver mais", link: "/contato"}
        ]
    },
    {
        title: "Dúvidas",
        links: [
            {name: "Envie uma mensagem", title: "Clique aqui para ver mais", link: "/contato"},
        ]
    },
]