import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import './pages.css';
import { useNavigate, Link, Route, Routes } from "react-router-dom";
import Home from "./home";
import { fakeAuthProvider } from '../Auth';

export default function Login() {
  const [user, setUser] = useState({ username: '', password: '' });

  let navigate = useNavigate();

  const handleChange = (event: any) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
  }

  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }

  const [isLoading, setLoading] = useState(false);

  const sentLogin = (event: any) => {
    //event.preventDefault();
    console.log('Welcome ', user.username)
  }

  useEffect(() => {
    if (isLoading && user) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
        sentLogin(user)
      });
    }
  }, [isLoading]);

  return (
    <>
      <Container className="login">
      <form>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="floatingInput" placeholder="username" name="username" onChange={handleChange} />
          <label htmlFor="floatingInput">Username</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password" onChange={handleChange} />
          <label htmlFor="floatingPassword">Password</label>
        </div>
      </form>

      <Link to="home" >
        <button className="btn-purpel btn-lg" type="submit" >
          Login
        </button>
      </Link>
    </Container>
    </>
  )
}