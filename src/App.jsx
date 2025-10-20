
import './App.css'
  
import { Routes , Route } from 'react-router-dom';
import Routlayouts from './components/layouts/Routlayouts';
import Home from './components/pages/Home';
import Loging from './components/pages/Loging';
import SingUP from './components/pages/SingUP';
import Dasebord from './components/pages/Dasebord';


function App() {
  

  return (
    <>
      <Routes>
   

       <Route path="/" element={<Routlayouts/>}> 
         <Route path='/' element={<Home/>} />
         <Route path='/loging' element={<Loging/>} />
         <Route path='/singup' element={<SingUP/>} />
         <Route path='/dasebord' element={<Dasebord/>} />
         
         
         
       </Route>
   
        </Routes>
    </>
  )
}

export default App
