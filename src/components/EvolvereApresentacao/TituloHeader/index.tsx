import { useTheme } from "../../../context/ThemeContextBase"

interface TituloHeaderProps {
    title: string
    subTitle: string
}

export default function TituloHeader({title, subTitle}: TituloHeaderProps) {

    const { theme } = useTheme();

    return (
        <header className="
            flex flex-col items-center gap-3
            py-10 pt-[140px] font-inter
        ">
            <h1 className={`
            ${
            theme == "light"
            ? "text-green-500"
            : "text-tertiary-200"
            }
            text-6xl font-bold 
            max-[900px]:text-5xl
            max-[600px]:text-center
            `}>
                {title}
            </h1>
            <p className={`
            ${
            theme == "light"
            ? "text-green-500"
            : "text-tertiary-200"
            }
            text-4xl 
            2xl:text-7xl 2xl:py-6
            max-[1250px]:text-3xl
            max-[900px]:text-xl
            max-[614px]:text-xl
            text-center
            `}>
                {subTitle}
            </p>
      </header>
    )
}