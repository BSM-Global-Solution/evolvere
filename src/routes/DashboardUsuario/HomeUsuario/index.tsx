import { useTheme } from "../../../context/ThemeContextBase"
import CardLink from "../../../components/DashboardUsuario/CardLink";
import CardMensagens from "../../../components/DashboardUsuario/CardMensagens";
import "react-calendar/dist/Calendar.css";
import CardAnotacoes from "../../../components/DashboardUsuario/CardAnotacoes";
import CardPerfil from "../../../components/DashboardUsuario/CardPerfil";

export default function HomeUsuario() {

    const { theme } = useTheme();

    return (
        <section className="pl-4.5 pr-5 pt-3.5 pb-11.5">
            <header className="flex">
                <div className=" flex flex-col justify-center w-1/2">
                    <h1 className={`
                        ${
                            theme == "light"
                            ? "text-green-500"
                            : "text-white"
                        }
                        text-7xl font-inter font-bold    
                    `}>
                        Olá User!
                    </h1>
                    <p className={`
                        ${
                            theme == "light"
                            ? "text-green-500"
                            : "text-white"
                        }    
                        text-4xl font-light font-inter pt-5
                    `}>
                        Quais são os planos para hoje?
                    </p>
                </div>
                <div className="w-1/2">
                    <CardPerfil />
                </div>
            </header>

            <div className="flex gap-5 pt-12.5">
                <div className="flex flex-col gap-10 items-center w-3/5">
                    <ul className="flex justify-center gap-15 ">
                        <li>
                            <CardLink label="Iniciar uma conversa com o" labelNegrito="Mentor.IA"/>
                        </li>
                        <li>
                            <CardLink label="Iniciar uma conversa com um" labelNegrito="mentor"/>
                        </li>
                    </ul>
                    <CardMensagens />
                </div>
                <div className="w-[50%]">
                   <CardAnotacoes />
                </div>
            </div>
        </section>
    )
}