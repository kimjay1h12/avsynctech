import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Divider, Grid, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <div
      style={{
        background: "#07090D",
        height: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid container justifyContent="center" flexDirection="column">
        <Grid
          item
          display="flex"
          justifyContent="center"
          flexDirection="column"
          textAlign="center"
        >
          <img
            src="/img/logo.png"
            width="200px"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
            }}
          />
          <Typography mt={3} color="#fff" textAlign="center" fontSize={12}>
            Lorem ipsum dolor sit amet, consectetur adip elit
            <br />. Posuere dolor massa, pellentesque aliquam nisl facilisis
            sed.
          </Typography>
        </Grid>
        <span
          style={{
            height: 0.1,
            marginTop: 40,
            width: "100%",
            background: "#fff",
          }}
        ></span>
        <Grid container justifyContent="center" gap={3} mt={7}>
          <Facebook color="#fff" sx={{ color: "#fff", fontSize: 35 }} />
          <Twitter color="#fff" sx={{ color: "#fff", fontSize: 35 }} />
          <Instagram color="#fff" sx={{ color: "#fff", fontSize: 35 }} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
