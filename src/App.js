import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import LoginPage from './components/LoginPage/LoginPage';
import {BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Routes> */}
      <LoginPage/>
      {/* </Routes> */}
      </BrowserRouter>
      
    </div>
  );
}

export default App;