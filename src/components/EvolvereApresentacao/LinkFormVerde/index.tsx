import { Link } from "react-router-dom";

type PositionLink = "start" | "center" | "end"

interface LinkVerdeProps {
    link: string;
    linkTitle: string;
    linkPosition: PositionLink;
    linkText: string;
    pxDivLink?: number;
}

export default function LinkFormVerde({link, linkTitle, linkPosition, linkText, pxDivLink}: LinkVerdeProps) {
    return (
        <div className={`flex justify-${linkPosition} max-w-[610px] mt-2.5 px-${pxDivLink}`}>
            <Link 
            to={link}
            title={linkTitle}
            className="
            font-inter font-semibold text-tertiary-700
            hover:text-hover-green-580
            max-[951px]:text-lg
            max-[884px]:text-[16px]
            "
            >
                {linkText}
            </Link>
        </div>
    )
}