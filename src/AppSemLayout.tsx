import { Outlet } from "react-router-dom";

export default function NoLayout() {
  return (
    <main>
        <Outlet />
    </main>
);
}
