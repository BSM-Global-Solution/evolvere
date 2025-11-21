export interface CriarUsuarioDTO {
    nome: string;
    data: string; 
    email: string;
    senha: string;
}

export async function criarUsuario(data: CriarUsuarioDTO) {
    const response = await fetch("https://api-java-evolvere.onrender.com/usuarios", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nome: data.nome,
            email: data.email,
            senha: data.senha,
            dataDeNascimento: data.data,
        }),
    });

    // Se der erro, tenta ler a mensagem do backend
    if (!response.ok) {
        let erroMensagem = "Erro ao criar usuário";

        try {
            const errorData = await response.json();
            if (errorData.erro) erroMensagem = errorData.erro;
            if (errorData.mensagem) erroMensagem = errorData.mensagem;
        } catch (e) {
            // Caso não consiga ler o JSON, usa erro genérico
        }

        throw new Error(erroMensagem);
    }

    return await response.json();
}