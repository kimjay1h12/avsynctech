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
        <Typography color="#fff" fontWeight={700} variant="h3">
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
        gap={8}
        alignItems="center"
        justifyContent="center"
      >
        <Animator variant="zoom" delay={400} timeout={500}>
          <Grid
            item
            style={{ background: "#fff9", borderRadius: 20 }}
            xs={12}
            md={2}
            lg={2}
            display="flex"
            flexDirection="column"
            padding={4}
            gap={2}
            margin={0}
          >
            <img src="/img/plan.png" width="90px" height="90px" />
            <Typography variant="h4" fontWeight={700}>
              Plan
            </Typography>
            <Typography variant="p">
              First, we 'll listen, answer your questions, and advise on the
              overall project scope and budget.
            </Typography>
          </Grid>
        </Animator>
        <Animator variant="zoom" delay={600} timeout={500}>
          <Grid
            xs={12}
            md={2}
            lg={2}
            style={{ background: "#fff9", borderRadius: 20 }}
            item
            display="flex"
            flexDirection="column"
            padding={4}
            gap={2}
            margin={0}
          >
            <img src="/img/design.png" width="90px" height="90px" />
            <Typography variant="h4" fontWeight={700}>
              Design
            </Typography>
            <Typography variant="p">
              First, we 'll listen, answer your questions, and advise on the
              overall project scope and budget.
            </Typography>
          </Grid>
        </Animator>
        <Animator variant="zoom" delay={800} timeout={900}>
          <Grid
            xs={12}
            md={2}
            lg={2}
            style={{ background: "#fff9", borderRadius: 20 }}
            item
            padding={4}
            gap={2}
            margin={0}
            display="flex"
            flexDirection="column"
          >
            <img src="/img/design.png" width="90px" height="90px" />
            <Typography variant="h4" fontWeight={700}>
              Build
            </Typography>
            <Typography variant="p">
              First, we 'll listen, answer your questions, and advise on the
              overall project scope and budget.
            </Typography>
          </Grid>
        </Animator>
      </Grid>
    </div>
  );
}

export default Card1;
