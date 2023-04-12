
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import Accueil from './Component/Routage/Accueil';
import Guide from './Component/Routage/Guide';
import Loi from './Component/Routage/Loi';
import Maroccain from './Component/Routage/Maroccain';
import Services from './Component/Routage/Services';

function App() {
  return (
    <div className="App">
      
      <div className='lien'>
        <Routes>
          <Route path='/' element={<Accueil/>}/>
          <Route path='/about' element={<Guide/>}/>
          <Route path='/Services' element={<Services/>}/>
          <Route path='/Maroccain' element={<Maroccain/>}/>
          <Route path='/Maroccain' element={<Loi/>}/>
        </Routes>
      </div>
            <Navbar />
       
    
     
    </div>
  );
}

export default App;
