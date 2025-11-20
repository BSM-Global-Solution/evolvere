type PositionButton = "start" | "center" | "end"

interface ButtonFormVerdeProps {
    buttonText: string;
    buttonTiltle: string;
    buttonIcon: React.ReactNode;
    buttonPosition: PositionButton;
    pxButton?: Number;
    pxDivButton?: Number;
    className?: string
}

export default function ButtonFormVerde({ 
        buttonText, buttonTiltle, buttonIcon, 
        buttonPosition, pxButton=4.5, pxDivButton,
        className
    }: ButtonFormVerdeProps) {
    return (
        <div className={`
            ${className ?? ""}
            flex justify-${buttonPosition} py-4 px-${pxDivButton}
            max-w-[610px]
            max-[776px]:w-full
            max-[776px]:px-23
            max-[400px]:px-15
            `}>
                <button 
                title={buttonTiltle}
                className={`
                    flex items-center gap-1 text-white
                    bg-tertiary-700 px-${pxButton} py-3
                    rounded-[20px] font-inter font-semibold
                    text-xl cursor-pointer hover:btn-hover-tertiary-80
                    max-[951px]:text-lg
                    max-[884px]:text-[16px]
                    max-[776px]:w-full
                    max-[776px]:justify-center
                `}>
                    {buttonText}
                    <span>
                        {buttonIcon}  
                    </span>
                </button>
        </div>
    )
}