import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import App from './App.tsx'
import { MikulasProvider } from './context/mikulasContext.tsx';
import { Kids } from './components/Kids.tsx';
import { Gifts } from './components/Gifts.tsx';
import { CreateGift } from './components/CreateGift.tsx';
import { DeleteGiftFromKid } from './components/DeleteGiftFromKid.tsx';
import { AddGiftToKid } from './components/AddGiftToKid.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

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
      {path: '/giftdeletefromkid', Component: DeleteGiftFromKid},
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
