import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './globals.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/index.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx'
import Integrantes from './routes/Integrantes/index.tsx'
import CriarConta from './routes/CriarConta/index.tsx'
import EntrarConta from './routes/EntrarConta/index.tsx'
import Autenticacao from './routes/Autenticacao/index.tsx'

const router = createBrowserRouter([
  { 
    path: "/",
    element: <App />,
    errorElement: "erro",
    children: [
      {path: "/", element: <Home />},
      {path: "/nossaEquipe", element: <Integrantes/>},
  ]},
  { 
    path: "/criarConta",
    element: <CriarConta />,
    errorElement: "erro",
    children: [
      {path: "", element: <CriarConta />}
  ]},
  { 
    path: "/entrarConta",
    element: <EntrarConta />,
    errorElement: "erro",
    children: [
      {path: "", element: <EntrarConta />}
  ]},
  { 
    path: "/autenticacao",
    element: <Autenticacao />,
    errorElement: "erro",
    children: [
      {path: "", element: <Autenticacao />}
  ]},
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
  </StrictMode>,
)
