import {
  Button,
  Card,
  Checkbox,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React from "react";
import Animator from "../../components/Animator";
import Map from "../../components/Map";
import { Mail, Rowing } from "@mui/icons-material";
import {
  AccountCircle,
  ArrowDropDown,
  Email,
  Password,
  Phone,
} from "@mui/icons-material";
import MainLayout from "../../layouts/MainLayout";
import { makeStyles } from "@mui/styles";
import Card1 from "../../components/Card1";
import Footer from "../../components/Footer";
import ContactUs from "../../components/Contactus";
const headerimg = "/img/contactheader.png";
const UseStyles = makeStyles({
  root: {
    marginTop: 100,
    transition: "0.5s",

    "& .MuiGrid-container": {
      padding: 10,

      ["@media (min-width : 1200px)"]: {
        paddingLeft: 120,
        paddingRight: 120,
        gap: "180px",
      },
    },
    "& .MuiGrid-item": {
      marginTop: 120,

      ["@media (min-width : 1200px)"]: {
        marginTop: 0,
      },
    },
  },
});
function index() {
  const classes = UseStyles();
  return (
    <MainLayout title="Contact Us" description="Beep Us with Your messages">
      {" "}
      <div className="" style={{ background: "#000" }}>
        <header
          style={{
            height: "80vh",

            backgroundImage: `url(${headerimg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" fontSize={35} fontWeight={700} color="#f90a">
            Contact Us
          </Typography>
          <Typography variant="caption" color="#fff" fontSize={14}>
            Holla There We Wish To Hear From You
          </Typography>
        </header>
        <section>
          <ContactUs />
          <Grid
            container
            mt={10}
            sx={{
              background: "linear-gradient(to bottom,  #f90a , #111)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",

                height: "100%",
              }}
            >
              <Grid container md={12} sx={{ padding: { xs: 2, md: 11 } }}>
                <Grid item xs={12} md={5.6} lg={5.6}>
                  <Typography
                    variant="h4"
                    fontSize={35}
                    color="#fff"
                    fontWeight={700}
                    mt={2}
                  >
                    Advantage of using Smart Home Technologies
                  </Typography>
                  <Typography variant="caption" color="#fff" fontSize={14}>
                    Smart Automation Technologies solutions enables your home or
                    office to automatically respond to your lifestyle.
                  </Typography>
                </Grid>
              </Grid>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Grid
                container
                xs={12}
                md={12}
                lg={12}
                gap={1}
                alignItems="center"
                justifyContent="center"
                size="large"
                marginTop="-2%"
                mb={5}
                sx={{
                  paddingLeft: { xs: 2, md: 10 },
                  paddingRight: { xs: 2, md: 10 },
                }}
              >
                <Animator variant="zoom" delay={400} timeout={500}>
                  <Grid
                    item
                    xs={12}
                    md={2.9}
                    lg={2.9}
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-around"
                    gap={2}
                    margin={0}
                    height={320}
                    padding={1}
                    sx={{
                      backgroundImage: `url(${"/img/smarthone.png"})`,
                      backgroundSize: "cover",
                    }}
                  >
                    <Typography
                      variant="h4"
                      fontSize={35}
                      color="#fff"
                      fontWeight={700}
                    >
                      Convenience
                    </Typography>
                    <Typography variant="caption" color="#fff" mt={2}>
                      Being able to monitor devices remotely or with voice
                      commands, plan them and even coordinate them with the
                      sunrise and sunset is a dream come true. Imagine coming
                      down to freshly baked toast without having to press a
                      button in the morning!Energy
                    </Typography>
                  </Grid>
                </Animator>
                <Animator variant="zoom" delay={400} timeout={500}>
                  <Grid
                    item
                    xs={12}
                    md={2.9}
                    lg={2.9}
                    display="flex"
                    flexDirection="column"
                    gap={2}
                    margin={0}
                    height={320}
                    justifyContent="space-around"
                    padding={1}
                    sx={{
                      backgroundImage: `url(${"/img/smarthone.png"})`,
                      backgroundSize: "cover",
                    }}
                  >
                    <Typography
                      variant="h4"
                      fontSize={35}
                      color="#fff"
                      fontWeight={700}
                    >
                      Efficiency
                    </Typography>
                    <Typography variant="caption" color="#fff" mt={2}>
                      You may use home control to put items like thermostats,
                      lights and sockets on a routine to avoid wasting
                      electricity. Hence, energy saving tends to gain
                      significant percentages of electricity consumption.
                    </Typography>
                  </Grid>
                </Animator>
                <Animator variant="zoom" delay={600} timeout={500}>
                  <Grid
                    xs={12}
                    md={2.9}
                    lg={2.9}
                    item
                    display="flex"
                    flexDirection="column"
                    height={320}
                    justifyContent="space-around"
                    padding={1}
                    sx={{
                      backgroundImage: `url(${"/img/smarthone.png"})`,
                      backgroundSize: "cover",
                    }}
                  >
                    <Typography
                      variant="h4"
                      fontSize={35}
                      color="#fff"
                      fontWeight={700}
                    >
                      Safety
                    </Typography>
                    <Typography variant="caption" color="#fff" mt={2}>
                      There are various security devices that can actually
                      improve your business such as, door and window sensors,
                      security cameras that can track pedestrians and video
                      doorbell that help you welcome visitors from anywhere with
                      an internet connection.
                    </Typography>
                  </Grid>
                </Animator>
                <Animator variant="zoom" delay={800} timeout={900}>
                  <Grid
                    xs={12}
                    md={2.9}
                    lg={2.9}
                    item
                    gap={2}
                    display="flex"
                    flexDirection="column"
                    margin={0}
                    height={320}
                    justifyContent="space-around"
                    padding={1}
                    sx={{
                      backgroundImage: `url(${"/img/smarthone.png"})`,
                      backgroundSize: "cover",
                    }}
                  >
                    <Typography
                      variant="h4"
                      fontSize={35}
                      color="#fff"
                      fontWeight={700}
                      mt={3.2}
                    >
                      Comfort
                    </Typography>
                    <Typography variant="caption" color="#fff" mt={2}>
                      Do you know how you get all snuggled up in bed and then
                      remember you forgot to turn off the bathroom light? Our
                      smart automation solutions does the task
                      accordingly.Remote AccessAbility to monitor equipment
                      remotely allows you to do activities like; door opening,
                      switching on fan, playing music, opening window blinds or
                      curtain without leaving a key under the floor.
                    </Typography>
                  </Grid>
                </Animator>
              </Grid>
            </div>
          </Grid>
        </section>
        <Footer />
      </div>
    </MainLayout>
  );
}

export default index;
