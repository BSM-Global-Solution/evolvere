import { Outlet } from "react-router-dom";
import HeaderUsuario from "./components/DashboardUsuario/HeaderUsuario";
import { useState } from "react";
import { useTheme } from "./context/ThemeContextBase";

export default function AppDashboardUsuario() {

  const { theme } = useTheme();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen flex">
      <HeaderUsuario open={open} setOpen={setOpen} />
      <main className={`
        ${open ? "ml-[300px]" : "ml-[90px]"}
        ${
          theme == "light"
          ? "bg-tertiary-100"
          : "bg-green-500"
        }
        grow  duration-300
      `}>
          <Outlet />
      </main>
    </div>
);
}
