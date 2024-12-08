import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { createBrowserRouter, RouterProvider as Router } from "react-router-dom"
// import { routes } from "./routes.tsx"
import { Provider } from "react-redux"
import { store } from "./app/store.ts"
import App from './App.tsx'
// const router = createBrowserRouter(routes)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      {/* <Router router={ router }/> */}
      <App />
    </Provider>
  </StrictMode>,
)
