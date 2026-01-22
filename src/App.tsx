import "./App.css"
import { BrowserRouter } from "react-router-dom"
import Router from "./Router"
import MainLayout from "./Layout/MainLayout"

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Router />
      </MainLayout>
    </BrowserRouter>
  )
}
