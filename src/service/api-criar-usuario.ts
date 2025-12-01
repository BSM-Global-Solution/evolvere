export interface CriarUsuarioDTO {
  nome: string;
  data: string;
  email: string;
  senha: string;
}

export interface Usuario {
  id: number;
  nome: string;
  email: string;
  dataDeNascimento: string;
}

const BASE_URL = import.meta.env.VITE_API_BASE_URL_JAVA as string;

if (!BASE_URL) {
  console.warn("VITE_API_BASE_URL_JAVA não está definida no .env!");
}

export async function criarUsuario(data: CriarUsuarioDTO) {
  const response = await fetch(`${BASE_URL}/usuarios`, {
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
    let erroMensagem = "Erro ao criar usuário";

    try {
      const errorData = await response.json();
      if (errorData.erro) erroMensagem = errorData.erro;
      if (errorData.mensagem) erroMensagem = errorData.mensagem;
    } catch (e) {
      console.warn("Resposta não era JSON ou estava inválida", e);
    }

    throw new Error(erroMensagem);
  }

  return (await response.json()) as Usuario;
}