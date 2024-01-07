import './App.css'
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'
import { PasswordGenerator } from './project-pages'
import ProjectList from './ProjectList'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProjectList/>}/>
          <Route path="passwordGenerator" element={<PasswordGenerator />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
