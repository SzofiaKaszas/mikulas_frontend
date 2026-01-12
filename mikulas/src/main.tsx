import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {index: true},
      {path: '/gifts', Component: Main},
      {path: '/gifttokid', Component: About},
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
