import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PrimeReactProvider } from 'primereact/api'
// import './index.css'
import 'primereact/resources/themes/lara-light-cyan/theme.css'
import 'primeicons/primeicons.css'
import './custonPrime.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrimeReactProvider config={{}}>
      <App />
    </PrimeReactProvider>
  </StrictMode>,
)
