import React, { useState, useEffect } from "react";
import { Box, Button, Card, Grid, GridItem, Text } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

const Seatings = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { busName, price, fromCity, toCity, date, totalSeats, availableSeats } = location.state || {};
    
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setTotalPrice(selectedSeats.length * price);
    }, [selectedSeats, price]);

    const handleSeatClick = (seatNumber) => {
        if (availableSeats.includes(seatNumber)) {
            setSelectedSeats((prevSelected) =>
                prevSelected.includes(seatNumber)
                    ? prevSelected.filter((seat) => seat !== seatNumber)
                    : [...prevSelected, seatNumber]
            );
        }
    };

    const handleSubmit = () => {
        navigate("/user", { state: { selectedSeats, price, busName, fromCity, toCity, date, totalPrice } });
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
            height="100vh"
            pt="80px"
            paddingBottom="20px"
            boxSizing="border-box"
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
                <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="900">
                    Please Select Available Seats for Bus: {busName}
                </Text>
                <Text fontSize="md" mb="4">Price per seat: ₹{price}</Text>
                <Text fontSize="md" mb="4">Total Price: ₹{totalPrice}</Text>

                <Grid templateColumns="repeat(5, 1fr)" gap={4} mb="4">
                    {totalSeats && totalSeats.map((seat) => (
                        <GridItem key={seat}>
                            <Button
                                colorScheme={
                                    availableSeats.includes(seat) 
                                        ? (selectedSeats.includes(seat) ? "green" : "blue")
                                        : "red"
                                }
                                onClick={() => handleSeatClick(seat)}
                                width="100%"
                                disabled={!availableSeats.includes(seat)}
                            >
                                {seat}
                            </Button>
                        </GridItem>
                    ))}
                </Grid>

                <Button colorScheme="teal" onClick={handleSubmit}>
                    Confirm Selection
                </Button>
            </Card>
        </Box>
    );
};

export default Seatings;
