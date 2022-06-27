import React, { useEffect } from "react";
import Header from "./Components/Navbar/Navbar"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Registration from "./Components/Registration/Registration";
import Login from "./Components/Login/Login";
import { useDispatch, useSelector} from "react-redux";
import {auth} from './actions/user';

function App() {
  const isAuth = useSelector(state => state.user.isAuth)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(auth())
  // }, [])
  return (
    <BrowserRouter>
      <div className="App">
      <Header/>
        {!isAuth &&
          <Routes>
            <Route path="/registration" element={<Registration/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        }
     </div>
    </BrowserRouter>
  
  );
}

export default App;
