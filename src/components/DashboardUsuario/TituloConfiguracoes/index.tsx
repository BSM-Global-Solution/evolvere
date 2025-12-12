import { CgCloseO } from "react-icons/cg"

interface TituloConfiguracoesProps {
    title: string
    onClose: () => void
}

export default function TituloConfiguracoes({onClose, title}: TituloConfiguracoesProps) {
    return (
        <div className="w-full">
            <div className="flex justify-end">
            <button 
            title="Fechar"
            onClick={onClose}
            className="text-green-500 cursor-pointer hover:text-green-500/40 duration-300">
                <CgCloseO size={30} />
            </button>
            </div>
            <h1 className="text-4xl text-green-500 font-bold">{title}</h1>
            <hr className="border-2 border-green-500" />
        </div>
    )
}