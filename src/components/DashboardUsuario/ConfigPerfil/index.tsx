import TituloConfiguracoes from "../TituloConfiguracoes";
import { useUser } from "../../../context/UserContext";

interface ConfigPerfilProps {
    onClose: () => void
}

export default function ConfigPerfil({onClose}: ConfigPerfilProps) {

    const {usuario} = useUser();

    return (
        <div className="font-inter w-full">
            <TituloConfiguracoes title="Perfil" onClose={onClose} />
                <div className="flex pt-8">
                    <div className="flex flex-col gap-10 w-1/2 pt-2.5">
                        <div>
                            <h2 className="text-green-500 font-bold text-2xl mb-2.5">Id do usuário:</h2>
                            <div className="
                            py-2 pl-3.5 w-[45%] bg-tertiary-400 rounded-[10px]
                            border-2 border-green-500
                            ">
                                <span className="font-inter text-xl">
                                    {usuario?.id}
                                </span>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-green-500 font-bold text-2xl mb-2.5">Nome</h2>
                            <span className="font-inter text-xl">
                                Usuário: {usuario?.nome}
                            </span>
                        </div>
                        <div>
                            <h2 className="text-green-500 font-bold text-2xl mb-2.5">Data de Nacimento:</h2>
                            <span className="font-inter text-xl">
                                {usuario?.dataDeNascimento}
                            </span>
                        </div>
                    </div>
                    <div>
                        <img 
                            src="https://res.cloudinary.com/dtbgsboo5/image/upload/v1764299508/icone-simples-do-usuario-3d-isolado_169241-6922_mm1dis.avif" 
                            alt=""
                            className="w-[280px] rounded-full border-2 border-green-500"
                        />
                    </div>
                </div>
            </div>
    )
}