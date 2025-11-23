import { Outlet } from "react-router-dom";
import HeaderUsuario from "./components/DashboardUsuario/HeaderUsuario";
import { useState } from "react";

export default function AppDashboardUsuario() {

  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen flex">
      <HeaderUsuario open={open} setOpen={setOpen} />
      <main className={`
        grow bg-tertiary-100 duration-300
        ${open ? "ml-[300px]" : "ml-[90px]"}
      `}>
          <Outlet />
      </main>
    </div>
);
}
