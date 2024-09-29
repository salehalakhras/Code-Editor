import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Auth from './Routes/Auth.tsx';
import Landing from './Routes/Landing.tsx';
import ErrorPage from './Routes/ErrorPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/auth",
    element: <Auth/>
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
