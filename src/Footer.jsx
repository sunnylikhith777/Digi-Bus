import { Box, Card, Text, Link } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
    return (
        <Box
            as="footer"
            width="100%"
            padding="4"
            backgroundColor="gray.700"
            color="white"
            textAlign="center"
            borderTopWidth="2px"
            borderColor="gray.600"
            display="flex"
            flexDirection={{ base: "column", md: "row" }} 
            justifyContent="space-evenly"
            alignItems="flex-start"
            gap="4"
        >
            <Card
                width={{ base: "100%", md: "18%" }}
                padding="4"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <Text fontWeight="700" fontSize="larger">About Us</Text>
                <Link href="#" fontWeight="100" color="blue">About Digi Bus</Link>
                <Link href="#" fontWeight="100"color="blue">Contact Us</Link>
                <Link href="#" fontWeight="100"color="blue">Offers</Link>
                <Link href="#" fontWeight="100"color="blue">Careers</Link>
                <Link href="#" fontWeight="100"color="blue">Values</Link>
            </Card>
            <Card
                width={{ base: "100%", md: "18%" }} 
                padding="4"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <Text fontWeight="700" fontSize="larger">Info</Text>
                <Link href="#" fontWeight="100"color="blue">T&C</Link>
                <Link href="#" fontWeight="100"color="blue">Privacy Policy</Link>
                <Link href="#" fontWeight="100"color="blue">FAQ</Link>
                <Link href="#" fontWeight="100"color="blue">Blogs</Link>
                <Link href="#" fontWeight="100"color="blue">User Agreement</Link>
            </Card>
            <Card
                width={{ base: "100%", md: "18%" }} 
                padding="4"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <Text fontWeight="700" fontSize="larger">Global Sites</Text>
                <Link href="#" fontWeight="100"color="blue">Singapore</Link>
                <Link href="#" fontWeight="100"color="blue">USA</Link>
                <Link href="#" fontWeight="100"color="blue">Canada</Link>
                <Link href="#" fontWeight="100"color="blue">Indonesia</Link>
                <Link href="#" fontWeight="100"color="blue">China</Link>
            </Card>
        </Box>
    );
};

export default Footer;
