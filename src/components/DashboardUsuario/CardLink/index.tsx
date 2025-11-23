import { IoIosArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import { useTheme } from "../../../context/ThemeContextBase";

interface CardLinkProps {
    label: string
    labelNegrito: string
}

export default function CardLink({label, labelNegrito}: CardLinkProps) {

    const { theme } = useTheme();

    return (
        <Link
            to=""
            title="Conversar com Mentor.IA"
            className={`
            ${
                theme == "light"
                ? "bg-green-500"
                : "bg-green-700"
            }
            text-white w-full h-full px-4 py-5
            flex flex-col items-center gap-2
            border-x-2 border-b-5 border-green-600
            rounded-[20px] hover:bg-green-500/90 duration-300
        `}
        >
            <h3 className="text-2xl text-center font-inter font-light">
                {label} 
                <b> {labelNegrito}</b>
            </h3>
            <span className="bg-green-600 p-2 rounded-[10px]">
                <IoIosArrowDropright size={30} />
            </span>
        </Link>
    )
}