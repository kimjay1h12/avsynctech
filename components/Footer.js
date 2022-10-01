import {
  Email,
  Facebook,
  Instagram,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
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
        marginTop: 100,
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
            src="/img/logo1.png"
            width="200px"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
            }}
          />
          <Typography mt={3} color="#fff" textAlign="center" fontSize={12}>
            We’re pushing the boundaries of technology to unleash the power of
            human experience
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
        <Typography color="#fff" textAlign="center" mt={2}>
          Follow Us
        </Typography>
        <Grid container justifyContent="center" gap={3} mt={2}>
          <Facebook color="#fff" sx={{ color: "#fff", fontSize: 35 }} />
          <Twitter color="#fff" sx={{ color: "#fff", fontSize: 35 }} />
          <Instagram color="#fff" sx={{ color: "#fff", fontSize: 35 }} />
          <WhatsApp color="#fff" sx={{ color: "#fff", fontSize: 35 }} />
          <Email color="#fff" sx={{ color: "#fff", fontSize: 35 }} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
