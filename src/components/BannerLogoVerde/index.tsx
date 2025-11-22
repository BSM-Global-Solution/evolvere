import { IoIosArrowDropleft } from "react-icons/io";
import { Link } from "react-router-dom";

interface BannerProps {
    title: string;
    p: string;
}

export default function BannerLogoVerde({title, p}: BannerProps) {
  return (
    <section className="
        flex flex-col items-center justify-center
        bg-tertiary-700 min-h-screen w-1/2
        max-[776px]:w-full
        max-[776px]:py-5
        "
    >
        <header className="
                    flex flex-col justify-center items-center
                    gap-12.5 h-full px-7
                "
            >
                <h1 className="
                    font-inter font-semibold text-white text-6xl text-center
                    max-[1161px]:text-5xl
                    max-[951px]:text-4xl
                    "
                >
                {title}
                </h1>
                <figure className="flex flex-col items-center gap-12.5">
                <img
                    src="https://res.cloudinary.com/dtbgsboo5/image/upload/v1763522082/logo-fundo-transparente_nom0tb.png"
                    alt="Logo da Evolvere com fundo transparente"
                    className="
                        w-[500px] 
                        max-[1161px]:w-[460px]
                        max-[1080px]:w-[440px]
                        max-[951px]:w-[410px]
                        "
                />
                <figcaption className="
                        text-3xl text-white font-normal
                        max-[1253px]:text-center
                        max-[951px]:text-2xl
                        "
                >
                    {p}
                </figcaption>
                <Link
                    to="/"
                    title="Voltar para a página inicial"
                    className="
                        w-full font-inter font-bold text-2xl text-center outline-none
                        bg-green-400 text-white px-4.5 py-4 rounded-[20px]
                        border-r-5 border-b-5 border-green-500
                        btn-hover-green-400
                        max-[951px]:text-xl
                        max-[951px]:py-3
                        "
                >
                    <div className="flex justify-between items-center w-[60%]">
                    <span>
                        <IoIosArrowDropleft size={30} />
                    </span>
                    Voltar
                    </div>
                </Link>
                </figure>
        </header>
    </section>
  );
}