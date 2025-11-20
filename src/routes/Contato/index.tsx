export default function Contato() {
    return (
        <section className="pt-40">
            <h1>
                Contate-nos
            </h1>
            <p>
                Precisa de ajuda, encontrou algum problema no site, ou ficou com alguma dúvida?
            </p>
                <div className="bg-[var(--color-tertiary-100)]">
                    <div>
                        <h2>
                            Envie uma mensagem para nós!
                        </h2>
                        <label>
                            Nome *
                        </label>
                        <input type="text"
                        placeholder="Digite seu nome"/>
                        <label>
                            Email *
                        </label>
                        <input type="text"
                        placeholder="Digite seu email"/>
                        <label>
                            Assunto *
                        </label>
                        <input type="text"
                        placeholder="Digite o assunto da mensagem"/>
                        <label>
                            Sua mensagem *
                        </label>
                        <input type="text"
                        placeholder="Digite sua mensagem"/>
                    </div>
                    <div>
                        <button 
                        type="submit"
                        title="Clique aqui para enviar mensagem"
                        >
                        Enviar mensagem
                        </button>
                    </div>
                    <div className="bg-[var(--color-green-400)]">
                        <h3>Contato</h3>
                        \* Maps *\
                    </div>
                </div>
                <section>
                    <h1>
                        O que você achou do nosso projeto?
                    </h1>
                    <p>
                        Sua opinião é essencial para melhorarmos cada vez mais. <br />
                        Conte pra gente como tem sido sua experiência com a Evolvere!
                    </p>
                    <h2>
                        Gostaria de deixar um comentário? <br />
                        (Caso não queira, deixe este espaço em branco).
                    </h2>
                    <textarea name="Mensagem" id="Mensagem" placeholder="Digite sua mensagem"></textarea>
                    <button 
                    type="submit"
                    title="Clique aqui para enviar o feedback"
                    >
                    Enviar feedback
                    </button>
                </section>
        </section>
    )
}