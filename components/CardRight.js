import { Rowing } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import React from "react";
import Animator from "./Animator";
const useStyles = makeStyles({
  root: {
    "& img": {
      height: "300px",
      ["@media (min-width : 1200px)"]: {
        height: "100%",
      },
    },
    transition: "0.5s",

    "& .container": {
      padding: 10,

      flexDirection: "row-reverse",
      ["@media (min-width : 1200px)"]: {
        paddingLeft: 120,
        paddingRight: 120,
        gap: "180px",
        flexDirection: "row",
      },
    },
    "& .MuiGrid-item": {
      marginTop: 10,

      ["@media (min-width : 1200px)"]: {
        marginTop: 0,
        height: "450px",
      },
    },
  },
});
function CardRight({
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
        className="container"
        height={height}
        width="100vw"
        justifyContent="center"
        alignItems="center"
        container
        xs={12}
        md={12}
        lg={12}
        mt={mt}
      >
        <Animator variant="fade" delay={100} timeout={500}>
          <Grid
            item
            xs={11}
            md={5}
            lg={5}
            display="flex"
            justifyContent="flex-end"
          >
            <img
              src={src}
              alt="header"
              width="100%"
              style={{ borderRadius: 15 }}
            />
          </Grid>
        </Animator>
        <Animator
          variant={variant}
          direction={slidedirection}
          delay={200}
          timeout={500}
        >
          <Grid
            item
            xs={11}
            md={4}
            lg={4}
            display="flex"
            justifyContent="center"
            flexDirection="column"
          >
            {title}

            <Typography
              mt={2}
              lineHeight={2}
              color="#fff9"
              fontFamily="Inria Sans"
            >
              {subtitle}
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
        </Animator>
      </Grid>
    </div>
  );
}

export default CardRight;
