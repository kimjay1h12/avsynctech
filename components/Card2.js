import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import Animator from "./Animator";
function Section() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: 50,
        marginBottom: 200,
      }}
    >
      <Grid container justifyContent="center" textAlign="center"></Grid>
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
        <Animator variant="zoom" delay={400} timeout={500}>
          <Grid
            item
            xs={12}
            md={3}
            lg={3}
            display="flex"
            flexDirection="column"
            gap={2}
            margin={0}
            height={320}
          >
            <img src="/img/vision.png" width="100%" />
            <Typography variant="h5" fontWeight={700} color="#fff">
              Our Vision
            </Typography>
            <Typography variant="caption" color="#fff" lineHeight={2}>
              We’re pushing the boundaries of technology to unleash the power of
              human experience
            </Typography>
          </Grid>
        </Animator>
        <Animator variant="zoom" delay={600} timeout={500}>
          <Grid
            xs={12}
            md={3}
            lg={3}
            item
            display="flex"
            flexDirection="column"
            gap={2}
            margin={0}
            height={320}
          >
            <img src="/img/mission.png" width="100%" />
            <Typography variant="h5" color="#fff" fontWeight={700}>
              Our Mission
            </Typography>
            <Typography variant="caption" lineHeight={2} color="#fff">
              We design, build and support innovative technology solutions that
              create lasting experiences where people live, work and play
            </Typography>
          </Grid>
        </Animator>
        <Animator variant="zoom" delay={800} timeout={900}>
          <Grid
            xs={12}
            md={3}
            lg={3}
            item
            gap={2}
            height={320}
            display="flex"
            flexDirection="column"
            gap={2}
            margin={0}
          >
            <img src="/img/corevalue.png" width="100%" />
            <Typography variant="h5" color="#fff" fontWeight={700}>
              Our CoreValues
            </Typography>
            <Typography variant="caption" color="#fff" lineHeight={2}>
              We’re passionate about innovation, focused on our customers,
              united as one team, constantly learning, always accountable and
              act with the utmost integrity
            </Typography>
          </Grid>
        </Animator>
      </Grid>
    </div>
  );
}

export default Section;
