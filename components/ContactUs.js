import { Rowing } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Iframe from "react-iframe";
import React from "react";
import Map from "../components/Map";
import Animator from "./Animator";
const useStyles = makeStyles({
  root: {
    transition: "0.5s",

    "& .MuiGrid-container": {
      padding: 10,

      ["@media (min-width : 1200px)"]: {
        paddingLeft: 120,
        paddingRight: 120,
        gap: "180px",
      },
    },
    "& .MuiGrid-item": {
      marginTop: 120,

      ["@media (min-width : 1200px)"]: {
        marginTop: 0,
      },
    },
  },
});
function ContactUs({
  title,
  subtitle,
  buttonvisibility,
  button1,
  button2,
  src,
  variant,
  mt,
  height,

  slidedirection,
}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        mt={mt}
        height="100%"
        width="100vw"
        justifyContent="center"
        alignItems="center"
        container
        xs={12}
        md={12}
        lg={12}
      >
        <Grid item xs={11} md={4} lg={4}>
          <Typography
            mt={2}
            lineHeight={2}
            color="#fff9"
            fontFamily="Inria Sans"
          >
            Contact-Us
          </Typography>
          <Typography variant="h3" color="#fff" fontWeight={700}>
            Get In Touch
          </Typography>
        </Grid>
        <Animator variant="fade" delay={100} timeout={500}>
          <Grid
            item
            xs={12}
            md={5}
            lg={5}
            display="flex"
            justifyContent="flex-end"
            height="450px"
          >
            <Map />
          </Grid>
        </Animator>
      </Grid>
    </div>
  );
}

export default ContactUs;
