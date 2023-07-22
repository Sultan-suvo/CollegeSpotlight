import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import AuthProvider from './Providers/AuthProvider.jsx'

// eslint-disable-next-line react-refresh/only-export-components
const MaxWidthContainer = ({ children }) => {
  return (
    <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
      {children}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <React.StrictMode>
      <MaxWidthContainer>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </MaxWidthContainer>
    </React.StrictMode>
  </div>,
)
