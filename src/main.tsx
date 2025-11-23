import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './globals.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/index.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx'
import Contato from './routes/Contato/index.tsx'
import Integrantes from './routes/Integrantes/index.tsx'
import CriarConta from './routes/CriarConta/index.tsx'
import EntrarConta from './routes/EntrarConta/index.tsx'
import Autenticacao from './routes/Autenticacao/index.tsx'
import EsqueciSenha from './routes/EsqueciSenha/index.tsx'
import RedefinirSenha from './routes/RedefinirSenha/index.tsx'
import Error from './routes/Error/index.tsx'

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
  ]}
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
  </StrictMode>,
)
