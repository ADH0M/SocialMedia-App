import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData ,setFromData ]  = useState({
    username:'',
    password:'',
  });
  const [error ,setError] =useState('');
  const handleLogin = (e) => {
    e.preventDefault();
    if(!formData.username)return setError('username is require');
    if(!formData.password)return setError('password is require');

    login();    
    navigate('/');
  };

  const handleChange =(e)=>{

    return setFromData((prev)=>{
      const {name ,value } =e.target;
      return {...prev ,[name]:value};
    });
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello .</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input name="username" value={ formData.name }     onChange={ (e)=>{handleChange(e) }} type="text" placeholder="Username" className="inputs" />
            <input name="password" value={ formData.password } onChange={ (e)=>{handleChange(e) }} type="password" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
          </form>
          <p className="errorMassage">{error && error}</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
