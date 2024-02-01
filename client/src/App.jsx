import Students from './Components/students'
import FormStudent from './Components/add-student'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <> 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Students />} /> 
          <Route path='/add-students' element={<FormStudent />} /> 
        </Routes>
    </BrowserRouter>      
    </>
  )
}

export default App
