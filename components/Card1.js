import { Grid, Typography } from "@mui/material";
import React from "react";
import Animator from "./Animator";

function Card1() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: 20,
        padding: 30,
      }}
    >
      <Grid contsiner justifyContent="center" textAlign="center">
        <Typography color="#fff" fontWeight={700} variant="h2">
          Let’s See How it Works
        </Typography>
        <Typography color="#fff" mt={2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Typography>
      </Grid>
      <Grid
        mt={10}
        container
        xs={12}
        md={12}
        lg={12}
        gap={10}
        alignItems="center"
        justifyContent="center"
      >
        <Animator variant="zoom" delay={400} timeout={500}>
          <Grid
            item
            style={{ background: "#F6F3FF", borderRadius: 20 }}
            xs={12}
            md={2}
            lg={2}
            display="flex"
            flexDirection="column"
            padding={3}
            gap={5}
            margin={0}
          >
            <img src="/img/build.png" width="100%" height="100%" />
            <Typography>hdh</Typography>
          </Grid>
        </Animator>
        <Animator variant="zoom" delay={600} timeout={500}>
          <Grid
            xs={12}
            md={2}
            lg={2}
            style={{ background: "#F6F3FF", borderRadius: 20 }}
            height={300}
            item
            padding={3}
            gap={5}
            margin={0}
          >
            hff
          </Grid>
        </Animator>
        <Animator variant="zoom" delay={800} timeout={900}>
          <Grid
            xs={12}
            md={2}
            lg={2}
            style={{ background: "#F6F3FF", borderRadius: 20 }}
            height={300}
            item
            padding={3}
            gap={5}
            margin={0}
          >
            fyfy
          </Grid>
        </Animator>
      </Grid>
    </div>
  );
}

export default Card1;
