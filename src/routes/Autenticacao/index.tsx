import ContainerTransparente from "../../components/ContainerTransparente/indeex";

export default function Autenticacao() {
    return (
        <section className="flex justify-center items-center w-full h-screen bg-tertiary-700">
            <ContainerTransparente width={185}>
                <header className="flex flex-col gap-5 items-center">
                    <h1 className="
                        text-4xl font-bold font-inter
                    ">
                        Autenticação necessária
                    </h1>
                    <p className="text-center text-xl">
                        Enviamos um código de verificação para o seu e-mail cadastrado. 
                        Insira o código abaixo para continuar. 
                        (O código expira em 5 minutos.)
                    </p>
                </header>
            </ContainerTransparente>
        </section>
    )
}