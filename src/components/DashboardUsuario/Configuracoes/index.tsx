import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { MdOutlineManageAccounts } from "react-icons/md";
import ConfigPerfil from "../ConfigPerfil";
import ConfigConta from "../ConfigConta";
import ConfigAparencia from "../ConfigAparencia";

interface ConfiguracoesProps {
    open: boolean
    onClose: () => void
}

export default function Configuracoes({open, onClose}: ConfiguracoesProps) {

    const [active, setActive] = useState<"perfil" | "conta" | "aparencia">("perfil");
    if (!open) return null;

    return (
        <dialog open className="
            inset-0 w-full h-full bg-black/40
            flex justify-center items-center
        ">
        <div className="
        bg-white flex gap-10 pl-4 pr-7 pt-9.5 pb-31 w-250 min-h-150 rounded-[20px]
        max-[821px]:flex-col
        max-[821px]:w-150
        max-[560px]:min-h-screen
        ">
            <nav>
                <ul className="
                font-inter flex flex-col gap-7.5
                max-[821px]:flex-row
                max-[821px]:flex-wrap
                max-[580px]:items-center
                ">
                    <li>
                        <button 
                        title="Ver perfil"
                        onClick={() => setActive("perfil")}
                        className={`
                            ${active == "perfil" ? "bg-tertiary-400" : ""}
                            flex items-center gap-4 text-2xl
                            w-63 py-1.5 pl-3.5
                            rounded-[10px] cursor-pointer
                            btn-hover-green-580
                            `}>
                            <span>
                                <CgProfile size={40} />
                            </span>
                            Perfil
                        </button>
                    </li>
                    <li>
                        <button 
                        title="Ver perfil"
                        onClick={() => setActive("conta")}
                        className={`
                            ${active == "conta" ? "bg-tertiary-400" : ""}
                            flex items-center gap-4 text-2xl
                            w-63 py-1.5 pl-3.5
                            rounded-[10px] cursor-pointer
                            btn-hover-green-580
                            `}>
                            <span>
                                <MdOutlineManageAccounts size={40} />
                            </span>
                            Conta
                        </button>
                    </li>
                    <li>
                        <button 
                        title="Ver perfil"
                        onClick={() => setActive("aparencia")}
                        className={`
                            ${active == "aparencia" ? "bg-tertiary-400" : ""}
                            flex items-center gap-4 text-2xl
                            w-63 py-1.5 pl-3.5
                            rounded-[10px] cursor-pointer
                            btn-hover-green-580
                            `}>
                            <span>
                                <HiOutlinePaintBrush size={40} />
                            </span>
                            Aparência
                        </button>
                    </li>
                </ul>
            </nav>
        {
            active === "perfil" ? <ConfigPerfil onClose={onClose} /> : ""
        }
        {
            active === "conta" ? <ConfigConta onClose={onClose} /> : ""
        }
        {
            active === "aparencia" ? <ConfigAparencia onClose={onClose} /> : ""
        }
        </div>
        </dialog>
    )
}