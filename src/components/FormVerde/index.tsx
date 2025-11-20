import { Link } from "react-router-dom";

type FormSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => void;

type PositionLink = "start" | "center" | "end"

interface FormProps {
  onSubmit: FormSubmitHandler;
  h2: string;
  p: boolean;
  children: React.ReactNode;
  link: string;
  linkTitle: string;
  linkPosition: PositionLink;
  linkText: string;
  pxDivLink?: Number;
  buttonText: string;
  buttonTiltle: string;
  buttonIcon: React.ReactNode;
  buttonPosition: PositionLink;
  pxButton?: Number;
  pxDivButton?: Number;
  classname?: string;
}

export default function FormVerde(
    {
        onSubmit, h2, p, children: childrenInputs, 
        link, linkTitle, linkPosition, linkText, pxDivLink,
        buttonText, buttonTiltle, buttonIcon, buttonPosition,
        pxButton=4.5, pxDivButton, classname
    }
    : FormProps) {
    return (
        <section className={`
            flex flex-col items-center justify-center
            h-full w-1/2 pr-6 pl-4 pt-6.5 pb-6.5
            max-[1010px]:pl-2
            max-[1010px]:pr-2
            max-[776px]:w-full
            max-[776px]:pt-4
            `}>
                <form 
                onSubmit={onSubmit}
                className={`
                ${classname ?? ""}
                w-full min-h-full bg-green-178177/15 rounded-[20px]
                border-3 border-green-500 px-[39px]
                max-[1102px]:px-6
                max-[1042px]:px-4
                max-[776px]:flex
                max-[776px]:flex-col
                max-[776px]:items-center
                max-[455px]:items-start
                `}>
                    <div className="
                    flex flex-col items-center gap-1 pt-12.5 font-inter
                    max-[455px]:w-full
                    ">
                        <h2 className="
                        font-bold text-5xl
                        max-[951px]:text-4xl
                        ">
                            {h2}
                        </h2>
                        <p className="
                        text-xl font-normal text-green-700
                        max-[951px]:text-lg
                        max-[821px]:text-[16px]
                        max-[400px]:text-[14px]
                        max-[400px]:text-center
                        ">
                           {p ? "Campos marcados com * são obrigatórios.": ""} 
                        </p>
                    </div>

                    {childrenInputs}

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

                    <div className={`
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
                </form>
        </section>
    )
}