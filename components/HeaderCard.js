import { Rowing } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Link from "next/link";

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
        sx={{
          minHeight: {
            xs: "60vh",
            lg: height,
          },
        }}
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
          <Grid item xs={11} md={5} lg={5}>
            {title}

            <Typography
              mt={1}
              color="#fff9"
              fontSize={14}
              variant="caption"
              lineHeight={1.2}
            >
              {subtitle}
            </Typography>

            <Grid className="right" flexDirection="row" mt={2}>
              <Link href="/services">
                <Button
                  variant="outlined"
                  style={{
                    background: "#fff",
                    color: "#000",
                    fontSize: 12,
                    padding: 11,

                    width: 180,
                  }}
                  size="sm"
                >
                  {" "}
                  {button1}
                </Button>
              </Link>{" "}
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
            sx={{ maxHeight: "500px" }}
          >
            <img
              src={src}
              alt="header"
              width="100%"
              style={{
                borderRadius: 12,
                objectFit: "cover",
                height: "100%",
              }}
            />
          </Grid>
        </Animator>
      </Grid>
    </div>
  );
}

export default Header;
