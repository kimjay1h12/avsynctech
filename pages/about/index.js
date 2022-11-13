import { Grid, Typography } from "@mui/material";
import React from "react";
import Animator from "../../components/Animator";
import CardLeft from "../../components/CardLeft";
import CardRight from "../../components/CardRight";
import Footer from "../../components/Footer";
import Card2 from "../../components/Card2";
import MainLayout from "../../layouts/MainLayout";
const headerimg = "/img/aboutus.png";
function index() {
  return (
    <div className="">
      {" "}
      <MainLayout
        title="About Us"
        active="About"
        description="Get to know us better"
      >
        <header
          style={{
            height: "80vh",

            backgroundImage: `url(${headerimg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="caption"
            fontSize={48}
            fontWeight={700}
            color="#fff"
          >
            About us
          </Typography>
        </header>
        <section style={{ marginTop: 150 }}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            padding={1}
          >
            <Grid item xs={12} md={9}>
              <Typography
                variant="h4"
                color="#fff "
                fontSize={35}
                lineHeight={2}
                fontWeight={700}
                textAlign="center"
              >
                Who Are We
              </Typography>
              <Typography
                color="#fff"
                lineHeight={2}
                variant="caption"
                fontSize={16}
                fontWeight={500}
                sx={{
                  padding: 1,
                  ["@media (min-width : 1200px)"]: { padding: "0vh, 35vw" },
                }}
              >
                <span style={{ color: "transparent" }}>p</span> AVS Technologies
                Ltd is an independent custom-made electronics solutions provider
                company based in Lagos (western Nigeria) and Abuja (Northern
                Nigeria), registered with the Corporate Affairs Commission (CAC)
                of Nigeria December 2010 with registration number: RC: 1047010.
                Our professionals have a global reputation as a first-choice
                vendor for the projects that matter. We’re always searching for
                new ways to innovate, creating bold solutions Where Imagination
                Comes to Life™. <br />
                <span style={{ color: "transparent" }}>dp</span>Our team bring
                together technical skills acquired over years, creative know-how
                and commitment to deliver solutions that empower and enhance the
                human experience.AVS Technologies Ltd is dedicated to developing
                complete home automation systems and creative smart products,
                providing users with more convenient, comfortable and secure
                smart life, Great experiences need great teams that bring
                together creativity, design, engineering, integration, project
                management and support.
              </Typography>
              <img
                src="/img/15.jpg"
                style={{
                  marginTop: 50,
                  width: "100%",
                  height: "500px",
                  objectFit: "cover",
                }}
              />

              <Typography
                color="#fff"
                lineHeight={2}
                mt={10}
                variant="caption"
                fontSize={16}
                fontWeight={500}
                sx={{
                  padding: 0,
                  ["@media (min-width : 1200px)"]: { padding: "3vh, 35vw" },
                }}
              >
                <span style={{ color: "transparent" }}>dp</span> At AVS
                Technologies Ltd, we plan, design, build and support unique,
                fully integrated experiential spaces while coordinating with a
                wide range of partners to collaborate globally and achieve
                seamless solutions that transform the places where we live, work
                and play. Our vision, mission and values serve as our guiding
                principles as we fuse architecture, storytelling and technology
                to create lasting human experiences
              </Typography>
            </Grid>
          </Grid>
          <Card2 />
        </section>
        <Footer />
      </MainLayout>{" "}
    </div>
  );
}

export default index;
