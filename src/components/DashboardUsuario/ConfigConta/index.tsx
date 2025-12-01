import { useUser } from "../../../context/UserContext";
import TituloConfiguracoes from "../TituloConfiguracoes";

interface ConfigContaProps {
    onClose: () => void
}

export default function ConfigConta({onClose}: ConfigContaProps) {

    const { usuario } = useUser()

    return (
        <div className="w-full font-inter">
            <TituloConfiguracoes title="Conta" onClose={onClose} />
                <h2 className="text-green-500 font-bold text-2xl mb-2.5 pt-10">E-mail:</h2>
                <span className="font-inter text-xl">
                    {usuario?.email}
                </span>
                <h2 className="text-green-500 font-bold text-2xl mb-2.5 pt-10">Excluir conta:</h2>
                <p>Esta ação é permanente e todos os seus dados, conversas e preferências serão removidos de forma definitiva.</p>
                <button 
                title="Excluir conta"
                className="
                bg-red-100/10 text-red-100 shadow-[2px_4px_10px_#ff0000]
                 p-2.5 rounded-[10px] font-bold cursor-pointer hover:bg-red-100/20 duration-300
                 mt-10
                 ">
                    Excluir conta
                </button>
        </div>
    )
}