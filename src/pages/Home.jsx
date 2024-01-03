import {
  Box,
  Container,
  Tab,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  TabList,
} from "@chakra-ui/react";
import React from "react";
import Login from "../Component/Login";
import Signup from "../Component/Signup";

const Home = () => {
  return (
    <>
      <Container maxW="xl" centerContent>
        <Box
          d="flex"
          w={"100%"}
          justifyContent="center"
          padding={5}
          bg={"white"}
          m="40px 0 15px 0"
          borderRadius={"lg"}
          borderWidth={"1px"}
        >
          <Text fontSize={"4xl"} fontFamily={"work sans"}>
            Chat-With-Close
          </Text>
        </Box>
        <Box
          bg={"white"}
          w={"100%"}
          p={4}
          borderRadius={"lg"}
          borderWidth={"1px"}
        >
          <Tabs variant="soft-rounded">
            <TabList mb={"1em"}>
              <Tab width={"50%"}>Login</Tab>
              <Tab width={"50%"}>Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <Signup />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </>
  );
};

export default Home;
