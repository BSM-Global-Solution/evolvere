import { IoIosArrowDropright } from "react-icons/io";
import ButtonFormVerde from "../../components/ButtonFormVerde";
import ContainerTransparente from "../../components/ContainerTransparente/indeex";

export default function EsqueciSenha() {
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
                        alt="" 
                    />
                </span>
                <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-4xl max-[458px]:text-3xl">Esqueceu sua senha?</h1>
                    <p className="font-light text-xl max-[458px]:text-sm">Informe seu e-mail para <br />  redefinir sua senha.</p>
                </div>
            </header>
            <form className="
                px-15 pt-7.5 w-full
                max-[532px]:px-0
            ">
                <div className="flex flex-col gap-2.5">
                    <label className="font-bold text-2xl">E-mail *</label>
                    <input 
                        type="text"
                        placeholder="Digite o seu e-mail"
                        className="
                            w-full outline-none border border-white
                            p-2.5 rounded-[10px]
                        "
                    />
                </div>
                <ButtonFormVerde 
                    buttonText="Enviar"
                    buttonTiltle="Enviar recuperação de senha"
                    buttonIcon={<IoIosArrowDropright size={25}/>}
                    buttonPosition="center"
                 />
            </form>
        </ContainerTransparente>
    </section>
  );
}