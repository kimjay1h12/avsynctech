import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import Animator from "./Animator";
import { ReadMoreMore, AdvReadMoreMore } from "read-more-more";
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
                fontSize={16}
                variant="caption"
              >
                we plan, design, build and support unique, fully integrated
                experiential spaces while coordinating with a wide range of
                partners to collaborate globally and achieve seamless solutions
                that transform the places where we live, work and play.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* <Grid
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
            >
              <img src="/img/P9.jpg" width="100%" height={200} />
              <Typography variant="h5" fontWeight={700} color="#fff">
                SMART Controls
              </Typography>
              <Typography
                variant="caption"
                color="#fff"
                lineHeight={1.4}
                fontSize={16}
              >
                A Smart Home help with the day-to-day of life by automating tech
                for security, convenience, comfort and
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
                        src="/img/P9.jpg"
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
                      display="flex"
                      justifyContent="center"
                      padding={1}
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
            >
              <img src="/img/P22.jpeg" width="100%" height={200} />
              <Typography variant="h5" color="#fff" fontWeight={700}>
                SMART Lock
              </Typography>
              <Typography
                fontSize={16}
                variant="caption"
                lineHeight={1.4}
                color="#fff"
              >
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
                      <img src="/img/P22.jpeg" width="100%" height="100%" />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={12}
                      lg={12}
                      height="50vh"
                      display="flex"
                      justifyContent="center"
                      padding={1}
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
            >
              <img src="/img/P10.jpeg" width="100%" height={200} />
              <Typography variant="h5" color="#fff" fontWeight={700}>
                CCTV SURVEILLANCE
              </Typography>
              <Typography
                variant="caption"
                fontSize={16}
                color="#fff"
                lineHeight={1.4}
              >
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
                      <img src="/img/P10.jpeg" width="100%" height="100%" />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={12}
                      lg={12}
                      height="50vh"
                      display="flex"
                      justifyContent="center"
                      padding={1}
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
        </Grid> */}
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
            <img src="/img/P9.jpg" width="100%" height={200} />
            <Typography variant="h5" fontWeight={700} mt={2} color="#fff">
              SMART Controls
            </Typography>

            <Typography
              variant="caption"
              color="#fff"
              lineHeight={1.4}
              fontSize={16}
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
                      the building's basic infrastructure such as electric power
                      and conveyance equipment. These control systems primarily
                      address heating, cooling, ventilation, lighting, power,
                      access to the building, shading, etc.
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
            <img src="/img/P22.jpeg" width="100%" height={200} />
            <Typography variant="h5" color="#fff" mt={2} fontWeight={700}>
              SMART Lock
            </Typography>
            <Typography
              fontSize={16}
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
                      src="/img/P22.jpeg"
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
            <img src="/img/P10.jpeg" width="100%" height={200} />
            <Typography variant="h5" mt={2} color="#fff" fontWeight={700}>
              CCTV SURVEILLANCE
            </Typography>
            <Typography
              variant="caption"
              fontSize={16}
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
                      src="/img/P10.jpeg"
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
                      camera's associated speakers.
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
                    fontSize={16}
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
            subtitle="AVS Technologies Ltd support smart fire alarm and smoke detector system, affordable, expandable due to its wireless tendency and also very reliable.These batteries operated smart fire and smoke detection devices guaranty 24/7 alarm monitoring for homes and offices.Optical sensor on each devices detects smoke at an early stage of fire. "
            src="/img/P30.png"
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
              <Typography mt={2} color="#fff9" fontSize={16} variant="caption">
                AVS Technology Ltd offers free consultation and perfect design
                that fits your budget, while producing optimal results for your
                specific needs. Our diverse Knowledge allows us to pick the best
                products and solutions for every project in order to deliver an
                efficient environment that is comfortable,friendly and
                interactive.
                <br />
                Life is pretty much better when everything works together,
                brings your home to mordern technology and control anytime using
                our reliable App
              </Typography>
            }
            src="/img/P13.jpeg"
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
            src="/img/P0.jpeg"
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
                <Typography variant="caption" fontSize={16} color="#f90">
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
                  <img src="/img/5.jpg" width="100%" height="100%" />
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
                  <img src="/img/57.jpeg" width="100%" height="100%" />
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
                  <img src="/img/42.jpeg" width="100%" height="100%" />
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
              <Typography color="#f90a" variant="caption" fontSize={16}>
                Why Choose Us
              </Typography>
              <Typography
                color="#fff"
                variant="h4"
                fontSize={35}
                fontWeight={700}
                mt={2}
              >
                We Give The Great Offer Pricing With Our Professionals Team
                Certification
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
                  bgcolor="#444"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-around"
                  p={1}
                >
                  <CalendarMonth sx={{ fontSize: 40, color: "#f90" }} />
                  <Typography color="#fff" variant="h6" fontWeight={700}>
                    Easy Online Appointment & Booking Service
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}
                  md={5.6}
                  lg={5.6}
                  bgcolor="#444"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-around"
                  p={1}
                >
                  <DeliveryDining sx={{ fontSize: 40, color: "#f90" }} />
                  <Typography color="#fff" variant="h6" fontWeight={700}>
                    All In One Tools Ready For Your House Installation
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}
                  md={5.6}
                  lg={5.6}
                  bgcolor="#444"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-around"
                  p={1}
                >
                  <People sx={{ fontSize: 40, color: "#f90" }} />
                  <Typography color="#fff" variant="h6" fontWeight={700}>
                    Professionals With Cerficitation Team Working
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}
                  md={5.6}
                  lg={5.6}
                  bgcolor="#444"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-around"
                  p={1}
                >
                  <Settings sx={{ fontSize: 40, color: "#f90" }} />
                  <Typography color="#fff" variant="h6" fontWeight={700}>
                    Great Maintanence For After Service Record
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
              <img src="/img/42.jpeg" width="90%" height="100%" />
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
              <Typography variant="caption" color="#fff" fontSize={16}>
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
