import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { ChakraProvider, Box, Input, Button, Center } from "@chakra-ui/react";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate()
   
    const submit = async (e) => {
        e.preventDefault();
    
        try {
          const result = await axios.post("https://zakarya.onrender.com/login", { email, password });setEmail('');setPassword('')
          console.log(result);
    
          if (result.data === "Success") {
            alert('succes')
            navigate('/');
          }
        } catch (error) {
          console.error("Error submitting the form:", error);
        }
      };
      

    return (
        <Center>
      <ChakraProvider>
       
        <Box p={8}>
          <Input
            placeholder="Email"
            mb={4}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            mb={4}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button colorScheme="blue" onClick={submit}>
            Login
          </Button>

          <Button colorScheme="blue" ml={2}>
            <Link to="/sinup">Signup</Link>
          </Button>
        </Box>
      </ChakraProvider>
    </Center>
    );
};

export default Login;




