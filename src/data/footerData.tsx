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
        link: "",
        title: "Ver o Twiter do Evolvere",
        icon: 
        <RiTwitterXFill className="
        text-[40px] max-[1046px]:text-[30px] max-[830px]:text-[20px]
        "/> 
    },
    {
        link: "",
        title: "Ver o Instagram do Evolvere",
        icon: 
        <GrInstagram className="
        text-[40px] max-[1046px]:text-[30px] max-[830px]:text-[20px]
        "/> 
    },
    {
        link: "",
        title: "Ver o Youtube do Evolvere",
        icon: 
        <FaYoutube className="
        text-[40px] max-[1046px]:text-[30px] max-[830px]:text-[20px]
        "/> 
    }
] 