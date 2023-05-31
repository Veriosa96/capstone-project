import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
//import LoginPage from './components/LoginPage/LoginPage';
import {BrowserRouter,Routes, Route } from "react-router-dom";
import RegisterPage from "./components/RegisterPage/RegisterPage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <LoginPage/> */}
      <RegisterPage/>
      <Routes> 
      <Route path="/RegisterPage" component={<RegisterPage/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
