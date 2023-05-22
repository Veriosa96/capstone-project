import { Col, Container } from 'react-bootstrap';
import './LoginPage.css'


function LoginPage () {
return(
  <Container className="login">
    
    <Col className="avatar">
      </Col>
      <h2>Login</h2>
      {/* rendere dinamico il Bentornato */}
      <h3>Bentornato!</h3>

      <form class="login-form">
        <div class="textbox">
          <input type="email" placeholder="Username/Email" className='bg-light text-secondary' />
          <span class="icon material-symbols-outlined"> </span>
        </div>
        <div class="textbox">
          <input type="password" placeholder="Password" className='bg-light text-secondary' />
          <span class="icon material-symbols-outlined"> </span>
        </div>
        <button type="submit">LOGIN</button>
        <a href="/">Password dimenticata?</a>
      </form>
    </Container>
)
}

export default LoginPage




