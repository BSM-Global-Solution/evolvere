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
            <section>

            </section>
        </section>
    )
}