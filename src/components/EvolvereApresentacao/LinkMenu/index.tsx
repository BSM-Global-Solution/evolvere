import { Link } from "react-router-dom"

interface LinkMenuProps {
    to: string
    title: string
    children: React.ReactNode
    classname?: string
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}
export default function LinkMenu({to, title, children, classname, onClick}: LinkMenuProps) {
    return (
        <Link 
        to={to}
        onClick={onClick}
        title={title}
        className={` 
            text-xl 
            max-[1091px]:text-[16px]
            max-[975px]:text-[14px]
            ${classname ?? ""}`}
        >
            {children}
        </Link>
    )
}