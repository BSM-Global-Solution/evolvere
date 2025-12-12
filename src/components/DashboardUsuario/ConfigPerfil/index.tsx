import TituloConfiguracoes from "../TituloConfiguracoes";
import { useUser } from "../../../context/UserContext";
import { useState } from "react";

interface ConfigPerfilProps {
    onClose: () => void
}

export default function ConfigPerfil({onClose}: ConfigPerfilProps) {

    const {usuario, atualizarUsuario} = useUser();
    const [preview, setPreview] = useState(usuario?.foto);

    function handleFoto(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file || !usuario) return;

        const reader = new FileReader();

        reader.onloadend = () => {
            const base64 = reader.result as string;

            setPreview(base64);

            atualizarUsuario({
            ...usuario,
            foto: base64
            });
        };

        reader.readAsDataURL(file);
    }

    return (
        <div className="font-inter w-full">
            <TituloConfiguracoes title="Perfil" onClose={onClose} />
                <div className="
                flex pt-8
                max-[905px]:flex-col
                ">
                    <div className="
                    flex flex-col gap-10 w-1/2 pt-2.5
                    max-[905px]:flex-row
                    max-[905px]:w-full
                    ">
                        <div>
                            <h2 className="text-green-500 font-bold text-2xl mb-2.5">Id do usuário:</h2>
                            <div className="
                            py-2 pl-3.5 w-[45%] bg-tertiary-400 rounded-[10px]
                            border-2 border-green-500
                            max-[905px]:w-full
                            ">
                                <span className="font-inter text-xl">
                                    {usuario?.id}
                                </span>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-green-500 font-bold text-2xl mb-2.5">Nome</h2>
                            <span className="font-inter text-xl">
                                {usuario?.nome}
                            </span>
                        </div>
                        <div>
                            <h2 className="text-green-500 font-bold text-2xl mb-2.5">Data de Nacimento:</h2>
                            <span className="font-inter text-xl">
                                {usuario?.dataDeNascimento}
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center ">
                        <img 
                            src={
                                preview ||
                                "https://res.cloudinary.com/dtbgsboo5/image/upload/v1764299508/icone-simples-do-usuario-3d-isolado_169241-6922_mm1dis.avif"
                            } 
                            alt="Sua Foto"
                            className="
                            w-[280px] h-[280px] rounded-full object-cover 
                            border-2 border-green-500
                            max-[905px]:w-[150px]
                            max-[905px]:h-[150px]
                            "
                        />

                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFoto}
                            className="mt-4 bg-green-300 text-white"
                        />
                    </div>
                </div>
            </div>
    )
}