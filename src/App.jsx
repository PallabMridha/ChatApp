
import './App.css'
  
import { Routes , Route } from 'react-router-dom';
import Routlayouts from './Components/layouts/Routlayouts';
import Home from './Components/pages/Home';
import Loging from './Components/pages/Loging';
import SingUP from './Components/pages/SingUP';
import Dasebord from './Components/pages/Dasebord';


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
