import { Rowing } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import React from "react";
import Animator from "./Animator";
const useStyles = makeStyles({
  root: {
    transition: "ease-in",
    "& .item": {
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
function Header({
  title,
  subtitle,
  button1,
  button2,
  src,
  variant,
  mt,
  height,
  butbackground1,

  but2visiblity,
}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        mt={mt}
        mb={10}
        minHeight={height}
        width="100vw"
        justifyContent="center"
        alignItems="center"
        container
        xs={12}
        md={12}
        lg={12}
        gap={20}
        flexDirection="reverse-row"
      >
        <Animator
          variant={variant}
          direction="right"
          delay={800}
          timeout={1000}
        >
          <Grid item xs={11} md={4} lg={4}>
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
            item
            xs={12}
            md={5}
            lg={5}
            className="item"
            justifyContent="flex-end"
            height="450px"
          >
            <img
              src={src}
              alt="header"
              width="100%"
              style={{ borderRadius: 15 }}
            />
          </Grid>
        </Animator>
      </Grid>
    </div>
  );
}

export default Header;
