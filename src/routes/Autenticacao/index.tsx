import { HiOutlineRefresh } from "react-icons/hi";
import ContainerTransparente from "../../components/ContainerTransparente/indeex";
import { IoIosArrowDropright } from "react-icons/io";

export default function Autenticacao() {
    return (
        <section className="flex justify-center items-center w-full min-h-screen bg-tertiary-700">
            <ContainerTransparente width={185} className="gap-15 font-inter">
                <header className="flex flex-col gap-5 items-center">
                    <h1 className="
                        text-4xl font-bold
                    ">
                        Autenticação necessária
                    </h1>
                    <p className="text-center text-xl">
                        Enviamos um código de verificação para o seu e-mail cadastrado. 
                        Insira o código abaixo para continuar. 
                        <span className="font-bold">(O código expira em 5 minutos.)</span>
                    </p>
                </header>

                <form className="flex flex-col gap-10 w-full">
                    <div className="flex flex-col w-full px-30">
                        <label className="text-2xl font-bold">Código</label>
                        <input 
                        type="number"
                        placeholder="Digite o seu código aqui"
                        className="w-full border border-white p-3.5 rounded-[10px] outline-none"
                        />
                    </div>
                    <div className="flex flex-col gap-2 text-md">
                        <p>
                            Não recebeu o código? Verifique sua caixa de
                            <span className="font-bold"> spam </span>  
                            ou 
                            <span className="font-bold"> lixeira.</span>
                        </p>
                        <p>
                            Ainda não chegou? Clique em 
                            <span className="font-bold"> Reenviar código.</span>
                        </p>
                    </div>
                    <ul className="px-30 flex justify-between font-bold">
                        <li>
                            <button 
                            title="Clique aqui para reenviar o código"
                            className="
                                flex gap-2 items-center
                                bg-green-800 p-4 rounded-[20px]
                                text-xl hover:btn-hover-green-800
                                cursor-pointer
                            ">
                                Reenviar código
                                <span>
                                    <HiOutlineRefresh size={30}/>
                                </span>
                            </button>
                        </li>
                        <li>
                            <button 
                            title="Clique aqui para enviar o código"
                            className="
                                flex gap-2 items-center
                                bg-green-800 p-4 rounded-[20px]
                                text-xl hover:btn-hover-green-800
                                cursor-pointer
                            ">
                                Enviar
                                <span>
                                    <IoIosArrowDropright size={30} />
                                </span>
                            </button>
                        </li>
                    </ul>
                </form>
            </ContainerTransparente>
        </section>
    )
}