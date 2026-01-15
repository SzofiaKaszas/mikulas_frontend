import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.tsx'
import { MikulasProvider } from './context/mikulasContext.tsx';
import { Kids } from './components/Kids.tsx';
import { Gifts } from './components/Gifts.tsx';
import { AddGiftToKid } from './components/AddGiftToKid.tsx';
import { CreateGift } from './components/CreateGift.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {index: true, Component: Kids},
      {path: '/kids', Component: Kids},
      {path: '/gifts', Component: Gifts},
      {path: '/creategift', Component: CreateGift},
      {path: '/gifttokid', Component: AddGiftToKid},
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MikulasProvider>
    <RouterProvider router={router} />
    </MikulasProvider>
  </StrictMode>,
)
