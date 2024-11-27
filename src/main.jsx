import React from 'react'
import ReactDOM from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import "aos/dist/aos.css";

import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'




const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router}>
            
          </RouterProvider>
        </AuthProvider>
      </QueryClientProvider>
    </HelmetProvider>
    {/* <AuthProvider> 
    <RouterProvider router={router}>
    <Root></Root>
    </RouterProvider>
    </AuthProvider> */}
  </React.StrictMode>,
)
