import { Box, Link } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from 'react-router-dom';
import { FaBus } from 'react-icons/fa'; // Import the bus icon

const Header = () => {
  return (
    <Box
      as="header"
      position="fixed"
      top="0"
      left="0"
      right="0"
      width="100%"
      padding="4"
      backgroundColor="teal"
      color="white"
      textAlign="center"
      zIndex="1000"
      display="flex"
      flexDirection="row"
      justifyContent="space-between" // Change to space-between to push items to the edges
      alignItems="center"
      boxShadow="md"
    >
      <Box
        display="flex"
        alignItems="center"
        marginLeft="4" // Adjust margin as needed
      >
        <FaBus size="28px" color="white" />
        <Box marginLeft="2"> {/* Adjust space between icon and text */}
          <Link
            as={RouterLink}
            to="/"
            color="white"
            _hover={{ color: "gray.300" }}
            fontWeight="bold"
          >
            DigiBus!
          </Link>
        </Box>
      </Box>

      <Box>
        <Link
          as={RouterLink}
          to="/"
          background="gray.300"
          marginLeft="5"
          padding="2"
          borderRadius="5"
          width={{ md: "90px", sm: "80px", base: "90px" }}
          color="black"
          _hover={{ background: "gray.500", color: "white" }}
        >
          Home
        </Link>
        {/* <Link
          as={RouterLink}
          to="/bookings"
          background="gray.300"
          marginLeft="5"
          padding="2"
          borderRadius="5"
          width={{ md: "90px", sm: "80px", base: "90px" }}
          color="black"
          _hover={{ background: "gray.500", color: "white" }}
        >
          Bookings
        </Link> */}
        <Link
          as={RouterLink}
          to="/help"
          background="gray.300"
          marginLeft="5"
          padding="2"
          borderRadius="5"
          width={{ md: "90px", sm: "80px", base: "90px" }}
          color="black"
          _hover={{ background: "gray.500", color: "white" }}
        >
          Help
        </Link>
        <Link
          as={RouterLink}
          to="/account"
          background="gray.300"
          marginLeft="5"
          padding="2"
          borderRadius="5"
          width={{ md: "90px", sm: "80px", base: "90px" }}
          color="black"
          _hover={{ background: "gray.500", color: "white" }}
        >
          Account
        </Link>
      </Box>
    </Box>
  );
};

export default Header;
