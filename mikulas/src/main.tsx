import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.tsx'
import { Gifts } from './Gifts.tsx';
import { AddGiftToKid } from './AddGiftToKid.tsx';
import { Kids } from './Kids.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {index: true},
      {path: '/kids', Component: Kids},
      {path: '/gifts', Component: Gifts},
      {path: '/gifttokid', Component: AddGiftToKid},
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
