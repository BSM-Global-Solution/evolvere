import { useForm } from "react-hook-form";
import { FiUserPlus } from "react-icons/fi";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { criarContaData } from "../../data/criarContaData";
import BannerLogoVerde from "../../components/BannerLogoVerde";
import FormVerde from "../../components/FormVerde";
import LinkFormVerde from "../../components/LinkFormVerde";
import ButtonFormVerde from "../../components/ButtonFormVerde";

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
            <BannerLogoVerde 
                title="Estamos felizes em ter você conosco!"
                p="Comece agora e faça parte dessa evolução."
            />
            <FormVerde
                onSubmit={handleSubmit(onSubmit)}
                h2="Criar Conta"
                p={true}
            >
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
                            className={`
                                max-w-[285px] p-2.5 placeholder:text-gray-300
                                outline-none rounded-[10px]
                                ${errors[field.name]
                                ? "border border-red-500 focus:border-red-500"
                                : "border border-gray-200 focus:border-green-700"}
                                max-[455px]:max-w-[610px]
                            `}
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
                        className={`
                            max-w-[610px] p-2.5 placeholder:text-gray-300
                            outline-none rounded-[10px]
                            ${errors[field.name]
                            ? "border border-red-500 focus:border-red-500"
                            : "border border-gray-200 focus:border-green-700"}
                        `}
                        {...register(field.name)}
                        />

                        {errors[field.name] && (
                            <p className="text-red-500">{errors[field.name]?.message}</p>
                        )}
                        </li>
                    ))}
                </ul>

                <LinkFormVerde 
                    link="/entrarConta"
                    linkTitle="Entrar na Conta"
                    linkText="Já tem uma conta? Clique aqui."
                    linkPosition="end"
                />

                <ButtonFormVerde 
                    buttonText="Cadastrar"
                    buttonTiltle="Criar Conta"
                    buttonPosition="end"
                    buttonIcon={<FiUserPlus className="w-[29px] h-6" />}
                />
            </FormVerde>
        </section>
    )
}