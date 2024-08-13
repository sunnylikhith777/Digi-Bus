import { Box, Button, Card, Input, Select, Text, useToast } from '@chakra-ui/react';
import Bus from "../Assets/2.jpg";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [cities, setCities] = useState([]);
    const [loading, setLoading] = useState(false);
    const [warning, setWarning] = useState("");
    const [form, setForm] = useState({
        fromCity: "",
        toCity: "",
        date: ""
    });
    const navigate = useNavigate();
    const toast = useToast();

    const fetchCities = async () => {
        setLoading(true);
        try {
            const response = await axios.get("http://localhost:3000/Cities");
            setCities(response?.data);
            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    };

    const cityOptions = cities.map((city, index) => (
        <option key={index} value={city?.Name}>{city?.Name}</option>
    ));

    useEffect(() => {
        fetchCities();
    }, []);

    const handleSearch = () => {
        const { fromCity, toCity, date } = form;
        if (fromCity===toCity){
            toast({
                title: "Start And Destination Could Not be Same",
                description: "Start And Destination Could Not be Same",
                status: "warning",
                duration: 3000,
                isClosable: true,
            });

        }
                if (!fromCity || !toCity || !date) {
            setWarning("Please fill in all fields.");
            toast({
                title: "Incomplete Information",
                description: "Please select all required fields.",
                status: "warning",
                duration: 3000,
                isClosable: true,
            });
            return;
        }

        setWarning("");
        {fromCity!==toCity &&
        navigate('/buses', {
            state: { fromCity, toCity, date }
        });
    }
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
            height="100%"
            pt="80px"
            paddingBottom="20px"
            boxSizing="border-box"
        >
            <Text marginTop="10"fontSize={"45px"} fontWeight={"1400"} textColor={"teal"}>Welcome To DigiBus! Ride Together Into The Future</Text>
            <Card
                padding="6"
                gap={3}
                width={{ base: "90%", sm: "80%", md: "70%" }}
                display="flex"
                flexDirection="row"
                justifyContent="space-around"
                alignItems="center"
                // mb="4"
                marginTop={"30"}
                
               >
                <Select
                    name='From'
                    placeholder='From'
                    variant="outline"
                    width={{ base: "100%", sm: "auto", md: "35%" }}
                    value={form.fromCity}
                    onChange={(e) => setForm({ ...form, fromCity: e.target.value })}
                >
                    {cityOptions}
                </Select>
                <Select
                    name='To'
                    placeholder='To'
                    variant="outline"
                    width={{ base: "100%", sm: "auto", md: "35%" }}
                    value={form.toCity}
                    onChange={(e) => setForm({ ...form, toCity: e.target.value })}
                >
                    {cityOptions}
                </Select>
                <Input
                    type="date"
                    name='Date'
                    placeholder='Select Date'
                    variant="outline"
                    width={{ base: "100%", sm: "auto" }}
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                />
                <Button
                    padding="5"
                    width={{ base: "50%", sm: "20%" }}
                    borderRadius="15"
                    onClick={handleSearch}
                    backgroundColor={"rgba(19, 148, 242, 0.71)"}
                >
                   <Text fontSize={{ base: "sm", sm: "md", md: "lg" }}>Search Buses</Text> 
                </Button>
            </Card>
            {warning && <Text color="red.500" mt="4">{warning}</Text>}
            <Card
                padding="6"
                gap={3}
                width={{ base: "90%", sm: "80%", md: "70%" }}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                marginTop={"10"}
                background="linear-gradient(135deg, #a18cd1,#fad0c4)"
            >
                <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="900">
                    BOOK BUS TICKETS ONLINE
                </Text>
                <Text fontSize={{ base: "sm", md: "medium" }} fontWeight="200" textAlign="center">
                    DigiBus is India's largest brand for online bus ticket booking and offers an easy-to-use online bus and train ticket booking; with over 36 million satisfied customers, 3500+ bus operators to choose from, and plenty of offers on bus ticket booking, redBus makes road journeys super convenient for travellers. A leading platform for booking bus tickets, redBus has been the leader in online bus booking over the past 17 years across thousands of cities and lakhs of routes in India.Booking a bus ticket online on the redBus app or website is very simple. You can download the redBus app or visit redbus.in and enter your source, destination & travel date to check the top-rated bus services available. You can then compare bus prices, user ratings & amenities, select your preferred seat, boarding & dropping points and pay using multiple payment options like UPI, debit or credit card, net banking and more. With redBus, get assured safe & secure
                </Text>
            </Card>
        </Box>
    );
}

export default Home;
