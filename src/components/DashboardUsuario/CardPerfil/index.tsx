import { BiEditAlt } from "react-icons/bi";
import { useTheme } from "../../../context/ThemeContextBase";
import { useUser } from "../../../context/UserContext";

export default function CardPerfil() {

    const { usuario } = useUser();
    const { theme } = useTheme();

    return (
        <button 
            title="Editar perfil"
            className={`
                    ${
                        theme == "light"
                        ? "bg-green-500 hover:bg-green-500/90 duration-300"
                        : "bg-green-600 border border-cyan-100"
                    }
                        w-full text-white font-inter rounded-[10px] cursor-pointer
                `}>
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
                max-[685px]:flex-col
                ">
                    <img 
                        src=""
                        alt="Coloque sua foto"
                        className="
                        w-[150px] rounded-full
                        max-[1230px]:w-[120px]
                        max-[1160px]:w-[100px]
                        "
                        />
                    <div className="flex flex-col items-start gap-1 font-inter">
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
    )
}