import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './globals.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/EvolvereApresentacao/Home/index.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx'
import Contato from './routes/EvolvereApresentacao/Contato/index.tsx'
import Integrantes from './routes/EvolvereApresentacao/Integrantes/index.tsx'
import CriarConta from './routes/EvolvereApresentacao/CriarConta/index.tsx'
import EntrarConta from './routes/EvolvereApresentacao/EntrarConta/index.tsx'
import Autenticacao from './routes/EvolvereApresentacao/Autenticacao/index.tsx'
import EsqueciSenha from './routes/EvolvereApresentacao/EsqueciSenha/index.tsx'
import RedefinirSenha from './routes/EvolvereApresentacao/RedefinirSenha/index.tsx'
import Error from './routes/EvolvereApresentacao/Error/index.tsx'
import AppDashboardUsuario from './AppDashboardUsuario.tsx'
import HomeUsuario from './routes/DashboardUsuario/HomeUsuario/index.tsx'
import { UserProvider } from './context/UserContext.tsx'

const router = createBrowserRouter([
  { 
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {path: "/", element: <Home />},
      {path: "/contato", element: <Contato />},
      {path: "/criarConta", element: <CriarConta />},
      {path: "/nossaEquipe", element: <Integrantes/>},
      {path: "/entrarConta", element: <EntrarConta/>},
      {path: "/autenticacao", element: <Autenticacao/>},
      {path: "/esqueciSenha", element: <EsqueciSenha/>},
      {path: "/redefinirSenha", element: <RedefinirSenha/>},
  ]},
  { 
    path: "/dashboardUsuario",
    element: <AppDashboardUsuario />,
    errorElement: "erro",
    children: [
      {path: "/dashboardUsuario", element: <HomeUsuario />},
  ]}
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
      </UserProvider>
  </StrictMode>,
)
