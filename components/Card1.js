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
          Let&apos;s See How it Works
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
        <Grid
          item
          style={{
            backgroundImage: `url(${"/img/smarthone.png"})`,
            backgroundSize: "cover",
            borderRadius: 20,
          }}
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
          <Typography variant="h4" fontWeight={700} color="#fff">
            Smart Home
          </Typography>
          <Typography variant="p" color="#fff">
            First, we&apos;ll listen, answer your questions, and advise on the
            overall project scope and budget.
          </Typography>
        </Grid>

        <Grid
          xs={12}
          md={2}
          lg={2}
          style={{
            backgroundImage: `url(${"/img/smartoffice.png"})`,
            backgroundSize: "cover",
            borderRadius: 20,
          }}
          item
          display="flex"
          flexDirection="column"
          padding={4}
          gap={2}
          margin={0}
        >
          <img src="/img/design.png" width="90px" height="90px" />
          <Typography variant="h4" fontWeight={700} color="#fff">
            Smart Office
          </Typography>
          <Typography variant="p" color="#fff">
            Then, we&apos;ll explore what&apos;spossible together, and test our
            decisions to ensure cost alignment.
          </Typography>
        </Grid>

        <Grid
          xs={12}
          md={2}
          lg={2}
          style={{
            backgroundImage: `url(${"/img/beautifyliving.png"})`,
            backgroundSize: "cover",
            borderRadius: 20,
          }}
          item
          padding={4}
          gap={2}
          margin={0}
          display="flex"
          flexDirection="column"
        >
          <img src="/img/design.png" width="90px" height="90px" />
          <Typography variant="h4" color="#fff" fontWeight={700}>
            Smart Services
          </Typography>
          <Typography variant="p" color="#fff">
            Finally, we&apos;ll execute the plan, and make sure you&apos;re
            aware of progress every step of the way
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Card1;
