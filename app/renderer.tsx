import React from 'react'
import ReactDOM from 'react-dom/client'
import appIcon from '@/resources/build/icon.png'
import { WindowContextProvider, menuItems } from '@/lib/window'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './app'
import './styles/app.css'
import WelcomeKit from './pages/WelcomeKit'
import Dashboard from './pages/Dashboard'
import Charts from './pages/Charts'
import Table from './pages/Table'

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <WindowContextProvider
      titlebar={{ title: 'Electron React App', icon: appIcon, menuItems }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Dashboard />} />
            <Route path="home" element={<WelcomeKit />} />
            <Route path="charts" element={<Charts />} />
            <Route path="table" element={<Table />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </WindowContextProvider>
  </React.StrictMode>
)
