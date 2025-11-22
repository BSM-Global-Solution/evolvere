import ButtonFormVerde from "../../components/ButtonFormVerde";
import ContainerTransparente from "../../components/ContainerTransparente/indeex";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { HiOutlineRefresh } from "react-icons/hi";

const s = z.object({
    email: z.email("E-mail inválido, use: exemplo@email.com")
});

export type EsqueciSenhaType = z.infer<typeof s>;


export default function RedefinirSenha() {
    const { register, handleSubmit, formState: {errors} } = useForm<EsqueciSenhaType>({
        resolver: zodResolver(s)
    })
    
    const onSubmit = () => {
    }
  return (
    <section className="flex justify-center items-center w-full min-h-screen bg-tertiary-700">
        <ContainerTransparente 
        width={285} 
        className="
            w-190 items-start
            max-[750px]:w-150
            max-[612px]:w-130
            max-[532px]:w-110
            max-[458px]:w-90
            max-[372px]:w-80
        ">
            <header className="flex flex-col items-center gap-5 text-center font-inter w-full">
                <span>
                    <img 
                        src="https://res.cloudinary.com/dtbgsboo5/image/upload/v1763793994/logo_evolvere_fundo_verde_nkva4h.png" 
                        alt="Logo do Evolvere com fundo verde" 
                    />
                </span>
                <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-4xl max-[458px]:text-3xl">Digite sua nova senha.</h1>
                    <p className="font-light text-xl max-[458px]:text-sm">Dica: guarde sua nova senha com cuidado.</p>
                </div>
            </header>
            <form 
            onSubmit={handleSubmit(onSubmit)}
            className="
                px-15 pt-7.5 w-full
                max-[532px]:px-0
            ">
                <ul className="flex flex-col gap-10">
                    <li>
                        <label className="font-bold text-2xl">Nova Senha *</label>
                        <input 
                            type="password"
                            placeholder="Crie uma nova senha"
                            className={`
                                w-full outline-none 
                                p-2.5 rounded-[10px]
                                ${errors["email"]
                                ? "border border-red-500"
                                :  "border border-white"
                                }
                            `}
                            {...register("email")}
                        />
                        {errors.email && (
                            <span className="text-red-500">
                                {errors.email.message}
                            </span>
                        )}

                    </li>
                    <li>
                        <label className="font-bold text-2xl">Confirme sua senha *</label>
                        <input 
                            type="password"
                            placeholder="Repita a nova senha"
                            className={`
                                w-full outline-none 
                                p-2.5 rounded-[10px]
                                ${errors["email"]
                                ? "border border-red-500"
                                :  "border border-white"
                                }
                            `}
                            {...register("email")}
                        />
                        {errors.email && (
                            <span className="text-red-500">
                                {errors.email.message}
                            </span>
                        )}

                    </li>
                </ul>
                <ButtonFormVerde 
                    buttonText="Redefinir senha"
                    buttonTiltle="Clique para redefinir senha"
                    buttonIcon={<HiOutlineRefresh size={25}/>}
                    buttonPosition="center"
                    className="pt-10"
                 />
            </form>
        </ContainerTransparente>
    </section>
  );
}