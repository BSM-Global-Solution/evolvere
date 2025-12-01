import { LuSun } from "react-icons/lu";
import TituloConfiguracoes from "../TituloConfiguracoes";
import { MdOutlineDarkMode } from "react-icons/md";

interface ConfigAparenciaProps {
    onClose: () => void
}

export default function ConfigAparencia({onClose}: ConfigAparenciaProps) {
    return (
        <div className="w-full font-inter">
            <TituloConfiguracoes title="Aparência" onClose={onClose} />
            <div>
                <div className="flex flex-col pt-10">
                    <div className="flex gap-2">
                        <h2 className="text-green-500 font-bold text-2xl">Tema claro (padrão)</h2>
                        <LuSun className="text-green-500 text-3xl" />
                    </div>
                    <span>
                        <button 
                        title="Clique aqui para alternar o tema"
                        className="border-b cursor-pointer">
                            Clique aqui
                        </button> para ativar o modo claro
                    </span>
                </div>
                <div className="flex flex-col pt-10 ">
                    <div className="flex gap-2">
                        <h2 className="text-green-500 font-bold text-2xl">Tema escuro</h2>
                        <MdOutlineDarkMode className="text-green-500 text-3xl" />
                    </div>
                    <span>
                        <button 
                        title="Clique aqui para alternar o tema"
                        className="border-b cursor-pointer">
                            Clique aqui
                        </button> para ativar o modo claro
                    </span>
                </div>
            </div>
        </div>
    )
}