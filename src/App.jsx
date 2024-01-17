import './App.css'
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'
import { CurrencyConverter, PasswordGenerator } from './project-pages'
import ProjectList from './components/ProjectList'
import Header from './components/Header'

function App() {

  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<ProjectList />} />
          <Route path="passwordGenerator" element={<PasswordGenerator />} />
          <Route path="currencyConverter" element={<CurrencyConverter />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
