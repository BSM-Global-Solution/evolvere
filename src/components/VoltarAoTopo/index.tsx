import { useEffect, useState } from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";

export default function VoltarAoTopo() {
    const [mostrarBotao, setMostrarBotao] = useState<boolean>(false);

    useEffect(() => {
        function scrollar() {
            (window.scrollY > window.innerHeight)
            ? setMostrarBotao(true)
            : setMostrarBotao(false);
        }

        window.addEventListener("scroll", scrollar);
        return () => window.removeEventListener("scroll", scrollar);
    },[]);

    function voltarAoTopo() {
        window.scrollTo({ top: 0 });
    }

     if (!mostrarBotao) return null;

    return (
        <button 
         onClick={voltarAoTopo}
         title="Voltar para o topo da página"
         className="
            fixed bottom-6 right-2
            bg-green-500 text-white
            p-3 rounded-full cursor-pointer
            hover:btn-hover-green-580-70 duration-300
            animate-fade-in
         ">
            <BsArrowUpCircleFill size={25} />
        </button>
    )
}