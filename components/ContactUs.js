import { Mail, Rowing } from "@mui/icons-material";
import {
  AccountCircle,
  ArrowDropDown,
  Email,
  Password,
  Phone,
} from "@mui/icons-material";
import {
  Button,
  Checkbox,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";

import { makeStyles } from "@mui/styles";
import Iframe from "react-iframe";
import React from "react";
import Map from "../components/Map";
import Animator from "./Animator";
const useStyles = makeStyles({
  root: {
    marginTop: 100,
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
  const [showButton, setShowButton] = React.useState(true);
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
          <Grid gap={2} mt={2} display="flex" flexDirection="column">
            <FormControl root variant="outlined" fullWidth="100%">
              <OutlinedInput
                sx={{
                  background: "#fff",
                  margin: "0",
                  width: "100%",
                  borderRadius: 2,
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton>
                      <AccountCircle />
                    </IconButton>
                  </InputAdornment>
                }
                placeholder="Full name"
                type="text"
              />
            </FormControl>
            <FormControl root variant="outlined" fullWidth="100%">
              <OutlinedInput
                sx={{
                  background: "#fff",
                  margin: "0",
                  width: "100%",
                  borderRadius: 2,
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton>
                      <Mail />
                    </IconButton>
                  </InputAdornment>
                }
                placeholder="Email"
                type="email"
              />
            </FormControl>
            <FormControl root variant="outlined" fullWidth="100%">
              <OutlinedInput
                sx={{
                  background: "#fff",
                  margin: "0",
                  width: "100%",
                  minHeight: "100px",
                  display: "flex",
                  alignItems: "flex-start",
                  lineBreak: "auto",
                  borderRadius: 2,
                }}
                placeholder="Message"
                type="text"
              />
            </FormControl>

            <Grid display="flex" alignItems="center">
              {" "}
              <Checkbox
                onClick={() => {
                  setShowButton(false);
                }}
                style={{ display: "flex", justifyContent: "flex-start" }}
              />
              <Typography color="#999">
                i agree with terms and condition
              </Typography>
            </Grid>
            <Grid
              width="100%"
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Button
                disabled={showButton}
                size="large"
                variant="outlined"
                sx={{
                  width: "100%",

                  background: "#fff",
                  color: "#999",
                  minHeight: 52,
                }}
              >
                Contact Us Now
              </Button>
            </Grid>
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
            height="470px"
          >
            <Map />
          </Grid>
        </Animator>
      </Grid>
    </div>
  );
}

export default ContactUs;
