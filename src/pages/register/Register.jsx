import { Link, useNavigate } from "react-router-dom";
import "./register.scss";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const [Error ,setError] = useState('');
  const [formData ,setFormData]  = useState({
    username:'',
    email:'',
    password:'',
    name:'',
  }) ;
  const handleFromData  = (e)=>{
    setFormData((prev=>{
      const {name ,value } =e.target ;
      return {...prev ,[name]:value}
    }));
  }
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1> SocialHub .</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
          <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input name="username" value={ formData.username} onChange={(e)=>{handleFromData(e)}} type="text" placeholder="Username" />
            <input name="email"    value={ formData.email} onChange={(e)=>{handleFromData(e)}} type="email" placeholder="Email" />
            <input name="password" value={ formData.password} onChange={(e)=>{handleFromData(e)}} type="password" placeholder="Password" />
            <input name="name"     value={ formData.name} onChange={(e)=>{handleFromData(e)}} type="text" placeholder="Name" />
            <button onClick={(e)=>{
              e.preventDefault();

              if(! formData.username) return setError('username is require')
              if(!formData.email ){
                return setError ('email is require .');
              }
              if(! formData.password) return setError('password is require')
              if(! formData.name) return setError('name is require')
              
              navigate('/');
              setError('');

            }}>Register</button>
          </form>
          <p className="errorMassage">{Error && Error}</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
