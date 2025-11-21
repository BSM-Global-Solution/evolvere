import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './globals.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/index.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx'
<<<<<<< HEAD
import Contato from './routes/Contato/index.tsx'
=======
import CriarConta from './routes/CriarConta/index.tsx'
>>>>>>> 765d1ebb041380658e9db154943d2f676ca109a5

const router = createBrowserRouter([
  { 
    path: "/",
    element: <App />,
    errorElement: "erro",
    children: [
      {path: "/", element: <Home />},
<<<<<<< HEAD
      {path: "/contato", element: <Contato />},
  ]}
=======
  ]},
  { 
    path: "/criarConta",
    element: <CriarConta />,
    errorElement: "erro",
    children: [
      {path: "", element: <CriarConta />}
  ]},
>>>>>>> 765d1ebb041380658e9db154943d2f676ca109a5
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
  </StrictMode>,
)
