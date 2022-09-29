import { Grid, Typography } from "@mui/material";
import React from "react";
import Animator from "../../components/Animator";
import CardLeft from "../../components/CardLeft";
import CardRight from "../../components/CardRight";
import Footer from "../../components/Footer";
import MainLayout from "../../layouts/MainLayout";
const headerimg = "/img/aboutus.png";
function index() {
  return (
    <MainLayout title="About Us" description="Get to know us better">
      <div className="" style={{ background: "#000" }}>
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
          <Typography variant="h2" fontSize={70} fontWeight={700} color="#fff">
            About us
          </Typography>
          <Animator variant="grow" delay={800} timeout={1000}>
            <Typography color="#fff" fontSize={35} padding={2} fontWeight={600}>
              Pushing the boundaries of technology to create <br />
              impactful human experiences.
            </Typography>
          </Animator>
        </header>
        <section style={{ marginTop: 150 }}>
          <Grid
            container
            justifyContent="center"
            textAlign="center"
            flexDirection="column"
            padding={1}
          >
            <Typography
              variant="h3"
              color="#fff "
              lineHeight={2}
              fontWeight={700}
            >
              Who Are We
            </Typography>
            <Typography
              color="#fff"
              lineHeight={2}
              variant="body1"
              fontWeight={500}
              sx={{
                padding: 1,
                ["@media (min-width : 1200px)"]: { padding: "0vh, 35vw" },
              }}
            >
              AVS Technologies Ltd is an independent custom-made electronics
              solutions provider company based in Lagos (western Nigeria) and
              Abuja (Northern Nigeria), registered with the Corporate Affairs
              Commission (CAC) of Nigeria December 2010 with registration
              number: RC: 1047010.Our professionals have a global reputation as
              a first-choice vendor for the projects that matter. We’re always
              searching for new ways to innovate, creating bold solutions Where
              Imagination Comes to Life™. Our team bring together technical
              skills acquired over years, creative know-how and commitment to
              deliver solutions that empower and enhance the human
              experience.AVS Technologies Ltd is dedicated to developing
              complete home automation systems and creative smart products,
              providing users with more convenient, comfortable and secure smart
              life, Great experiences need great teams that bring together
              creativity, design, engineering, integration, project management
              and support.
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
            <Grid padding={1}>
              <Typography
                color="#fff"
                lineHeight={2}
                mt={3}
                variant="body1"
                fontWeight={500}
                sx={{
                  padding: 0,
                  ["@media (min-width : 1200px)"]: { padding: "3vh, 35vw" },
                }}
              >
                At AVS Technologies Ltd, we plan, design, build and support
                unique, fully integrated experiential spaces while coordinating
                with a wide range of partners to collaborate globally and
                achieve seamless solutions that transform the places where we
                live, work and play. Our vision, mission and values serve as our
                guiding principles as we fuse architecture, storytelling and
                technology to create lasting human experiences
              </Typography>
            </Grid>
          </Grid>
          <CardLeft
            mt={8}
            height="100%"
            variant="grow"
            title={
              <Typography variant="h3" color="#fff" fontWeight={700}>
                Our Vision
              </Typography>
            }
            buttonvisibility="none"
            subtitle="We’re pushing the boundaries of technology to unleash the power of human experience"
            src="/img/aboutus/p4.jpg"
          />
          <CardRight
            height="100%"
            variant="grow"
            mt={0}
            title={
              <Typography variant="h3" color="#fff" fontWeight={700}>
                Our Mission
              </Typography>
            }
            buttonvisibility="none"
            subtitle=" We design, build and support innovative technology solutions that create lasting experiences where people live, work and play"
            src="/img/aboutus/p5.jpg"
          />
          <CardLeft
            mt={8}
            height="100%"
            variant="grow"
            title={
              <Typography variant="h3" color="#fff" fontWeight={700}>
                Our CoreValues
              </Typography>
            }
            buttonvisibility="none"
            subtitle="We’re passionate about innovation, focused on our customers, united as one team, constantly learning, always accountable and act with the utmost integrity"
            src="/img/aboutus/p6.jpg"
          />
        </section>
        <Footer />
      </div>
    </MainLayout>
  );
}

export default index;
