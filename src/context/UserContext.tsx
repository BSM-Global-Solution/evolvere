import { createContext, useContext, useState } from "react";
import type { Usuario } from "../service/api-entrar-conta";

interface UserContextType {
  usuario: Usuario | null;
  setUsuario: (user: Usuario | null) => void;
  atualizarUsuario: (user: Usuario) => void;
  logout: () => void
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(() => {
    const saved = localStorage.getItem("usuario");
    return saved ? JSON.parse(saved) : null;
  });

  function atualizarUsuario(user: Usuario) {
    setUsuario(user);
    localStorage.setItem("usuario", JSON.stringify(user));
  }

  function logout() {
    setUsuario(null);
    localStorage.removeItem("usuario");
  }

  return (
    <UserContext.Provider value={{ usuario, setUsuario, atualizarUsuario, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser deve ser usado dentro de UserProvider");
  }
  return context;
}