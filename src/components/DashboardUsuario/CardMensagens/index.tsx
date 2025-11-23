import { Link } from "react-router-dom";

export default function CardMensagens() {
    return (
        <div className="
            flex flex-col 
            w-full h-[219px] px-5 pt-2 pb-3
            bg-green-500 text-white rounded-[10px]
            ">
            <div className="flex justify-between items-center ">
                <h4 className="font-semibold text-xl">
                    Minhas Conversas
                </h4>
                <Link 
                    to="chats"
                    title="Ver meus Chats"
                    className="
                    bg-green-400 p-3 rounded-[10px] 
                    font-semibold btn-hover-green-460
                    "
                >
                    Ver todas
                </Link>
            </div>
                <ul className="flex flex-col h-full px-2">
                    <li>
                        <ul className="
                        flex justify-between pr-[29px] pl-[31px] mt-5 py-1.5
                        bg-cyan-300 rounded-[10px] 
                        ">
                            <li>
                                Contato
                            </li>
                            <li>
                                Mensagem
                            </li>
                            <li>
                                Data
                            </li>
                        </ul>
                    </li>
                    <li className="flex justify-center items-center grow">
                        Não há conversas no momento
                    </li>
                </ul>
            </div>
    )
}