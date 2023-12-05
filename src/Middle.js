import React from 'react';
import { Flex, Image, Text, Box } from '@chakra-ui/react';
import img from './cat.jpg';
import Card from './card';

function Middle() {
  return (
    <Flex  align="center" justify="center" style={{flexWrap:'wrap'}}>
      <Box>
        <Image border="2px black solid"borderRadius="3px" height="400px" style={{ margin: '20px' }} width="300px" src={img} alt="Cat" />
      </Box>

      <Box ml={{ base: '0', md: '20px' }}>
        <Text mt={2} fontWeight="bold" fontSize="lg">
          Petbu
        </Text>
        <Text maxW="250px">
          Produces quality with the needs of cats in mind. Petbu posts and cat trees provide
          comfort and safety for your pet. We use a strong frame, thick winding ropes, durable
          material, first-class.
        </Text>
      </Box>

      <Card />
    </Flex>
  );
}

export default Middle;
