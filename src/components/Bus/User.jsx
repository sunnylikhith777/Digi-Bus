import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Box, Button, Card, Input, FormLabel, useToast, Text } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

const User = () => {
    const form = useRef();
    const toast = useToast();
    const location = useLocation();
    const { selectedSeats, price, busName, fromCity, toCity, date, totalPrice } = location.state || {};

    const [seatsData, setSeatsData] = useState(
        selectedSeats.map(seat => ({ seat, name: '', email: '' }))
    );

    const handleInputChange = (index, field, value) => {
        const newSeatsData = [...seatsData];
        newSeatsData[index][field] = value;
        setSeatsData(newSeatsData);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        // Validate email addresses
        const invalidEmails = seatsData.filter(data => !/\S+@\S+\.\S+/.test(data.email));
        if (invalidEmails.length > 0) {
            toast({
                title: 'Invalid email address(es).',
                description: 'Please enter valid email addresses for all selected seats.',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
            return;
        }

        seatsData.forEach(({ name, email, seat }) => {
            const message = `
                Bus: ${busName}
                From: ${fromCity}
                To: ${toCity}
                Date: ${date}
                Total Price: ₹${totalPrice}
                Selected Seat: ${seat}
                Price per seat: ₹${price}
            `;

            emailjs
                .send('service_6hq62yp', 'template_pe56ish', {
                    to_name: name,
                    to_email: email,
                    message,
                }, '1tOYO6qEeXxECEKRS')
                .then(
                    () => {
                        toast({
                            title: `Email sent to ${email} successfully.`,
                            status: 'success',
                            duration: 5000,
                            isClosable: true,
                        });
                    },
                    (error) => {
                        toast({
                            title: `Failed to send email to ${email}.`,
                            description: error.text,
                            status: 'error',
                            duration: 5000,
                            isClosable: true,
                        });
                    }
                );
        });
    };

    return (
        <Box
            flex="1"
            display="flex"
            gap={5}
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            width="100%"
            height="100%"
            pt="80px"
            paddingBottom="20px"
            boxSizing="border-box"
            backgroundColor="rgba(62, 57, 58, 0.54)"
        >
            <Card
                padding="6"
                gap={3}
                width={{ base: "90%", sm: "80%", md: "70%" }}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                background="linear-gradient(135deg, #a18cd1,#fad0c4)"
            >
                <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="900">Please Enter Your Details</Text>
                <form ref={form} onSubmit={sendEmail}>
                    {seatsData.map((data, index) => (
                        <Box key={index} mb="4">
                            <Text mb="2" fontWeight="bold" fontSize="lg">Seat: {data.seat}</Text>
                            <FormLabel htmlFor={`name_${index}`}>Name</FormLabel>
                            <Input
                                type="text"
                                name={`name_${index}`}
                                id={`name_${index}`}
                                value={data.name}
                                onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                                required
                            />

                            <FormLabel htmlFor={`email_${index}`}>Email</FormLabel>
                            <Input
                                type="email"
                                name={`email_${index}`}
                                id={`email_${index}`}
                                value={data.email}
                                onChange={(e) => handleInputChange(index, 'email', e.target.value)}
                                required
                            />
                        </Box>
                    ))}

                    <Button type="submit" mt="4" colorScheme="teal">
                        Submit
                    </Button>
                </form>
            </Card>
        </Box>
    );
};

export default User;
