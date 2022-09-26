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
          <Typography variant="h4" color="#fff" fontWeight={700}>
            Smart <br />
            Comport & Convenient Lifestyle
          </Typography>
        }
        subtitle="We design and install smart automation that will control everything in your home or office space which offer multiple optional designs and cutting=edge technologies
We use products from top rated brands that has great reputation for reliability, seamlessly integration with other devices like Google, Alexa and Siri. "
        button1=" Get Started"
        button2=" See video"
        src="/img/homepage.jpeg"
      />
    </div>
  );
}

export default Header;
