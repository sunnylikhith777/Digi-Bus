import { Box, Button, Card, CardBody, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Buses = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { fromCity, toCity, date } = location.state || {};

    const [buses, setBuses] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchBuses = async () => {
        setLoading(true);
        try {
            const response = await axios.get("http://localhost:3000/Buses");
            setBuses(response?.data);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBuses();
    }, []);

    const handleBookNowClick = (bus) => {
        navigate('/seatings', { state: { 
            busId: bus.id, 
            busName: bus.Name, 
            price: bus.Price,
            fromCity, 
            toCity, 
            date ,
            availableSeats: bus.AvailableSeats,
            totalSeats:bus.TotalSeats
        } });
    };

    return (
        <Box
            flex="1"
            display="flex"
            gap={5}
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            width="100%"
            height="100%"
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
                    Here Are Your Available Buses!
                </Text>
                {loading ? (
                    <Text>Loading...</Text>
                ) : buses.length > 0 ? (
                    buses.map((bus) => (
                        <Card
                            key={bus.id}
                            padding="6"
                            shadow="md"
                            borderWidth="1px"
                            width={{ base: "80%", sm: "95%", md: "40%" }}
                            mb="4"
                        >
                            <CardBody>
                                <Text fontSize="lg" fontWeight="bold">
                                    Bus Name: {bus?.Name}
                                </Text>
                                <Text fontSize="md">Start: {fromCity}</Text>
                                <Text fontSize="md">Destination: {toCity}</Text>
                                <Text fontSize="md">Arrival Time: {bus?.Time}</Text>
                                <Text fontSize="md">Price: ${bus?.Price}</Text>
                            </CardBody>
                            <Button backgroundColor={"rgba(70, 172, 247, 0.8)"} onClick={() => handleBookNowClick(bus)}>
                                Book Now
                            </Button>
                        </Card>
                    ))
                ) : (
                    <Text>No Buses Available</Text>
                )}
            </Card>
        </Box>
    );
};

export default Buses;
