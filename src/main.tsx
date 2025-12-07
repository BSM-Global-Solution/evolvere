import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './globals.css'
import Home from './routes/EvolvereApresentacao/Home/index.tsx'
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
import Mentores from './routes/EvolvereApresentacao/Mentores/index.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { UserProvider } from './context/UserContext.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx'

const router = createBrowserRouter([
  { 
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {path: "/", element: <Home />},
      {path: "/contato", element: <Contato />},
      {path: "/nossaEquipe", element: <Integrantes/>},
      {path: "/autenticacao", element: <Autenticacao/>},
      {path: "/esqueciSenha", element: <EsqueciSenha/>},
      {path: "/redefinirSenha", element: <RedefinirSenha/>},
      {path: "/mentores", element: <Mentores />},
  ]},
  { 
    path: "/dashboardUsuario",
    element: <AppDashboardUsuario />,
    errorElement: "erro",
    children: [
      {path: "/dashboardUsuario", element: <HomeUsuario />},
  ]},
  { 
    path: "/entrarConta",
    element: <EntrarConta />,
    errorElement: <Error />,
    children: [
      {path: "/entrarConta", element: <EntrarConta />},
  ]},
  { 
    path: "/criarConta",
    element: <CriarConta />,
    errorElement: <Error />,
    children: [
      {path: "/criarConta", element: <CriarConta />},
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
