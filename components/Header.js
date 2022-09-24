import { Rowing } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import HeaderCard from "./HeaderCard";

import React from "react";
import Animator from "./Animator";

function Header() {
  return (
    <div>
      <HeaderCard
        height="100vh"
        variant="slide"
        title={
          <Typography variant="h2" color="#fff" fontWeight={700}>
            Get a<br /> Smater Life
            <br /> with us
          </Typography>
        }
        subtitle=" Our smart products are compatible with tens of thousands of other
              devices and can be seamlessly integrated with popular platforms
              like Google, Alexa, and Siri. Our smart products are compatible
              with tens of thousands of other devices and can be seamlessly
              integrated with popular platforms like Google, Alexa, and Siri."
        button1=" Get Started"
        button2=" See video"
        src="/img/homepage.jpeg"
      />
    </div>
  );
}

export default Header;
