import { useState } from "react";
import { CgCloseO, CgProfile } from "react-icons/cg";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { MdOutlineManageAccounts } from "react-icons/md";

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
        <div className="bg-white flex gap-10 pl-4 pr-7 pt-9.5 w-250 rounded-[20px]">
            <nav>
                <ul className="font-inter flex flex-col gap-7.5">
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
            <div className="font-inter w-full">
                <div className="w-full">
                     <div className="flex justify-end">
                        <button 
                        title="Fechar"
                        className="text-green-500 cursor-pointer hover:text-green-500/40 duration-300">
                            <CgCloseO size={30} />
                        </button>
                     </div>
                     <h1 className="text-4xl text-green-500 font-bold">Perfil</h1>
                     <hr className="border-2 border-green-500" />
                </div>
                <div>
                    
                </div>
            </div>
        </div>
        </dialog>
    )
}