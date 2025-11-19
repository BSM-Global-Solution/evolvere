import { useForm } from "react-hook-form";
import { FiUserPlus } from "react-icons/fi";
import { IoIosArrowDropleft } from "react-icons/io";
import { Link } from "react-router-dom";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { criarContaData } from "../../data/criarContaData";

const s = z.object({
    nome: z.string().min(3, "Nome deve ter no mínimo 3 caracteres"),
    data: z.string().min(1, "Coloque sua data de nascimento"),
    email: z.email("E-mail inválido, use: exemplo@email.com"),
    senha: z.string()
    .min(6,"A senha deve ter no mínimo 6 caracteres")
    .max(20, "A senha deve ter no máximo 20 caracteres")
    .regex(/(?:.*\d){2,}/, "A senha deve conter pelo menos 2 números")
    .regex(/(?:.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]){2,}/, "A senha deve conter pelo menos 2 caracteres especiais")
    .regex(/(?:.*[A-Za-z]){2,}/, "A senha deve conter pelo menos 2 letras"),
    confirmarSenha: z.string()
}).refine((data) => data.senha === data.confirmarSenha, {
    message: "As senhas estão diferentes",
    path: ["confirmarSenha"]
});

export type Form = z.infer<typeof s>

export default function CriarConta() {

    const { register, handleSubmit, formState: { errors } } = useForm<Form>({
        resolver: zodResolver(s),
    });

    const onSubmit = async (data: Form) => {
       await alert("Cadastrado com Sucesso" )
    }

    return (
        <section className="
        flex min-h-screen w-full
        max-[776px]:flex-col
        ">
            <section className="
            bg-tertiary-700 min-h-screen w-1/2
            max-[776px]:w-full
            max-[776px]:py-5
            ">
                <header className="
                    flex flex-col justify-center items-center
                    gap-12.5 h-full px-7
                ">
                    <h1 className="
                    font-inter font-semibold text-white text-6xl text-center
                    max-[1161px]:text-5xl
                    max-[951px]:text-4xl
                    ">
                        Estamos felizes em ter você conosco!
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
                        ">
                            Comece agora e faça parte dessa evolução.
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
            <section className="
            h-full w-1/2 pr-6 pl-4 pt-6.5 pb-6.5
            max-[1010px]:pl-2
            max-[1010px]:pr-2
            max-[776px]:w-full
            max-[776px]:pt-4
            ">
                <form 
                onSubmit={handleSubmit(onSubmit)}
                className="
                w-full min-h-full bg-green-178177/15 rounded-[20px]
                border-3 border-green-500 px-[39px]
                max-[1102px]:px-6
                max-[1042px]:px-4
                max-[776px]:flex
                max-[776px]:flex-col
                max-[776px]:items-center
                max-[455px]:items-start
                ">
                    <div className="
                    flex flex-col items-center gap-1 pt-12.5 font-inter
                    max-[455px]:w-full
                    ">
                        <h2 className="
                        font-bold text-5xl
                        max-[951px]:text-4xl
                        ">
                            Criar Conta
                        </h2>
                        <p className="
                        text-xl font-normal text-green-700
                        max-[951px]:text-lg
                        max-[821px]:text-[16px]
                        max-[400px]:text-[14px]
                        max-[400px]:text-center
                        ">
                            Campos marcados com * são obrigatórios.
                        </p>
                    </div>

                    <ul
                    className="
                        flex flex-col gap-6 pt-[57px] max-[884px]:gap-9
                        max-[455px]:w-full
                    "
                    >
                    {/* Primeira linha: Nome + Data */}
                    <li>
                        <ul
                        className="
                            flex gap-2 max-[455px]:flex-col
                            max-[455px]:gap-6
                        "
                        >
                        {criarContaData.slice(0, 2).map((field) => (
                            <li key={field.name} className={field.wrapperClasses}>
                            <label
                                className="
                                text-2xl font-bold text-tertiary-700
                                max-[1240px]:text-xl
                                max-[980px]:text-lg
                                max-[884px]:text-[16px]
                                "
                            >
                                {field.label}
                            </label>

                            <input
                                type={field.type}
                                placeholder={field.placeholder}
                                className="
                                max-w-[285px] p-2.5 placeholder:text-gray-300
                                outline-none border border-gray-200 rounded-[10px]
                                focus:border-green-700
                                max-[455px]:max-w-[610px]
                                "
                                {...register(field.name)}
                            />

                            {errors[field.name] && (
                                <p className="text-red-500">{errors[field.name]?.message}</p>
                            )}
                            </li>
                        ))}
                        </ul>
                    </li>

                    {/* Restante dos campos */}
                    {criarContaData.slice(2).map((field) => (
                        <li key={field.name} className={field.wrapperClasses}>
                        <label
                            className="
                            text-2xl font-bold text-tertiary-700
                            max-[1240px]:text-xl
                            max-[980px]:text-lg
                            max-[884px]:text-[16px]
                            "
                        >
                            {field.label}
                        </label>

                        <input
                            type={field.type}
                            placeholder={field.placeholder}
                            className="
                            max-w-[610px] p-2.5 placeholder:text-gray-300
                            outline-none border border-gray-200 rounded-[10px]
                            focus:border-green-700
                            "
                            {...register(field.name)}
                        />

                        {errors[field.name] && (
                            <p className="text-red-500">{errors[field.name]?.message}</p>
                        )}
                        </li>
                    ))}
                    </ul>

                    <div className="flex justify-end max-w-[610px] mt-2.5">
                        <Link 
                        to="/entrarConta"
                        title="Entrar na sua conta"
                        className="
                        font-inter font-semibold text-tertiary-700
                        hover:text-hover-green-580
                        max-[951px]:text-lg
                        max-[884px]:text-[16px]
                        "
                        >
                         Já tem uma conta? Clique aqui.
                        </Link>
                    </div>

                    <div className="
                    flex justify-end py-4
                    max-w-[610px]
                    max-[776px]:w-full
                    max-[776px]:px-23
                    max-[400px]:px-15
                    ">
                        <button 
                        title="Criar Conta"
                        className="
                            flex items-center text-white
                            bg-tertiary-700 px-4.5 py-3
                            rounded-[20px] font-inter font-semibold
                            text-xl cursor-pointer hover:btn-hover-tertiary-80
                            max-[951px]:text-lg
                            max-[884px]:text-[16px]
                            max-[776px]:w-full
                            max-[776px]:justify-center
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