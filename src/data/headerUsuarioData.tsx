import { BsPeople } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { GoHome } from "react-icons/go";
import { IoMdLogOut } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { LuPlaneTakeoff } from "react-icons/lu";
import { RiRobot2Line, RiWechatLine } from "react-icons/ri";

export const HeaderUsuarioData = [
    {icon: <GoHome size={30} />, label: "Home", link: "/dashboardUsuario", title: "Ir para o Home"},
    {icon: <RiRobot2Line size={30} />, label: "Mentor.IA", link: "/mentorIA", title: "Ir para o Mentor.IA"},
    {icon: <CiEdit size={30} />, label: "Anotações", link: "/anotacoes", title: "Ir para Anotações"},
    {icon: <LuPlaneTakeoff size={30} />, label: "Planos de Carreira", link: "/planosDeCarreira", title: "Ir para os Planos de Carreira"},
    {icon: <RiWechatLine size={30} />, label: "Chats", link: "/chats", title: "Ir para os Chats"},
    {icon: <BsPeople size={30} />, label: "Mentores", link: "/mentores", title: "Ir para os Mentores"},
    {icon: <IoMdLogOut size={30} />, label: "Sair", link: "/", title: "Sair"},
    {icon: <IoSettingsOutline size={30} />, label: "Configurações", link: "/mentores", title: "Abrir as configurações"},
]