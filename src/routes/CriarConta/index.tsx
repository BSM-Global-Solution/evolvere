import { FiUserPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function CriarConta() {
    return (
        <section className="flex h-screen w-full">
            <section className="bg-tertiary-700 h-full w-1/2">
                <header className="
                    flex flex-col justify-center items-center
                    gap-12.5 h-full px-7
                ">
                    <h1 className="font-inter font-semibold text-white text-6xl text-center">
                        Estamos felizes em ter você conosco!
                    </h1>
                    <figure className="flex flex-col items-center gap-12.5">
                        <img 
                        src="https://res.cloudinary.com/dtbgsboo5/image/upload/v1763522082/logo-fundo-transparente_nom0tb.png"
                        alt="Logo da Evolvere com fundo transparente"
                        className="w-[500px]"
                         />
                        <figcaption className="
                            text-3xl text-white font-normal
                        ">
                            Comece agora e faça parte dessa evolução.
                        </figcaption>
                    </figure>
                </header>
            </section>
            <section className="h-full w-1/2 pr-6 pl-4 pt-6.5 pb-6.5">
                <form className="
                w-full h-full bg-green-178177/15 rounded-[20px]
                border-3 border-green-500 px-[39px]
                ">
                    <div className="flex flex-col items-center gap-1 pt-12.5 font-inter">
                        <h2 className="font-bold text-5xl">
                            Criar Conta
                        </h2>
                        <p className="text-xl font-normal text-green-700">
                            Campos marcados com * são obrigatórios.
                        </p>
                    </div>

                    <ul className="flex flex-col gap-6 pt-[57px]">
                        <li>
                            <ul className="flex">
                                <li className="flex flex-col gap-2.5 w-1/2 font-inter">
                                    <label className="text-2xl font-bold text-tertiary-700">
                                        Nome *
                                    </label>
                                    <input 
                                    type="text"
                                    placeholder="Digite o seu nome"
                                    className="
                                    max-w-[285px] p-2.5 placeholder:text-gray-300
                                    outline-none border border-gray-200 rounded-[10px]
                                    focus:border-green-700
                                    "
                                    />
                                </li>
                                <li className="flex flex-col gap-2.5 w-1/2 font-inter">
                                    <label className="text-2xl font-bold text-tertiary-700">
                                        Data de nascimento *
                                    </label>
                                    <input 
                                    type="date"
                                    placeholder="Digite o seu nome"
                                    className="
                                    max-w-[285px] p-2.5 placeholder:text-gray-300
                                    outline-none border border-gray-200 rounded-[10px]
                                    focus:border-green-700
                                    "
                                    />
                                </li>
                            </ul>
                        </li>
                        <li className="flex flex-col w-full gap-2.5 font-inter">
                         <label className="text-2xl font-bold text-tertiary-700">
                            E-mail *
                         </label>
                         <input 
                            type="text"
                            placeholder="exemplo@email.com"
                            className="
                            max-w-[610px] p-2.5 placeholder:text-gray-300
                            outline-none border border-gray-200 rounded-[10px]
                            focus:border-green-700
                            "
                            />
                        </li>
                        <li className="flex flex-col w-full gap-2.5 font-inter">
                         <label className="text-2xl font-bold text-tertiary-700">
                            Crie uma senha *
                         </label>
                         <input 
                            type="password"
                            placeholder="Crie sua senha"
                            className="
                            max-w-[610px] p-2.5 placeholder:text-gray-300
                            outline-none border border-gray-200 rounded-[10px]
                            focus:border-green-700
                            "
                            />
                        </li>
                        <li className="flex flex-col w-full gap-2.5 font-inter">
                         <label className="text-2xl font-bold text-tertiary-700">
                            Confirme sua senha *
                         </label>
                         <input 
                            type="password"
                            placeholder="Repita a senha"
                            className="
                            max-w-[610px] p-2.5 placeholder:text-gray-300
                            outline-none border border-gray-200 rounded-[10px]
                            focus:border-green-700
                            "
                            />
                        </li>
                    </ul>

                    <div className="flex justify-end max-w-[610px] mt-2.5">
                        <Link 
                        to="/entrarConta"
                        title="Entrar na sua conta"
                        className="
                        font-inter font-semibold text-tertiary-700
                        hover:text-hover-green-580
                        "
                        >
                         Já tem uma conta? Clique aqui.
                        </Link>
                    </div>

                    <div className="flex justify-end max-w-[610px] pt-4">
                        <button 
                        title="Criar Conta"
                        className="
                            flex items-center text-white
                            bg-tertiary-700 px-4.5 py-3
                            rounded-[20px] font-inter font-semibold
                            text-xl cursor-pointer hover:btn-hover-tertiary-80
                        ">
                            Cadastrar
                            <span>
                                <FiUserPlus className="w-[29px] h-6" />
                            </span>
                        </button>
                    </div>
                </form>
            </section>
        </section>
    )
}