import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  LineText,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from './accountContext';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../../../../context/userContext";

export function LoginForm(props) {
  const { setIsLoggedIn } = useAuth();
  const [data, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    setFormData({ ...data, [e.target.name]: e.target.value });
  };
  const loginUser = async (event) => {
    event.preventDefault();
    
    const {email, password} = data
    try {
      const response = await axios.post('http://localhost:3001/login', {
        email,
        password
      })
      console.log("Login response:", response);
      const { data } = response;
     // Log the entire response to check its structure
      if(data.error) {
        toast.error(data.error)
      }else {
        setFormData({});
        localStorage.setItem('authToken', data._id);
        toast.success('Login successfull! Lets begin the Journey...')
        setIsLoggedIn(true);
        navigate('/')
      }

    } catch (error) {
      console.log(error);
    }
 
}
  const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer onSubmit={loginUser}>
        <Input type="email" placeholder="Email" name="email" value={data.email} onChange={handleInputChange}/>
        <Input type="password" placeholder="Password" name="password" value={data.password} onChange={handleInputChange}/>
        <Marginer direction="vertical" margin={10} />

      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" >Signin</SubmitButton>
      <Marginer direction="vertical" margin="5px" />
      </FormContainer>
      <LineText>
        Don't have an accoun?{" "}
        <BoldLink onClick={switchToSignup} href="#">
          Signup
        </BoldLink>
      </LineText>
    </BoxContainer>
  );
}