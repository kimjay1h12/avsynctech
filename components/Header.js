import { Rowing } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import React from "react";
import Animator from "./Animator";
const useStyles = makeStyles({
  root: {
    transition: "ease-in",
    "& img": {
      display: "none",
      ["@media (min-width : 1200px)"]: {
        display: "block",
      },
    },
    "& .MuiGrid-container": {
      padding: 10,

      ["@media (min-width : 1200px)"]: {
        paddingLeft: 120,
        paddingRight: 120,
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
function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        mt={8}
        height="90vh"
        width="100vw"
        justifyContent="center"
        alignItems="center"
        container
        xs={12}
        md={12}
        lg={12}
        gap={8}
        flexDirection="row"
      >
        <Animator variant="slide" direction="right" delay={800} timeout={1000}>
          <Grid item xs={11} md={5} lg={5}>
            <Typography variant="h2" color="#fff" fontWeight={700}>
              Get a <br />
              Smater Life with us
            </Typography>
            <Typography mt={4} lineHeight={2} color="#fff" fontWeight="200px">
              Our smart products are compatible with tens of thousands of other
              devices and can be seamlessly integrated with popular platforms
              like Google, Alexa, and Siri. Our smart products are compatible
              with tens of thousands of other devices and can be seamlessly
              integrated with popular platforms like Google, Alexa, and Siri.
            </Typography>

            <Grid className="right" flexDirection="row" mt={4}>
              <Button
                variant="outlined"
                style={{
                  background: "#1355FF",
                  color: "#fff",
                  fontSize: 12,
                  padding: 16,
                  borderRadius: 0,
                  width: 150,
                }}
                size="lg"
              >
                {" "}
                Get Started
              </Button>{" "}
              <Button
                style={{
                  background: "#fff",
                  color: "#999",
                  borderRadius: 0,
                  fontSize: 12,
                  padding: 16,
                  width: 150,
                }}
              >
                See video
              </Button>
            </Grid>
          </Grid>
        </Animator>
        <Animator variant="fade" delay={100} timeout={500}>
          <Grid item xs={12} md={6} lg={6}>
            <img
              src="/img/header.jpg"
              alt="header"
              width="100%"
              height="468px"
              style={{ borderRadius: 15 }}
            />
          </Grid>
        </Animator>
      </Grid>
    </div>
  );
}

export default Header;
