import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './globals.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/index.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx'
import Contato from './routes/Contato/index.tsx'
import CriarConta from './routes/CriarConta/index.tsx'

const router = createBrowserRouter([
  { 
    path: "/",
    element: <App />,
    errorElement: "erro",
    children: [
      {path: "/", element: <Home />},
      {path: "/contato", element: <Contato />},
      {path: "", element: <CriarConta />},
  ]}
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
  </StrictMode>,
)
