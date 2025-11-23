export interface EsqueciSenhaDTO {
  email: string;
}

export interface RedefinirSenhaDTO {
  email: string;
  token: string;
  novaSenha: string;
}

const BASE_URL = import.meta.env.VITE_API_BASE_URL_JAVA as string;

if (!BASE_URL) {
  console.warn("VITE_API_BASE_URL_JAVA não está definida no .env!");
}

// Solicitar recuperação de senha
export async function solicitarRecuperacaoSenha(data: EsqueciSenhaDTO) {
  const response = await fetch(`${BASE_URL}/recuperacao-senha/solicitar`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    let erroMensagem = "Erro ao solicitar recuperação de senha";

    try {
      const errorData = await response.json();
      if (errorData.erro) erroMensagem = errorData.erro;
      if (errorData.mensagem) erroMensagem = errorData.mensagem;
    } catch (e) {}

    throw new Error(erroMensagem);
  }

  return await response.json(); // deve retornar { mensagem, token }
}

// Redefinir senha
export async function redefinirSenha(data: RedefinirSenhaDTO) {
  const response = await fetch(`${BASE_URL}/recuperacao-senha/redefinir`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    let erroMensagem = "Erro ao redefinir senha";

    try {
      const errorData = await response.json();
      if (errorData.erro) erroMensagem = errorData.erro;
      if (errorData.mensagem) erroMensagem = errorData.mensagem;
    } catch (e) {}

    throw new Error(erroMensagem);
  }

  return await response.json(); // deve retornar { mensagem }
}