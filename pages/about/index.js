import { Grid, Typography } from "@mui/material";
import React from "react";
import CardLeft from "../../components/CardLeft";
import CardRight from "../../components/CardRight";
import Footer from "../../components/Footer";
import MainLayout from "../../layouts/MainLayout";
const headerimg = "/img/aboutus.png";
function index() {
  return (
    <MainLayout>
      <div className="" style={{ background: "#000" }}>
        <header
          style={{
            height: "80vh",
            marginTop: 70,
            backgroundImage: `url(${headerimg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex",
            padding: 20,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h2" fontSize={70} fontWeight={700} color="#fff">
            About us
          </Typography>
          <Typography variant="p1" color="#fff" fontSize={30}>
            Grace Your Life With Comfort
          </Typography>
          <Typography variant="h2" color="#fff" fontSize={20} mt={2}>
            We are here to make your dream come true
          </Typography>
        </header>
        <section style={{ marginTop: 150 }}>
          <Grid
            container
            justifyContent="center"
            textAlign="center"
            flexDirection="column"
            padding={1}
          >
            <Typography variant="h3" color="#fff " lineHeight={2}>
              Who Are We
            </Typography>
            <Typography color="#fff" lineHeight={2}>
              AV Synchronization Technologies (AVS Technologies) is an
              independent custom <br />
              electronics solutions provider company based in Lagos Nigeria,
              registered with the Corporate
              <br /> Affairs Commission (CAC) of Nigeria December 2010 with
              registration number: RC: 1047010.
            </Typography>
            <img
              src="/img/standout.png"
              style={{ marginTop: 50, width: "100%" }}
            />
            <Grid padding={4}>
              <Typography color="#fff" lineHeight={2} Mt={15}>
                AVS Technologies are specialist in complete “turn-key”
                audiovisual design, installation, maintenance and procurement of
                audiovisual systems engineering for residential, commercial, and
                specifically for low voltage custom audiovisual equipment in;
                corporate smart offices, smart homes solution, educational
                institutions, conference rooms, auditoriums, board rooms,
                restaurant and bars whereby automation programming and graphic
                user interface designed to makes audiovisual systems easy to
                operate seamlessly. AVS Technologies work closely with interior
                designers, general contractors, builders, and electricians to
                provide for smooth integration throughout the life of the
                project and work with very extensive list of audiovisual
                equipment vendors to provide you with the most choices and
                flexibility evoked in the technology. Our personalized approach
                to audiovisual solutions along with our top-notch customer
                service, has earned us acclaim and appreciation from our
                clients. AVS Technologies is dedicated to producing efficiently
                functioning audiovisual solutions in multi-room, automated home
                cinema, audio and video conferencing, training/boardroom
                solutions, public address system, lightings and blinds, CCTV.
                And as a consult, AVS Technologies are willing to assist in
                design as well as procurements of AV equipment. Hence, encourage
                clients with limited budget plans not to keep you away from
                audiovisual systems of your dreams. If you have the man power or
                just prefer the do-it-yourself approach, we’re willing to work
                with you to help you get it right.
              </Typography>
            </Grid>
          </Grid>
          <CardLeft
            mt={8}
            height="100%"
            variant="grow"
            title={
              <Typography variant="h3" color="#fff" fontWeight={700}>
                Vision
              </Typography>
            }
            buttonvisibility="none"
            subtitle="Our ultimate objective is to be regarded as the benchmark for service excellence, client satisfaction, also deliver elevated success and prosperity to our clients.

We believe in providing highly personalized services that reflect the individual culture of our clients, and offer audiovisual solutions tailored to their specific needs and goals."
            src="/img/OurMission.png"
          />
          <CardRight
            height="100%"
            variant="grow"
            mt={8}
            title={
              <Typography variant="h3" color="#fff" fontWeight={700}>
                Mission
              </Typography>
            }
            buttonvisibility="none"
            subtitle=" Our mission is to help our clients achieve their goals by identifying and understanding key technological challenges and new opportunities, designing customized solutions, and implementing with a level of quality and customer service par excellence.

We become a seamless partner and valued member of the team that will deliver extraordinary service at every turn;"
            src="/img/OurMission.png"
          />
          <CardLeft
            mt={8}
            height="100%"
            variant="grow"
            title={
              <Typography variant="h3" color="#fff" fontWeight={700}>
                CoreValues
              </Typography>
            }
            buttonvisibility="none"
            subtitle="As an excellent organization, AV Synchronization Technologies (AVS Technologies) core values are used to implement her mission and vision. The values represent the touchstone for the organization, guiding the decisions of the individuals and the organization.

Thus, developing a shared set of values serves as the foundation on which we build exceptional service and performance."
            src="/img/CoreValues.png"
          />
        </section>
        <Footer />
      </div>
    </MainLayout>
  );
}

export default index;
