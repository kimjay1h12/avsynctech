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
          <Typography
            variant="h4"
            xs={{ fontSize: { xs: 45, lg: 40 } }}
            color="#f90a"
            fontWeight={700}
          >
            Smart <br />
            Comport & Convenient Lifestyle
          </Typography>
        }
        subtitle="Getting every task done seamlessly at your fingertips or voice commands to experience an amazing and productive smart automation solutions proffered by AVS Technologies Ltd as your best choice for both residential and commercial projects. "
        button1=" Get Started"
        button2=" See video"
        src="/img/homepage.jpeg"
      />
    </div>
  );
}

export default Header;
