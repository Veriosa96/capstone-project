
import {useState} from "react";
import {useDispatch} from "react-redux";
import { Col, Container } from 'react-bootstrap';
import './RegisterPage.css'

function RegisterPage () {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    
    
    const register = async () => {
    try {
        const res = await fetch ('http://localhost:8080/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
        })
        const data = res.json();
        if (res.ok) {
        dispatch({type: 'SIGNUP_SUCCESS', payload: data.token}); 
        
        } else {
        console.log("res not ok");
        }
    }
    catch (err) {
        console.log(err);
    }
    }
    
    const handleRegister = () => {
    dispatch(register(username, password));
    }
    return(
    <Container className="register">
        <Col className="avatar">
        </Col>
        <h2>Registrati</h2>
        <h3>Benvenuto!</h3>
        <form className="register-form">
            <div className="textbox">
            <input type="text" placeholder="nome" className='bg-light text-secondary mb-2'  id="nome" value={name} onChange={(e) => setName(e.target.value)}/>
            <span className="icon material-symbols-outlined"> </span>
            <input type="text" placeholder="cognome" className='bg-light text-secondary mb-2'  id="cognome" value={surname} onChange={(e) => setSurname(e.target.value)}/>
            <span className="icon material-symbols-outlined"> </span>
            <input type="text" placeholder="Username" className='bg-light text-secondary mb-2'  id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <span className="icon material-symbols-outlined"> </span>
        <input type="email" placeholder="email" className='bg-light text-secondary mb-2'  id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <span className="icon material-symbols-outlined"> </span>
            </div>
            <div className="textbox">
            <input type="password" placeholder="Password" className='bg-light text-secondary' id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <span className="icon material-symbols-outlined"> </span>
            </div>
            <button type="submit" onClick={handleRegister}>Completa la registrazione!</button>
        </form>
        </Container>
    )
    }

    export default RegisterPage;
