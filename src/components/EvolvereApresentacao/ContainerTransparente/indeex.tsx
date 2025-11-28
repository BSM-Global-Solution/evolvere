import type React from "react";

interface ContainerTransparenteProps {
    width: number
    children: React.ReactNode
    className?: string
}

export default function ContainerTransparente({children, width, className}: ContainerTransparenteProps) {
    return (
        <>
            <div className={`
                w-${width} flex flex-col items-center pt-12.5 pb-12
                bg-white/15 text-white border-2
                border-white rounded-tl-[40px] rounded-br-[40px]
                px-8
                ${className ?? ""}
            `}>
                {children}
            </div>
        </>
    )
}