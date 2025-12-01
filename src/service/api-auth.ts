export interface RegistroDTO {
  nome: string;
  email: string;
  senha: string;
  dataNascimento: string;
}

export interface ConfirmarCodigoDTO extends RegistroDTO {
  codigo: string;
}

const BASE_URL = import.meta.env.VITE_API_BASE_URL_JAVA as string;

if (!BASE_URL) {
  console.warn("VITE_API_BASE_URL_JAVA não está definida no .env!");
}

export async function iniciarRegistro(data: RegistroDTO) {
  const response = await fetch(`${BASE_URL}/auth/registrar`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    let erroMensagem = "Erro ao iniciar registro";

    try {
      const errorData = await response.json();
      if (errorData.erro) erroMensagem = errorData.erro;
      if (errorData.mensagem) erroMensagem = errorData.mensagem;
    } catch (e) {
      console.warn("Resposta não era JSON ou estava inválida", e);
    }

    throw new Error(erroMensagem);
  }

  return await response.json();
}

export async function reenviarCodigo(email: string) {
  const response = await fetch(`${BASE_URL}/auth/reenviar-codigo`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    let erroMensagem = "Erro ao reenviar código";

    try {
      const errorData = await response.json();
      if (errorData.erro) erroMensagem = errorData.erro;
      if (errorData.mensagem) erroMensagem = errorData.mensagem;
    } catch (e) {
      console.warn("Resposta não era JSON ou estava inválida", e);
    }

    throw new Error(erroMensagem);
  }

  return await response.json();
}

export async function confirmarCodigo(data: ConfirmarCodigoDTO) {
  const response = await fetch(`${BASE_URL}/auth/confirmar-codigo`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    let erroMensagem = "Erro ao confirmar código";

    try {
      const errorData = await response.json();
      if (errorData.erro) erroMensagem = errorData.erro;
      if (errorData.mensagem) erroMensagem = errorData.mensagem;
    } catch (e) {
      console.warn("Resposta não era JSON ou estava inválida", e);
    }

    throw new Error(erroMensagem);
  }

  return await response.json();
}