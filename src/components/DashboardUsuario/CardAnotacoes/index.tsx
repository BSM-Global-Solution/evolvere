import { useTheme } from "../../../context/ThemeContextBase"

export default function CardAnotacoes() {

    const { theme } = useTheme();

    return (
        <div className={`
            ${
                theme == "light"
                ? "bg-green-500"
                : "bg-green-600 border-2 border-cyan-400"
            }
            flex flex-col items-center  h-full
            px-5 pt-4 pb-5 rounded-[20px]
        `}>
            <h5 className="text-xl text-white">
                Minhas anotações 
            </h5>
            <div className="w-full flex justify-center items-center grow text-white">
                Não há anotações no momento
            </div>
        </div>
    )
}