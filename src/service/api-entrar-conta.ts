export interface LoginDTO {
  email: string;
  senha: string;
}

export interface Usuario {
  id: number;
  nome: string;
  email: string;
  dataDeNascimento: string;
}

const BASE_URL = import.meta.env.VITE_API_BASE_URL_JAVA;

if (!BASE_URL) {
  console.warn("VITE_API_BASE_URL_JAVA não está definida no .env!");
}

export async function loginUsuario(data: LoginDTO): Promise<Usuario> {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: data.email,
      senha: data.senha,
    }),
  });

  if (!response.ok) {
    let erroMensagem = "Erro ao realizar login";

    try {
      const errorData = await response.json();
      if (errorData.erro) erroMensagem = errorData.erro;
      if (errorData.mensagem) erroMensagem = errorData.mensagem;
    } catch {
      // se não conseguir ler o JSON, fica a mensagem padrão
    }

    throw new Error(erroMensagem);
  }

  return await response.json();
}
