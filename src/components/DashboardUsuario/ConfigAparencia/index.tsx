import { LuSun } from "react-icons/lu";
import TituloConfiguracoes from "../TituloConfiguracoes";
import { MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "../../../context/ThemeContextBase";

interface ConfigAparenciaProps {
    onClose: () => void
}

export default function ConfigAparencia({onClose}: ConfigAparenciaProps) {

    const { theme, toggleTheme } = useTheme();

    return (
        <div className="w-full font-inter duration-200">
            <TituloConfiguracoes title="Aparência" onClose={onClose} />
            <div>
                <div className="flex flex-col pt-10">
                    <div className="flex gap-2">
                        <h2 className="text-green-500 font-bold text-2xl">
                            {
                                theme == "light"
                                ? "Tema claro (padrão)"
                                : "Tema escuro (padrão)"
                            }
                            
                        </h2>
                        {
                            theme == "light" 
                            ? <LuSun className="text-green-500 text-3xl" />
                            : <MdOutlineDarkMode className="text-green-500 text-3xl" />
                        }
                        
                    </div>
                    <span>
                        <button 
                        onClick={toggleTheme}
                        title="Clique aqui para alternar o tema"
                        className="border-b cursor-pointer">
                            Clique aqui 
                        </button> 
                        {
                            theme == "light"
                            ? " para ativar o modo escuro"
                            : " para ativar o modo claro"
                        }
                        
                    </span>
                </div>
            </div>
        </div>
    )
}