import { Box, Card, Text } from "@chakra-ui/react";
import React from "react";
import Bus from "../Assets/2.jpg";

const Bookings = () => {
    return (
        <>
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
                >
                    <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="900">
                        Here Are Your Bookings! 
                    </Text>
                </Card>
            </Box>
        </>
    )
}
export default Bookings