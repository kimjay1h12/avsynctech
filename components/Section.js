import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import Animator from "./Animator";
import ReactReadMoreReadLess from "react-read-more-read-less";
import Card from "../components/Card";
import Card1 from "./Card1";
import CardRight from "./CardRight";
import CardLeft from "./CardLeft";
import { Dialog, DialogTitle } from "@mui/material";
import DialogPop from "./DialogPop";
import {
  ArrowForward,
  CalendarMonth,
  Close,
  DeliveryDining,
  People,
  Settings,
} from "@mui/icons-material";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import Link from "next/link";
const UseStyles = makeStyles({
  root: {},
});
function Section() {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  const classes = UseStyles();
  return (
    <div className={classes.root}>
      <Card1 />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: 100,
        }}
      >
        <Grid container justifyContent="center" padding={2}>
          <Typography
            color="#fff"
            fontWeight={700}
            variant="h4"
            textAlign="center"
            fontSize={35}
          >
            Let&apos;s See How it Works
          </Typography>
          <Grid container justifyContent="center" mt={2}>
            <Grid item lg={9} justifyContent="center">
              <Typography
                color="#aaa"
                lineHeight={1}
                fontSize={14}
                variant="caption"
              >
                <span style={{ color: "transparent" }}>----</span> At AVS
                Technologies Ltd, we plan, design, build and support unique,
                fully integrated experiential spaces while coordinating with a
                wide range of partners to collaborate globally and achieve
                seamless solutions that transform the places where we live, work
                and play. Our vision, mission and values serve as our guiding
                principles as we fuse architecture, storytelling and technology
                to create lasting human experiences.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={3}
          sx={{ padding: { xs: 2, md: 19 }, marginBottom: { xs: 10, md: 0 } }}
          minHeight="70vh"
        >
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <img
              src="/img/P9.jpg"
              width="100%"
              height={250}
              style={{ objectFit: "cover" }}
            />
            <Typography variant="h5" fontWeight={700} mt={2} color="#fff">
              SMART Controls
            </Typography>

            <Typography
              variant="caption"
              color="#fff"
              lineHeight={1.4}
              fontSize={14}
            >
              A smart controls systems can control, monitor, and optimize
              building services, such as, lighting, HVAC, electrical plug-loads,
              security, CCTV, access control, audio-visual, as well as
              occupancy-related systems.
            </Typography>
            <Grid mt={2}>
              <Dialog
                onClose={handleClose}
                open={open}
                maxWidth="sm"
                style={{ scrollbarWidth: "hidden" }}
              >
                <DialogTitle>
                  <Grid container justifyContent="space-between">
                    <Typography>Detail</Typography>{" "}
                    <Close onClick={handleClose} />{" "}
                  </Grid>
                </DialogTitle>
                <Grid container xs={12} md={12} lg={12}>
                  <Grid item xs={12} md={12} lg={12}>
                    <img
                      src="/img/P9.jpg"
                      height="300px"
                      width="100%"
                      style={{ objectFit: "contain" }}
                      alt="logo"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={12}
                    lg={12}
                    display="flex"
                    justifyContent="center"
                    p={2}
                  >
                    <Typography>
                      <span style={{ marginLeft: 10 }}></span>Building control
                      systems are the dynamic or active part of the building
                      that monitor, manage, and adjust the environment and
                      performance of the building. There are a variety of
                      control systems in buildings that support occupant
                      comfort, a healthy environment, life safety, security, and
                      the building&apos;s basic infrastructure such as electric
                      power and conveyance equipment. These control systems
                      primarily address heating, cooling, ventilation, lighting,
                      power, access to the building, shading, etc.
                    </Typography>
                  </Grid>
                </Grid>
              </Dialog>
              <Button
                onClick={handleClickOpen}
                size="large"
                style={{ color: "#000", background: "#fff", borderRadius: 0 }}
              >
                Learn more
              </Button>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <img src="/img/pic1.jpeg" width="100%" height={250} />
            <Typography variant="h5" color="#fff" mt={2} fontWeight={700}>
              SMART Lock
            </Typography>
            <Typography
              fontSize={14}
              variant="caption"
              lineHeight={1.4}
              color="#fff"
            >
              A smart lock is an electronic and mechanical locking device that
              opens wirelessly with an authorized users&apos; authentication.
              smart locks allow a homeowner to enter their home or provide
              others access without requiring a traditional key.
            </Typography>
            <Grid mt={2}>
              <Dialog
                onClose={handleClose1}
                open={open1}
                fullWidth="true"
                maxWidth="sm"
                style={{ scrollbarWidth: "hidden" }}
              >
                <DialogTitle>
                  <Grid container justifyContent="space-between">
                    <Typography>Detail</Typography>{" "}
                    <Close onClick={handleClose1} />{" "}
                  </Grid>
                </DialogTitle>
                <Grid container xs={12} md={12} lg={12} height="100vh">
                  <Grid item xs={12} md={12} lg={12}>
                    <img
                      src="/img/62.jpeg"
                      height="300px"
                      width="100%"
                      style={{ objectFit: "contain" }}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={12}
                    lg={12}
                    display="flex"
                    justifyContent="center"
                    p={2}
                  >
                    <Typography>
                      <span style={{ marginLeft: 10 }}></span> Smart locks allow
                      a homeowner to enter their home or provide others access
                      without requiring a traditional key. Instead, the user
                      uses their smartphone or a key fob to wirelessly verify
                      and mechanically unlock the door. Smart locks are an
                      extension of home automation into home security,office
                      security etc. As a connected device, smart locks can be
                      considered a part of the internet of things
                    </Typography>
                  </Grid>
                </Grid>
              </Dialog>
              <Button
                onClick={handleClickOpen1}
                size="large"
                style={{ color: "#000", background: "#fff", borderRadius: 0 }}
              >
                Learn more
              </Button>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <img
              src="/img/56.jpeg"
              width="100%"
              height={250}
              style={{ objectFit: "cover" }}
            />
            <Typography variant="h5" mt={2} color="#fff" fontWeight={700}>
              CCTV SURVEILLANCE
            </Typography>
            <Typography
              variant="caption"
              fontSize={14}
              color="#fff"
              lineHeight={1.5}
            >
              CCTV is a closed system consisting of video cameras, display
              devices, monitors and wired or wireless data networks that allow
              you to transfer images from video cameras to monitors.
            </Typography>
            <Grid mt={2}>
              <Dialog
                onClose={handleClose2}
                open={open2}
                maxWidth="sm"
                style={{ scrollbarWidth: "hidden" }}
              >
                <DialogTitle>
                  <Grid container justifyContent="space-between">
                    <Typography>Detail</Typography>{" "}
                    <Close onClick={handleClose2} />{" "}
                  </Grid>
                </DialogTitle>
                <Grid container xs={12} md={12} lg={12} height="100vh">
                  <Grid item xs={12} md={12} lg={12}>
                    <img
                      src="/img/56.jpeg"
                      height="300px"
                      width="100%"
                      style={{ objectFit: "contain" }}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={12}
                    lg={12}
                    display="flex"
                    justifyContent="center"
                    padding={1}
                  >
                    <Typography>
                      Older CCTV systems used small, low-resolution black and
                      white monitors with no interactive capabilities. Modern
                      CCTV displays can be color, high-resolution displays and
                      can include the ability to zoom in on an image or track
                      something or someone among their features. Talk CCTV
                      allows an overseer to speak to people within range of the
                      camera&apos;s associated speakers.
                    </Typography>
                  </Grid>
                </Grid>
              </Dialog>
              <Button
                onClick={handleClickOpen2}
                size="large"
                style={{ color: "#000", background: "#fff", borderRadius: 0 }}
              >
                Learn more
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="center"
          sx={{
            "& .slider": {
              height: { md: "400px", xs: "300px" },
              width: { md: "800px", xs: "350px" },
            },
            "& .slider a.nextButton": {
              color: "#fff",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Grid container justifyContent="center" mb={6}>
              <Typography
                color="#fff"
                fontWeight={700}
                variant="h4"
                fontSize={35}
              >
                Featured Project
              </Typography>
              <Grid container justifyContent="center">
                <Grid item lg={9} justifyContent="center" p={2}>
                  <Typography
                    color="#fff"
                    lineHeight={1}
                    variant="caption"
                    fontSize={14}
                  >
                    Smart audio & video distribution, smart home cinema, smart
                    lighting & HVAC control, smart CCTV video surveillance &
                    intercom system, smart curtain & blinds control, smart door
                    lock, access control & time attendance system, smart fire
                    alarm, motion sensor & sliding gate automation, IT
                    Infrastructure Solutions & ELV Services.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Slider duration="6000" autoplay="2">
              {slideImages.map((slide, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={slide.url}
                    height="100%"
                    width="100%"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
              ))}
            </Slider>
          </Box>
        </Grid>

        <div style={{ marginTop: 100 }}>
          <CardRight
            height="100%"
            variant="grow"
            mt={8}
            title={
              <Typography
                variant="h4"
                fontSize={33}
                color="#fff"
                fontWeight={700}
              >
                Smart Fire Alarm and Smoke Detector Systems
              </Typography>
            }
            buttonvisibility="none"
            subtitle={
              <ReactReadMoreReadLess
                charLimit={200}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
                readLessStyle={{ color: "blue", fontSize: "10px" }}
                readMoreStyle={{ color: "blue", fontSize: "10px" }}
              >
                AVS Technologies Ltd support smart fire alarm and smoke detector
                system, affordable, expandable due to its wireless tendency and
                also very reliable.These batteries operated smart fire and smoke
                detection devices guaranty 24/7 alarm monitoring for homes and
                offices.Optical sensor on each devices detects smoke at an early
                stage of fire.
              </ReactReadMoreReadLess>
            }
            src="/img/P30.jpeg"
          />

          <CardLeft
            mt={8}
            height="100%"
            variant="grow"
            title={
              <Typography
                variant="h4"
                fontSize={33}
                color="#fff"
                fontWeight={700}
              >
                Have Access to Safe, Smart and Secure life
              </Typography>
            }
            buttonvisibility="none"
            subtitle={
              <Typography mt={2} color="#fff9" fontSize={14} variant="caption">
                <ReactReadMoreReadLess
                  charLimit={200}
                  readMoreText={"Read more ▼"}
                  readLessText={"Read less ▲"}
                  readLessStyle={{ color: "blue", fontSize: "10px" }}
                  readMoreStyle={{ color: "blue", fontSize: "10px" }}
                >
                  AVS Technology Ltd offers free consultation and perfect design
                  that fits your budget, while producing optimal results for
                  your specific needs. Our diverse Knowledge allows us to pick
                  the best products and solutions for every project in order to
                  deliver an efficient environment that is comfortable,friendly
                  and interactive. Life is pretty much better when everything
                  works together, brings your home to mordern technology and
                  control anytime using our reliable App
                </ReactReadMoreReadLess>
              </Typography>
            }
            src="/img/37.jpeg"
          />
          <CardRight
            height="100%"
            variant="grow"
            mt={8}
            title={
              <Typography
                variant="h4"
                fontSize={35}
                color="#fff"
                fontWeight={700}
              >
                Smart Lighting Control Solution
              </Typography>
            }
            buttonvisibility="none"
            subtitle={
              <ReactReadMoreReadLess
                charLimit={200}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
                readLessStyle={{ color: "blue", fontSize: "10px" }}
                readMoreStyle={{ color: "blue", fontSize: "10px" }}
              >
                AVS Technologies Ltd developed smart automation control Apps for
                climate, blinds and curtain mechanism for controlling humidity
                and automatic window blinds or curtain in an enclosed space.The
                smart automation system enables turning “on” your air
                conditioner a few minutes before your arrival to office or home,
                keep an eye on the room temperature for the most efficient use
                of electricity
              </ReactReadMoreReadLess>
            }
            src="/img/smartlighting.jpeg"
          />
        </div>
        <Grid container>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Grid container md={12} sx={{ padding: { xs: 2, md: 15 } }}>
              <Grid item xs={12} md={5.6} lg={5.6}>
                <Typography variant="caption" fontSize={14} color="#fff">
                  Our Recent Working
                </Typography>
                <Typography
                  variant="h4"
                  fontSize={35}
                  color="#fff"
                  fontWeight={700}
                  mt={2}
                >
                  We Have Great Work Portfolio With Our Clients
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={6.4}
                lg={6.4}
                display="flex"
                justifyContent="flex-end"
                alignItems="center"
              >
                <Link href="/gallery">
                  <Button
                    variant="outlined"
                    size="sm"
                    sx={{
                      fontSize: 10,
                      padding: 1,
                      height: 40,
                      background: "#999",
                      color: "#fff",
                    }}
                  >
                    View All Portfolio
                    <ArrowForward sx={{ fontSize: 18 }} />
                  </Button>
                </Link>
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
              sx={{
                paddingLeft: { xs: 2, md: 20 },
                paddingRight: { xs: 2, md: 20 },
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
                  margin={0}
                  height="250px"
                  alignItems="center"
                  justifyContent="center"
                >
                  <img src="/img/19.jpg" width="100%" height="100%" />
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
                  height="250px"
                  alignItems="center"
                  justifyContent="center"
                >
                  <img src="/img/5.jpg" width="100%" height="100%" />
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
                  gap={2}
                  margin={0}
                  height="250px"
                  alignItems="center"
                  justifyContent="center"
                >
                  <img src="/img/20.jpeg" width="100%" height="100%" />
                </Grid>
              </Animator>
              <Animator variant="zoom" delay={800} timeout={900}>
                <Grid
                  xs={12}
                  md={2.9}
                  lg={2.9}
                  item
                  gap={2}
                  height="250px"
                  alignItems="center"
                  justifyContent="center"
                  display="flex"
                  flexDirection="column"
                  margin={0}
                >
                  <img src="/img/33.jpeg" width="100%" height="100%" />
                </Grid>
              </Animator>
            </Grid>
          </div>
        </Grid>

        <Grid
          container
          sx={{ padding: { xs: 2, md: 10, lg: 10 } }}
          gap={14}
          mt={5}
          minHeight="30vh"
          alignItems="center"
        >
          <Animator
            variant="slide"
            direction="right"
            delay={800}
            timeout={1000}
          >
            <Grid item xs={12} md={5} lg={5}>
              <Typography color="#fff" variant="caption" fontSize={14}>
                Why Choose Us
              </Typography>
              <Typography
                color="#fff"
                variant="h4"
                fontSize={35}
                fontWeight={700}
                mt={2}
              >
                Smart Automation Best Practices
              </Typography>

              <Typography color="#fff9" fontSize={14} variant="caption">
                Taking your facility to new heights is revolutionary
                enhancements that features state-of-the-art technology and
                virtually endless possibilities. Integrating dynamic custom-made
                electronics into your home or office is a powerful tool used to
                do things beyond your imagination. At AVS Technologies Ltd,
                cutting corners or using DIY methods in an attempt to complete
                any design as quickly and cheaply as possible and can endanger
                the safety of those in your facility or achieving low-quality
                results.
              </Typography>
            </Grid>
          </Animator>
          <Animator variant="zoom" delay={300} timeout={500}>
            <Grid
              item
              xs={12}
              md={5.7}
              lg={5.7}
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                  lg: "flex",
                },
                flexDirection: "column",

                alignItems: "flex-end",
              }}
            >
              <img
                src="/img/46.jpeg"
                width="90%"
                height="300px"
                style={{ objectFit: "cover" }}
              />
            </Grid>
          </Animator>
        </Grid>
      </div>
      <Grid
        container
        mt={10}
        sx={{
          background: "linear-gradient(to bottom, #fff5, #000)",
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
                Advantages of using Automation Technologies
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
                  backgroundImage: `url(${"/img/49.jpeg"})`,
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
                <Typography variant="caption" color="#fff" mt={2} fontSize={14}>
                  Being able to monitor devices remotely or with voice commands,
                  plan them and even coordinate them with the sunrise and sunset
                  is a dream come true. Imagine coming down to freshly baked
                  toast without having to press a button in the morning!Energy
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
                  backgroundImage: `url(${"/img/36.jpeg"})`,
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
                <Typography variant="caption" color="#fff" mt={2} fontSize={14}>
                  You may use home control to put items like thermostats, lights
                  and sockets on a routine to avoid wasting electricity. Hence,
                  energy saving tends to gain significant percentages of
                  electricity consumption.
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
                  backgroundImage: `url(${"/img/6.jpeg"})`,
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
                <Typography variant="caption" color="#fff" mt={2} fontSize={14}>
                  There are various security devices that can actually improve
                  your business such as, door and window sensors, security
                  cameras that can track pedestrians and video doorbell that
                  help you welcome visitors from anywhere with an internet
                  connection.
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
                  backgroundImage: `url(${"/img/28.jpeg"})`,
                  backgroundSize: "cover",
                }}
              >
                <Typography
                  variant="h4"
                  fontSize={35}
                  color="#fff"
                  fontWeight={700}
                >
                  Remote Access
                </Typography>
                <Typography variant="caption" color="#fff" mt={2} fontSize={14}>
                  Ability to monitor equipment remotely allows you to do
                  activities like; door opening, switching on fan, playing
                  music, opening window blinds or curtain without leaving a key
                  under the floor.
                </Typography>
              </Grid>
            </Animator>
          </Grid>
        </div>
      </Grid>
    </div>
  );
}
const slideImages = [
  {
    url: "/img/2.jpg",
  },
  {
    url: "/img/3.png",
  },
  {
    url: "/img/4.jpeg",
  },
  {
    url: "/img/5.jpg",
  },
  {
    url: "/img/6.jpeg",
  },
  {
    url: "/img/7.jpg",
  },
  {
    url: "/img/8.jpeg",
  },
  {
    url: "/img/9.jpg",
  },
  { url: "/img/10.jpeg" },
];

export default Section;
