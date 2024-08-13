import React, { useState } from 'react';
import { Box, Card, Text, Button, Input, FormControl, FormLabel } from '@chakra-ui/react';
import Bus from '../Assets/2.jpg';

const Account = () => {
    // State to manage login status
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // State to manage form input values
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    // Handle input change
    const handleUsernameChange = (event) => setUsername(event.target.value);
    const handleEmailChange = (event) => setEmail(event.target.value);

    // Handle form submission
    const handleLogin = () => {
        // Implement login logic here
        console.log('Login with', { username, email });
        // For now, let's just set the user as logged in
        setIsLoggedIn(true);
    };

    return (
        <Box
            flex="1"
            display="flex"
            gap={5}
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            backgroundImage={`url(${Bus})`}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            width="100%"
            height="100vh"
            pt="80px"
            paddingBottom="20px"
            boxSizing="border-box"
        >
            {isLoggedIn ? (
                <Card
                    padding="6"
                    gap={3}
                    width={{ base: "90%", sm: "80%", md: "70%" }}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="900">
                        Bookings
                    </Text>
                    {/* Add more content for the bookings card here */}
                </Card>
            ) : (
                <Card
                    padding="6"
                    gap={3}
                    width={{ base: "90%", sm: "80%", md: "40%" }}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    
                >
                    <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="900">
                        Login
                    </Text>
                    <FormControl id="username" mb="4">
                        <FormLabel>Username</FormLabel>
                        <Input
                            type="text"
                            value={username}
                            onChange={handleUsernameChange}
                            placeholder="Enter your username"
                        />
                    </FormControl>
                    <FormControl id="email" mb="4">
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Enter your email"
                        />
                    </FormControl>
                    <Button
                        colorScheme="teal"
                        onClick={handleLogin}
                    >
                        Sign Up
                    </Button>
                </Card>
            )}
        </Box>
    );
};

export default Account;
