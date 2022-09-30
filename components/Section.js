import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import Animator from "./Animator";

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
        <Grid contsiner justifyContent="center" textAlign="center" padding={2}>
          <Typography color="#fff" fontWeight={700} variant="h4" fontSize={40}>
            Let&apos;s See How it Works
          </Typography>
          <Typography color="#fff" mt={2} variant="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Typography>
        </Grid>
        <Grid
          mt={10}
          container
          xs={12}
          md={12}
          lg={12}
          gap={3}
          alignItems="center"
          justifyContent="center"
          padding={2}
          size="large"
        >
          <Animator variant="zoom" delay={200} timeout={300}>
            <Grid
              item
              xs={12}
              md={3}
              lg={3}
              display="flex"
              flexDirection="column"
              gap={2}
              margin={0}
              alignSelf="stretch"
            >
              <img src="/img/smarthome.jpeg" width="100%" height={250} />
              <Typography variant="h5" fontWeight={700} color="#fff">
                SMART HOME
              </Typography>
              <Typography variant="p" color="#fff" lineHeight={1.4}>
                A Smart Home help with the day-to-day of life by automating tech
                for security, convenience, comfort and entertainment.
                <br />
                entertainment.
              </Typography>
              <Grid mt={2}>
                <Dialog
                  onClose={handleClose}
                  open={open}
                  fullWidth="true"
                  maxWidth="sm"
                  style={{ scrollbarWidth: "hidden" }}
                >
                  <DialogTitle>
                    <Grid container justifyContent="space-between">
                      <Typography>Detail</Typography>{" "}
                      <Close onClick={handleClose} />{" "}
                    </Grid>
                  </DialogTitle>
                  <Grid container xs={12} md={12} lg={12} height="100vh">
                    <Grid item xs={12} md={12} lg={12} height="50vh">
                      <img
                        src="/img/smarthome.jpeg"
                        width="100%"
                        height="100%"
                        alt="logo"
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={12}
                      lg={12}
                      height="50vh"
                      textAlign="center"
                      display="flex"
                      justifyContent="center"
                      padding={4}
                    >
                      <Typography>
                        {" "}
                        A Smart Home help with the day-to-day of life by
                        automating tech for security, convenience, comfort and
                        entertainment. However, devices can “talk” to one
                        another in your home, creates a unique ecosystem that
                        makes your life easier where appliances and devices
                        communicates seamlessly via home network server. These
                        appliances include; audio and video systems, lighting,
                        HVAC, curtain and blinds, security system and so much
                        more. AVS Technologies Ltd are professional system
                        integrator and a solution provider for your home with
                        intuitive, easy to use and user friendly. Our team has
                        the expertise and capability to design and install a
                        customized system specific to your needs, desires and
                        budget friendly solutions either for new building or
                        revamping an existing project
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
          </Animator>
          <Animator variant="zoom" delay={400} timeout={300}>
            <Grid
              xs={12}
              md={3}
              lg={3}
              item
              minHeight="300px"
              display="flex"
              flexDirection="column"
              gap={2}
              margin={0}
              alignSelf="stretch"
            >
              <img src="/img/smartoffice.jpg" width="100%" height={250} />
              <Typography variant="h5" color="#fff" fontWeight={700}>
                SMART OFFICE
              </Typography>
              <Typography variant="p" lineHeight={1.4} color="#fff">
                A Smart Office integrates systems and devices altogether for
                effective communication to work intelligently; enabling
                monitoring, controlling
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
                    <Grid item xs={12} md={12} lg={12} height="50vh">
                      <img
                        src="/img/smartoffice.jpg"
                        width="100%"
                        height="100%"
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={12}
                      lg={12}
                      height="50vh"
                      textAlign="center"
                      display="flex"
                      justifyContent="center"
                      padding={4}
                    >
                      <Typography>
                        {" "}
                        A Smart Office integrates systems and devices altogether
                        for effective communication to work intelligently;
                        enabling monitoring, controlling and putting management
                        system in place with smart technology using touch screen
                        panel, iOS and other smart devices. AVS Technologies Ltd
                        offers trusted smart solutions to control Audiovisual,
                        teleconferencing, digital signate systems, security, IT
                        infrastructure, access control and time attendance
                        biometric systems. As a business owner or facility
                        manager you have enough to worry about without letting
                        the technology of business operations distract you. we
                        can give you competitive advantage by improving your
                        operating efficiencies. Sets your lighting, HVAC, music
                        and video to greet your customers with the perfect
                        welcome.
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
          </Animator>

          <Animator variant="zoom" delay={500} timeout={300}>
            <Grid
              xs={12}
              md={3}
              lg={3}
              minHeight="300px"
              item
              gap={2}
              margin={0}
              display="flex"
              flexDirection="column"
              alignSelf="stretch"
            >
              <img src="/img/CCTV.jpg" width="100%" height={250} />
              <Typography variant="h5" color="#fff" fontWeight={700}>
                CCTV SURVEILLANCE
              </Typography>
              <Typography variant="p" color="#fff" lineHeight={1.4}>
                AVS Technologies offer a wide range of surveillance CCTV
                security systems which are designed and i nstalled to secure
                you, your domestic premises and your business.
              </Typography>
              <Grid mt={2}>
                <Dialog
                  onClose={handleClose2}
                  open={open2}
                  fullWidth="true"
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
                    <Grid item xs={12} md={12} lg={12} height="50vh">
                      <img src="/img/CCTV.jpg" width="100%" height="100%" />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={12}
                      lg={12}
                      height="50vh"
                      textAlign="center"
                      display="flex"
                      justifyContent="center"
                      padding={4}
                    >
                      <Typography>
                        {" "}
                        AVS Technologies offer a wide range of surveillance CCTV
                        security systems which are designed and installed to
                        secure you, your domestic premises and your business.
                        AVS Technologies offer a wide range of surveillance CCTV
                        security systems which are designed and installed to
                        secure you, your domestic premises and your business.
                        AVS Technologies offer a wide range of surveillance CCTV
                        security systems which are designed and installed to
                        secure you, your domestic premises and your business.
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
          </Animator>
        </Grid>
        <Grid
          container
          mt={10}
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

              textAlign: "center",
            }}
          >
            <Typography
              color="#fff"
              fontWeight={700}
              variant="h4"
              fontSize={40}
              mb={6}
            >
              Featured Project
            </Typography>

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
                fontSize={40}
                color="#fff"
                fontWeight={700}
              >
                Smart Fire Alarm and Smoke Detector Systems
              </Typography>
            }
            buttonvisibility="none"
            subtitle="AVS Technologies Ltd support smart fire alarm and smoke detector system, affordable, expandable due to its wireless tendency and also very reliable.These batteries operated smart fire and smoke detection devices guaranty 24/7 alarm monitoring for homes and offices.Optical sensor on each devices detects smoke at an early stage of fire. "
            src="/img/precument.jpg"
          />

          <CardLeft
            mt={8}
            height="100%"
            variant="grow"
            title={
              <Typography
                variant="h4"
                fontSize={35}
                color="#fff"
                fontWeight={700}
              >
                Have Access to Safe, Smart and Secure life
              </Typography>
            }
            buttonvisibility="none"
            subtitle="Integer netus mollis sed id arcu diam maximus pellentesque
faucibus hac ultricies. Commodo proin eu tristique enim si.
Cras magna fermentum himenaeos conubia accumsan 
suspendisse congue tristique. Fermentum est sapien rhoncus 
quis quam velit.  Integer netus mollis sed id arcu diam maximus pellentesque faucibus hac ultricies. Commodo proin eu tristique enim si. Cras magna fermentum himenaeos conubia accumsan suspendisse congue tristique. Fermentum est sapien rhoncus quis quam velit."
            src="/img/15.jpg"
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
            subtitle="AVS Technologies Ltd developed smart automation control Apps for climate, blinds and curtain mechanism for controlling humidity and automatic window blinds or curtain in an enclosed space.The smart automation system enables turning “on” your air conditioner a few minutes before your arrival to office or home, keep an eye on the room temperature for the most efficient use of electricity"
            src="/img/precument.jpg"
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
            <Grid container md={12} sx={{ padding: { xs: 2, md: 8 } }}>
              <Grid item xs={12} md={5.6} lg={5.6}>
                <Typography variant="caption" color="#f90">
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
              >
                <Button
                  variant="outlined"
                  size="sm"
                  href="/gallery"
                  sx={{
                    fontSize: 10,
                    padding: 2,
                    height: 50,
                    background: "#999",
                    color: "#fff",
                  }}
                >
                  View All Portfolio
                  <ArrowForward />
                </Button>
              </Grid>
            </Grid>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Grid
              container
              xs={12}
              md={12}
              lg={12}
              gap={7}
              alignItems="center"
              justifyContent="center"
              size="large"
              marginTop="-2%"
              padding={4}
            >
              <Animator variant="zoom" delay={400} timeout={500}>
                <Grid
                  item
                  xs={12}
                  md={3.5}
                  lg={3.5}
                  display="flex"
                  flexDirection="column"
                  gap={2}
                  margin={0}
                  height="320px"
                >
                  <img src="/img/5.jpg" width="100%" height="100%" />
                </Grid>
              </Animator>
              <Animator variant="zoom" delay={600} timeout={500}>
                <Grid
                  xs={12}
                  md={3.5}
                  lg={3.5}
                  item
                  display="flex"
                  flexDirection="column"
                  gap={2}
                  margin={0}
                  height={320}
                >
                  <img src="/img/15.jpg" width="100%" height="100%" />
                </Grid>
              </Animator>
              <Animator variant="zoom" delay={800} timeout={900}>
                <Grid
                  xs={12}
                  md={3.5}
                  lg={3.5}
                  item
                  gap={2}
                  height={320}
                  display="flex"
                  flexDirection="column"
                  margin={0}
                >
                  <img src="/img/11.jpg" width="100%" height="100%" />
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
        >
          <Animator
            variant="slide"
            direction="right"
            delay={800}
            timeout={1000}
          >
            <Grid item xs={12} md={5} lg={5}>
              <Typography color="#f90" variant="caption">
                Why Choose Us
              </Typography>
              <Typography
                color="#fff"
                variant="h4"
                fontSize={40}
                fontWeight={700}
                mt={2}
              >
                We Give The Great Offer Pricing With Our Professionals Team
                Certification
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
                    Easy Online Appointment & Booking Service
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
                    All In One Tools Ready For Your House Installation
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
                    Professionals With Cerficitation Team Working
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
                    Great Maintanence For After Service Record
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
      </div>
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
