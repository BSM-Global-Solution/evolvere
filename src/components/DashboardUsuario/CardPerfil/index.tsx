import { BiEditAlt } from "react-icons/bi";
import { useTheme } from "../../../context/ThemeContextBase";
import { useUser } from "../../../context/UserContext";
import { useState } from "react";
import Configuracoes from "../Configuracoes";

export default function CardPerfil() {

    const { usuario } = useUser();
    const { theme } = useTheme();
    const [configOpen, setConfigOpen] = useState(false);

    return (
        <div>
            <button
                onClick={() => setConfigOpen(prev => !prev)}
                title="Editar perfil"
                className={`
                    ${
                        theme == "light"
                        ? "bg-green-500 hover:bg-green-500/90 duration-300"
                        : "bg-green-600 border border-cyan-100 hover:bg-green-700 duration-300"
                    }
                        w-full text-white font-inter rounded-[10px] cursor-pointer
                `}
                >
                    <div className="flex justify-between items-center pl-5 pr-6 pt-4 pb-5">
                        <h2 className="
                        text-xl
                        ">
                            Meu perfil
                        </h2>
                        <BiEditAlt size={30} />
                    </div>
                    <figure className="
                    flex items-center gap-3 pl-5 pb-5
                    max-[500px]:flex-col
                    max-[500px]:items-start
                    ">
                        <div className="
                        max-[500px]:flex
                        max-[500px]:justify-center
                        max-[500px]:w-full
                        ">
                            <img 
                                src={
                                    usuario?.foto ||
                                    "https://res.cloudinary.com/dtbgsboo5/image/upload/v1764299508/icone-simples-do-usuario-3d-isolado_169241-6922_mm1dis.avif"
                                }
                                alt="Coloque sua foto"
                                className="
                                w-[150px] h-[150px] object-cover rounded-full
                                max-[1230px]:w-[120px] max-[1230px]:h-[120px]
                                max-[1160px]:w-[100px] max-[1160px]:h-[100px]
                                max-[550px]:w-[110px] max-[550px]:h-[110px]
                                "
                                />
                        </div>
                        <div className="
                        flex flex-col items-start gap-1 font-inter
                        ">
                            <figcaption className="
                            text-xl font-semibold
                            max-[1350px]:text-lg
                            max-[1307px]:text-[16px]
                            ">
                                Usuário: {usuario?.nome}
                            </figcaption>
                            <figcaption className="
                            text-xl font-semibold
                            max-[1350px]:text-lg
                            max-[1307px]:text-[16px]
                            ">
                                ID: {usuario?.id}
                            </figcaption>
                            <figcaption className="
                            text-xl font-semibold
                            max-[1350px]:text-lg
                            max-[1307px]:text-[16px]
                            ">
                                Email: {usuario?.email}
                            </figcaption>
                        </div>
                    </figure>
                </button>
                <Configuracoes open={configOpen} onClose={() => setConfigOpen(false)} />
            </div>
    )
}