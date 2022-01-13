import { Route , Routes} from 'react-router-dom';
import './App.css';
import Navigation from './Component/Navigation';
import Home from './Component/Home';
import List from './Component/List';
import Details from './Component/Details';
import { useState } from 'react';

function App() {
 
  
  const [login,setlogin]=useState(false)
  return (
    <div className="App">
      <Navigation login={login} setlogin={setlogin} />
      <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path= '/users' element={ <List login={login} />} />
      <Route path= '/details/:id'
      element={<Details login={login}/>}
      />
      </Routes>
      
    </div>
  );
}

export default App;
