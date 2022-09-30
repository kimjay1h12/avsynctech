import {
  Camera,
  ControlCamera,
  CurtainsTwoTone,
  FireExtinguisher,
  Home,
  Light,
  Lock,
  Mail,
  Slideshow,
  Speaker,
} from "@mui/icons-material";
import {
  ArrowForward,
  CalendarMonth,
  Close,
  DeliveryDining,
  People,
  Settings,
} from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import { Player } from "video-react";
import Animator from "./Animator";
const content = [
  {
    title: "Smart Home Cinema Systems",
    details:
      "In Nigeria, AVS Technologies Ltd is renowned as a Smart Home Cinema expert. We Design and Build the solution using the finest audio and video processors, speakers, projection, acoustically transparent screens, and acoustical solutions in the world whether it’s a Media Room or a dedicated Home Cinema System. Firstly, we create thorough design plans for the Media Room or Dedicated Home Cinema construction, ensuring predictable performance and aesthetics. Our designs ensure that every component meets the best pricing range such that the Interior Designer’s vision is not compromised for excellent performances.We provide you with a whole new entertainment experience and perfect ambiance of excitement with our high-quality surround sound system that can make you fully immersed in the world of movies.",
    url: "/img/11.jpg",
    icon: <Home sx={{ fontSize: 70, color: "#f90" }} />,
  },

  {
    title: "Smart CCTV Video Surveillance and intercom Systems",
    details:
      "AVS Technologies Ltd offers cost-effective Z-Wave, ZigBee and Wi-Fi wireless smart switches for home automation using the best hubs and Apps for monitoring and controlling of the entire house and office.Our automation controllers can support easy integration with IFTTT, Amazon Alexa, Nest, and works with other cloud-based automated platforms. It includes lighting and smart bulb, on/off switch, nest thermostat, dimmer switch, camera, Philips hue, smart plug, smart thermostats and more.Motion sensors provide hands-free lighting to the bathroom or kitchen in the middle of the night, you may also use your voice too light the way when your arms are full or command your house to turn off all the lights from the comfort of your bed.",
    url: "/img/2.jpg",
    icon: <Camera sx={{ fontSize: 70, color: "#f90" }} />,
  },
  {
    title: "Smart Lighting Control Solution",
    details:
      "AVS Technologies Ltd developed smart automation control Apps for climate, blinds and curtain mechanism for controlling humidity and automatic window blinds or curtain in an enclosed space.The smart automation system enables turning “on” your air conditioner a few minutes before your arrival to office or home, keep an eye on the room temperature for the most efficient use of electricity.Smart electric curtains or blinds connected to a central hub, you can easily control them remotely to ensure that they remain closed all day and you can also connect the smart curtains with your smart voice assistance devices like Alexa and Google home.With our smart motorized curtains, you can control your curtains with a single touch, shielding your privacy and protecting your home from the sun’s rays",
    url: "/img/6.jpeg",
    icon: <Light sx={{ fontSize: 70, color: "#f90" }} />,
  },
  {
    title: "Climate, Smart Blinds and Curtain Control",
    details:
      "AVS Technologies Ltd developed smart automation control Apps for climate, blinds and curtain mechanism for controlling humidity and automatic window blinds or curtain in an enclosed space.The smart automation system enables turning “on” your air conditioner a few minutes before your arrival to office or home, keep an eye on the room temperature for the most efficient use of electricity.Smart electric curtains or blinds connected to a central hub, you can easily control them remotely to ensure that they remain closed all day and you can also connect the smart curtains with your smart voice assistance devices like Alexa and Google home.With our smart motorized curtains, you can control your curtains with a single touch, shielding your privacy and protecting your home from the sun’s rays",
    url: "/img/4.jpeg",
    icon: <CurtainsTwoTone sx={{ fontSize: 70, color: "#f90" }} />,
  },
  {
    title: "Smart Door Lock, Access Control and Time Attendance System",
    details:
      "AVS Technologies Ltd provide you with latest technology, wide range of products application and best customer support. Ensuring customer service requirements as our first priority for smart door lock, access control and time attendance system.We consider the most efficient smart locks units, biometric access control and time attendance machines at good price that will make your home or office safer and more intelligent than ever. However, our centralized access control system can be interlinked directly to the server which can be used for Time Attendance and Payroll Calculations to enhance both safety and security.Programming fingerprint sensors, hand geometry, retinal scan, RFID card access, Security codes, and face recognition to activate access to a particular area. Systems can also be integrated with security alarms or video surveillance systems so that you can get notified when there is a break-in attempt.",
    url: "/img/8.jpeg",
    icon: <Lock sx={{ fontSize: 70, color: "#f90" }} />,
  },
  {
    title: "Sliding Gate Automation",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa nisi, efficitur in consectetur ac, dictum sit amet massa.",
    url: "/img/15.jpg",
    icon: <Slideshow sx={{ fontSize: 70, color: "#f90" }} />,
  },
  {
    title: "Smart Fire Alarm and Smoke Detector Systems",
    details:
      "AVS Technologies Ltd support smart fire alarm and smoke detector system, affordable, expandable due to its wireless tendency and also very reliable. These batteries operated smart fire and smoke detection devices guaranty 24/7 alarm monitoring for homes and offices.Optical sensor on each devices detects smoke at an early stage of fire, often before flame appear and temperature starts to rise significantly. Hence, both sounders and flashers get activated and create awareness within the vicinity and also send panic notification to all registered smart mobile phones.",
    url: "/img/16.jpeg",
    icon: <FireExtinguisher sx={{ fontSize: 70, color: "#f90" }} />,
  },
  {
    title: "IT Infrastructure and Control Systems",
    details:
      "AVS Technologies Ltd also specialized in cabling design, installation and management of IT Infrastructure solution in all type of environment for both residential and commercial projects.We offer high speed performance network and data connectivity for any projects with the combination of both hardware and software to enhance distribution of voice, data, video and other signals within a building for effective communication among various custom electronic devices.Various electrical and electronic components, modules, blocks, and connecting cables are made up of automation system while end user interfaces are configured with the graphic user interface web page to executes commands and transmits them though Wi-Fi modules for desired controls.",
    url: "/img/19.jpg",
    icon: <ControlCamera sx={{ fontSize: 70, color: "#f90" }} />,
  },
  {
    title: "Public Address System",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa nisi, efficitur in consectetur ac, dictum sit amet massa.",
    url: "/img/17.jpg",
    icon: <Speaker sx={{ fontSize: 70, color: "#f90" }} />,
  },
];
function ServicesCategory() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginTop: 50,
      }}
    >
      <Typography
        variant="h4"
        fontSize={40}
        color="#fff"
        fontWeight={700}
        mt={2}
      >
        Our Services
      </Typography>
      <Typography color="#fff" fontSize={18} variant="body2" mt={2}>
        Get to know our Services
      </Typography>
      <Grid
        container
        xs={12}
        lg={12}
        md={12}
        mt={7}
        justifyContent="center"
        sx={{
          padding: {
            xs: 1,
            md: 1,
            lg: 1,
          },
          gap: {
            xs: 2,
            md: 6,
            lg: 6,
          },
        }}
      >
        {content.map((cur, index) => (
          <Animator variant="grow" delay={100} timeout={500} key={index}>
            <Grid
              item
              xs={12}
              lg={3}
              md={3}
              gap={10}
              display="flex"
              padding={2}
              sx={{
                background: "#aaa",

                width: "100%",
                borderRadius: 3,
              }}
            >
              <Box
                key={index}
                sx={{
                  display: "flex",
                  gap: { xs: 1, md: 4, lg: 4 },
                  flexDirection: "column",
                }}
              >
                <Typography color="#000">{cur.icon}</Typography>
                <Typography color="#fff" fontWeight={700} fontSize={25}>
                  {cur.title}
                </Typography>
                <Typography
                  color="#fff"
                  fontWeight={300}
                  variant="caption"
                  sx={{ wordBreak: "break-all" }}
                >
                  {cur.details}
                </Typography>
              </Box>
            </Grid>
          </Animator>
        ))}
      </Grid>
      <Grid
        container
        sx={{ padding: { xs: 2, md: 10, lg: 10 } }}
        gap={14}
        mt={5}
      >
        <Animator variant="slide" direction="right" delay={800} timeout={1000}>
          <Grid item xs={12} md={5} lg={5}>
            <Typography
              color="#fff"
              variant="h4"
              fontSize={40}
              fontWeight={700}
              mt={2}
            >
              Have Access to Safe,
              <br /> Smart and Secure life
            </Typography>
            <Typography
              color="#fff"
              variant="caption"
              sx={{ wordBreak: "break-all" }}
              lineHeight={2}
              mt={2}
            >
              Integer netus mollis sed id arcu diam maximus pellentesque
              faucibus hac ultricies. Commodo proin eu tristique enim si. Cras
              magna fermentum himenaeos conubia accumsan suspendisse congue
              tristique. Fermentum est sapien rhoncus quis quam velit.
            </Typography>
            <Grid
              container
              spacing={1}
              mt={2}
              sx={{ gap: { xs: 0, md: 2, lg: 2 } }}
            >
              <Grid
                item
                xs={6}
                md={5.6}
                lg={5.6}
                bgcolor="#999"
                display="flex"
                flexDirection="column"
                justifyContent="space-around"
              >
                <CalendarMonth sx={{ fontSize: 40, color: "#f90" }} />
                <Typography color="#fff" variant="h6" fontWeight={700}>
                  Smart Home
                </Typography>
                <Typography color="#fff" variant="caption" mt={2}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                md={5.6}
                lg={5.6}
                bgcolor="#999"
                display="flex"
                flexDirection="column"
                justifyContent="space-around"
              >
                <DeliveryDining sx={{ fontSize: 40, color: "#f90" }} />
                <Typography color="#fff" variant="h6" fontWeight={700}>
                  Smart Office
                </Typography>
                <Typography color="#fff" variant="caption">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                md={5.6}
                lg={5.6}
                bgcolor="#999"
                display="flex"
                flexDirection="column"
                justifyContent="space-around"
              >
                <People sx={{ fontSize: 40, color: "#f90" }} />
                <Typography color="#fff" variant="h6" fontWeight={700}>
                  Smart Life
                </Typography>
                <Typography color="#fff" variant="caption">
                  Our product will speed up your work in creating your own
                  presentations
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                md={5.6}
                lg={5.6}
                bgcolor="#999"
                display="flex"
                flexDirection="column"
                justifyContent="space-around"
              >
                <Settings sx={{ fontSize: 40, color: "#f90" }} />
                <Typography color="#fff" variant="h6" fontWeight={700}>
                  Stressless
                </Typography>
                <Typography color="#fff" variant="caption">
                  Our product will speed up your work in creating your own
                  presentations
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Animator>
        <Animator variant="zoom" delay={300} timeout={500}>
          <Grid
            item
            xs={12}
            md={5.7}
            lg={5.7}
            sx={{ display: { xs: "none", md: "block", lg: "block" } }}
          >
            <img src="/img/25.jpeg" width="100%" height="100%" />
          </Grid>
        </Animator>
      </Grid>

      <Grid container justifyContent="center" padding={2}>
        <Typography color="#fff" variant="h3" fontWeight={700}>
          {" "}
          Wish to see our Videos
        </Typography>
        <Grid container mt={3} padding={20} gap={2}>
          <Grid item xs={12} md={5.7} lg={5.7} height="40vh" bgcolor="#888">
            {" "}
            <video src="/img/1.mp4" controls height="100%" width="100%" />
          </Grid>
          <Grid item xs={12} md={5.7} lg={5.7} height="40vh" bgcolor="#888">
            {" "}
            <video src="/img/2.mp4" controls height="100%" width="100%" />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default ServicesCategory;
