import { Rowing } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Iframe from "react-iframe";
import React from "react";
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

          <Grid className="right" flexDirection="row" mt={4}>
            <Button
              variant="outlined"
              style={{
                background: "#fff",
                color: "#000",
                fontSize: 12,
                padding: 16,
                display: buttonvisibility,
                width: 180,
              }}
              size="lg"
            >
              {" "}
              {button1}
            </Button>{" "}
          </Grid>
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
            <Iframe
              url="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=avsynctech+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              width="100%"
              id="myId"
              className="myClassname"
              height="100%"
              styles={{ height: "100%", width: "100%" }}
            />
          </Grid>
        </Animator>
      </Grid>
    </div>
  );
}

export default ContactUs;
