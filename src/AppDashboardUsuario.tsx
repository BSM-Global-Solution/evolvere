import { Outlet } from "react-router-dom";
import HeaderUsuario from "./components/DashboardUsuario/HeaderUsuario";

export default function AppDashboardUsuario() {
  return (
    <div className="min-h-screen flex">
      <HeaderUsuario />
      <main className="grow">
          <Outlet />
      </main>
    </div>
);
}
