import React, { useState } from 'react';
import {
  Box,
  Button,
  ChakraProvider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack
  
} from '@chakra-ui/react';
import axios from 'axios';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || password !== confirmPassword) {
      setError('Please fill in all fields and make sure passwords match.');
      return;
    }

    try {
      await axios.post('https://zakarya.onrender.com/sign', {
        name: name,
        email: email,
        password: password,
        
      });

      // Reset form and error state after successful signup
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setError('');

      alert('Success');
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <VStack
    justifyContent="center"
    alignItems="center"
    width="100%"
  >
    <ChakraProvider>
      <Box
        p={8}
        width={{ base: '100%', md: '50%' }} // Adjust the width based on screen size
        borderWidth={1}
        borderRadius="md"
        boxShadow="lg"
        mt={8}
      >
        <VStack spacing={4} width="100%">
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <FormControl isRequired isInvalid={error !== ''} width="100%">
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                width="100%"
              />
            </FormControl>

            <FormControl isRequired mt={4} width="100%">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                width="100%"
              />
            </FormControl>

            <FormControl isRequired mt={4} width="100%">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                width="100%"
              />
            </FormControl>

            <FormControl isRequired mt={4} width="100%">
              <FormLabel>Confirm Password</FormLabel>
              <Input
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                width="100%"
              />
            </FormControl>

            <FormErrorMessage mt={4}>{error}</FormErrorMessage>

            <Button type="submit" colorScheme="telegram" width="100%" mt={4}>
              Sign Up
            </Button>
          </form>
        </VStack>
      </Box>
    </ChakraProvider>
  </VStack>
  

  );
};

export default Signup;
