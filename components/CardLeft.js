import { Rowing } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import React from "react";
import Animator from "./Animator";
const useStyles = makeStyles({
  root: {
    transition: "0.5s",
    "& img": {
      height: "300px",
      ["@media (min-width : 1200px)"]: {
        height: "100%",
      },
    },
    "& .MuiGrid-container": {
      padding: 10,

      ["@media (min-width : 1200px)"]: {
        paddingLeft: 70,
        paddingRight: 70,
        gap: "180px",
      },
    },
    "& .MuiGrid-item": {
      ["@media (min-width : 1200px)"]: {
        marginTop: 0,
      },
    },
  },
});
function CardLeft({
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
        height={height}
        width="100vw"
        justifyContent="center"
        alignItems="center"
        container
        xs={12}
        md={12}
        lg={12}
        spacing="0"
      >
        <Animator
          variant={variant}
          direction={slidedirection}
          delay={800}
          timeout={500}
        >
          <Grid item xs={11} md={4} lg={4}>
            {title}

            <Typography mt={2} color="#fff9" variant="body2">
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
        <Animator variant="fade" delay={100} timeout={500}>
          <Grid
            m={0}
            item
            xs={11}
            md={4}
            lg={4}
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
          >
            <img
              src={src}
              alt="header"
              width="100%"
              style={{
                borderRadius: 15,
                objectFit: "fill",
                height: "250px",
              }}
            />
          </Grid>
        </Animator>
      </Grid>
    </div>
  );
}

export default CardLeft;
