import './App.css'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter ,Route , Routes} from 'react-router-dom'
import Create from './components/Create'
import Edit from './components/Edit'


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
