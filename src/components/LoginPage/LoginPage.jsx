import {useState} from "react";
import {useDispatch} from "react-redux";
import { Col, Container } from 'react-bootstrap';
import './LoginPage.css'


function LoginPage () {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const dispatch = useDispatch();


const login = async () => {
  try {
    const res = await fetch ('http://localhost:5432/capstone_project/login', {
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
      <form class="login-form">
        <div class="textbox">
          <input type="email" placeholder="Username" className='bg-light text-secondary'  id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
          <span class="icon material-symbols-outlined"> </span>
        </div>
        <div class="textbox">
          <input type="password" placeholder="Password" className='bg-light text-secondary' id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <span class="icon material-symbols-outlined"> </span>
        </div>
        <button type="submit" onClick={handleLogin}>LOGIN</button>
        <a href="/">Password dimenticata?</a>
      </form>
    </Container>
)
}

export default LoginPage




