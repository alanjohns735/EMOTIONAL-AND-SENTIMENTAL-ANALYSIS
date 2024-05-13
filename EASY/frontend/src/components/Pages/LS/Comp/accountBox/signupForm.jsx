import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  LineText,
  SubmitButton,
  Select
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from './accountContext';
import axios from 'axios';
import { toast } from 'react-hot-toast';
export function SignupForm(props) {
  const [data, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
    password: '',
  });
  const handleInputChange = (e) => {
    setFormData({ ...data, [e.target.name]: e.target.value });
  };

  const registerUser = async (event) => {
    event.preventDefault();
    const {name,age,gender,email,password} = data
    console.log('Registration data:', data);
    try {
      const {data} = await  axios.post( 'http://localhost:3001/register',{
        name, email, password,age,gender
      })
      if(data.error) {
        toast.error(data.error)
      } else {
        setFormData({})
        toast.success('Registered successfully! Please Login to proceed.')
        switchToSignin();
      }
    } catch (error) {
      console.log(error)
    }
}
   
  const { switchToSignin } = useContext(AccountContext);
  return (
    <BoxContainer >
      <FormContainer onSubmit={registerUser}>
        <Input type="text" placeholder="name" name="name" value={data.name} onChange={handleInputChange}/>

        <Input type="number" placeholder="Age" name="age" value={data.age} onChange={handleInputChange}/>

        <Select name="gender" value={data.gender} onChange={handleInputChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </Select>
        
        <Input type="email" placeholder="Email" name="email" value={data.email} onChange={handleInputChange}/>

        <Input type="password" placeholder="Password" name="password" value={data.password} onChange={handleInputChange}/>
        <Marginer direction="vertical" margin={10} />
        <SubmitButton type="submit" >Signup</SubmitButton>
        <Marginer direction="vertical" margin="5px" />
      </FormContainer>
      
      
      
      <LineText>
        Already have an account?{" "}
        <BoldLink onClick={switchToSignin} href="#">
          Signin
        </BoldLink>
      </LineText>
    </BoxContainer>
  );
}