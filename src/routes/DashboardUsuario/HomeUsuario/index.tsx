import { useTheme } from "../../../context/ThemeContextBase"
import CardLink from "../../../components/DashboardUsuario/CardLink";
import CardMensagens from "../../../components/DashboardUsuario/CardMensagens";
import CardAnotacoes from "../../../components/DashboardUsuario/CardAnotacoes";
import CardPerfil from "../../../components/DashboardUsuario/CardPerfil";
import { useUser } from "../../../context/UserContext";

export default function HomeUsuario() {

    const { usuario } = useUser();
    const { theme } = useTheme();

    return (
        <section className="pl-4.5 pr-5 pt-3.5 pb-11.5">
            <header className="
            flex
            max-[1135px]:flex-col
            max-[1135px]:gap-2
            ">
                <div className="
                flex flex-col justify-center w-1/2 
                max-[1140px]:w-full
                ">
                    <h1 className={`
                        ${
                            theme == "light"
                            ? "text-green-500"
                            : "text-white"
                        }
                        text-7xl font-inter font-bold
                        max-[1160px]:text-6xl    
                        max-[400px]:text-5xl    
                    `}>
                        Olá {usuario?.nome || "Usuário"}
                    </h1>
                    <p className={`
                        ${
                            theme == "light"
                            ? "text-green-500"
                            : "text-white"
                        }    
                        text-4xl font-light font-inter pt-5
                        max-[1307px]:text-3xl
                        max-[1160px]:text-2xl
                        max-[400px]:text-xl
                        max-[400px]:pt-2
                    `}>
                        Quais são os planos para hoje?
                    </p>
                </div>
                <div className="w-1/2 max-[1160px]:w-full">
                    <CardPerfil />
                </div>
            </header>

            <div className="
            flex gap-5 pt-12.5
            max-[1040px]:flex-col
            ">
                <div className="
                flex flex-col gap-10 items-center w-3/5
                max-[1140px]:w-full
                ">
                    <ul className="
                    flex justify-center gap-15 
                    max-[480px]:flex-col
                    ">
                        <li>
                            <CardLink label="Iniciar uma conversa com o" labelNegrito="Mentor.IA"/>
                        </li>
                        <li>
                            <CardLink label="Iniciar uma conversa com um" labelNegrito="mentor"/>
                        </li>
                    </ul>
                    <CardMensagens />
                </div>
                <div className="
                w-[50%]
                max-[1140px]:w-full
                ">
                   <CardAnotacoes />
                </div>
            </div>
        </section>
    )
}