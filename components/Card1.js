import {
  Business,
  Home,
  Settings,
  SettingsAccessibility,
} from "@mui/icons-material";
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
        padding: 10,
      }}
    >
      <Grid container justifyContent="center">
        <Typography color="#fff" fontWeight={700} variant="h4" fontSize={40}>
          Control your entire space with one App
        </Typography>
        <Grid container justifyContent="center" mt={2}>
          <Grid item lg={9} justifyContent="center">
            <Typography
              color="#fff"
              lineHeight={1.5}
              variant="caption"
              fontSize={16}
            >
              With a control user interface your home or office truly connectd
              the global smart technologies to control, automate and monitor all
              your smart devices in a few simple steps
            </Typography>
          </Grid>
        </Grid>
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
            borderRadius: 10,
          }}
          xs={12}
          md={2.3}
          lg={2.3}
          display="flex"
          flexDirection="column"
          padding={1}
          gap={2}
          margin={0}
          alignSelf="stretch"
        >
          <Home sx={{ fontSize: 70, color: "#f90f" }} />
          <Typography variant="h4" fontWeight={700} color="#fff">
            Smart Home
          </Typography>
          <Typography variant="caption" color="#fff">
            A smart home help with the day-to-day of life by automating tech for
            security,convenience,comfort and entertainment
          </Typography>
        </Grid>

        <Grid
          xs={12}
          md={2.3}
          lg={2.3}
          style={{
            backgroundImage: `url(${"/img/smartoffice.png"})`,
            backgroundSize: "cover",
            borderRadius: 10,
          }}
          item
          display="flex"
          flexDirection="column"
          padding={1}
          gap={2}
          margin={0}
          alignSelf="stretch"
        >
          <Business sx={{ fontSize: 70, color: "#f90f" }} />
          <Typography variant="h4" fontWeight={700} color="#fff">
            Smart Office
          </Typography>
          <Typography variant="caption" color="#fff">
            A Smart Office integrates systems and devices altogether for
            effective communication to work intelligently;
          </Typography>
        </Grid>

        <Grid
          xs={12}
          md={2.3}
          lg={2.3}
          style={{
            backgroundImage: `url(${"/img/beautifyliving.png"})`,
            backgroundSize: "cover",
            opacity: 1,
            borderRadius: 10,
          }}
          item
          padding={1}
          gap={1}
          margin={0}
          display="flex"
          flexDirection="column"
        >
          <SettingsAccessibility sx={{ fontSize: 70, color: "#f90F" }} />
          <Typography variant="h4" color="#fff" fontWeight={700}>
            Smart Services
          </Typography>
          <Typography variant="caption" color="#fff">
            Smart Services at AVS Technologies Ltd offers you proactive advice,
            remedies and building competitive advantage in your business.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Card1;
