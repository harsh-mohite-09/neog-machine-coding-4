import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import SideBarRight from "./SideBarRight";
import { Outlet } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";

const RootLayout = () => {
  return (
    <Grid
      minH="100vh"
      templateColumns="1fr 3fr 1fr"
      templateRows="56px 1fr"
      templateAreas={`"header header header"
              "nav main aside"`}
    >
      <GridItem as={"header"} area="header" pos="sticky" top="0" zIndex="5">
        <Header />
      </GridItem>
      <GridItem as={"nav"} area="nav" bg="#F7F7F7">
        <Navbar />
      </GridItem>
      <GridItem
        scrollBehavior="smooth"
        as={"main"}
        area="main"
        overflowY="auto"
        bg="#F7F7F7"
      >
        <Outlet />
      </GridItem>
      <GridItem as={"aside"} area={"aside"} bg="#F7F7F7">
        <SideBarRight />
      </GridItem>
    </Grid>
  );
};

export default RootLayout;
