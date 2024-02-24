import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './components/Home';
import { createContext, useState } from 'react';

export const AppContext = createContext();

const AppProvider = ({children}) => {
  const [user,setUser] = useState([{
    mail:"",
    password: ""
  }])

  return(

  <AppContext.Provider value={{user,setUser}}>
    {children}
  </AppContext.Provider>
  )
}
function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
            <Route path='' element={<Home />}/>
          </Routes>
      </AppProvider>
    </BrowserRouter>
  )
}

export default App
