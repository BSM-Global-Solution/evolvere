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

    if (!response.ok) {
        throw new Error("Erro ao criar usuário");
    }

    return await response.json();
}