import {useState} from "react";
import {useDispatch} from "react-redux";
import { Col, Container } from 'react-bootstrap';
import './LoginPage.css'
import { Link } from "react-router-dom";
// import RegisterPage from "../RegisterPage/RegisterPage";
// import { Link } from "react-router-dom";


function LoginPage () {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const dispatch = useDispatch();


const login = async () => {
  try {
    const res = await fetch ('http://localhost:8080/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
    const data = res.json();
    if (res.ok) {
      dispatch({type: 'LOGIN_SUCCESS', payload: data.token}); 
    
    } else {
      console.log("res not ok");
    }
  }
  catch (err) {
    console.log(err);
  }
}

const handleLogin = () => {
  dispatch(login(username, password));
}
return(
  <Container className="login">
    <Col className="avatar">
      </Col>
      <h2>Login</h2>
      <h3>Benvenuto!</h3>
      <form className="login-form">
        <div className="textbox">
          <input type="text" placeholder="Username" className='bg-light text-secondary'  id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
          <span className="icon material-symbols-outlined"> </span>
        </div>
        <div className="textbox">
          <input type="password" placeholder="Password" className='bg-light text-secondary' id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <span className="icon material-symbols-outlined"> </span>
        </div>
        <button type="submit" onClick={handleLogin}>LOGIN</button>
        <h6>Non hai un account?</h6>
        <Link to={"/RegisterPage"}>REGISTRATI</Link>
        
        <a href="/">Password dimenticata?</a>
      </form>
    </Container>
)
}

export default LoginPage




