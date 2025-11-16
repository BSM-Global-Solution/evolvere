import { Link } from "react-router-dom"

interface LinkMenuProps {
    to: string
    title: string
    children: React.ReactNode
    classname?: string
}
export default function LinkMenu({to, title, children, classname}: LinkMenuProps) {
    return (
        <Link 
        to={to}
        title={title}
        className={` text-xl ${classname ?? ""}`}
        >
            {children}
        </Link>
    )
}