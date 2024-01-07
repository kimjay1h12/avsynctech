import {
  Email,
  Facebook,
  Instagram,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import { Divider, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #000,  #fff5)",
        height: "50vh",
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
          <Typography
            mt={1}
            p={2}
            color="#fff"
            textAlign="center"
            fontSize={15}
          >
            We’re pushing the boundaries of technology to unleash the power of
            human experience
          </Typography>
        </Grid>
        <span
          style={{
            height: 0.1,
            marginTop: 40,
            width: "100%",
            background: "#000",
          }}
        ></span>
        <Typography color="#fff" textAlign="center" mt={2}>
          Follow Us
        </Typography>
        <Grid container justifyContent="center" gap={3} mt={2}>
          <Link href="https://web.facebook.com/AVSTechnologies/?_rdc=1&_rdr">
            <Facebook color="#000" sx={{ color: "#fff", fontSize: 35 }} />
          </Link>

          <Link href="https://www.instagram.com/avs_technologies_ltd/">
            <Instagram color="#fff" sx={{ color: "#fff", fontSize: 35 }} />
          </Link>
          <Link href="https://wa.me/08028419895">
            <WhatsApp color="#fff" sx={{ color: "#fff", fontSize: 35 }} />
          </Link>
          <Link href="mailto:support@avsynctech.com.ng?subject=How can we help you">
            <Email color="#fff" sx={{ color: "#fff", fontSize: 35 }} />
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
