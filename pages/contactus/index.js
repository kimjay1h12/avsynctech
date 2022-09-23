import {
  Button,
  Card,
  Checkbox,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React from "react";
import Animator from "../../components/Animator";
import Map from "../../components/Map";
import { Mail, Rowing } from "@mui/icons-material";
import {
  AccountCircle,
  ArrowDropDown,
  Email,
  Password,
  Phone,
} from "@mui/icons-material";
import MainLayout from "../../layouts/MainLayout";
import { makeStyles } from "@mui/styles";
import Card1 from "../../components/Card1";
import Footer from "../../components/Footer";
const headerimg = "/img/contactheader.png";
const UseStyles = makeStyles({
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
function index() {
  const classes = UseStyles();
  return (
    <MainLayout title="Contact Us" description="Beep Us with Your messages">
      {" "}
      <div className="" style={{ background: "#000" }}>
        <header
          style={{
            height: "80vh",
            marginTop: 70,
            backgroundImage: `url(${headerimg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Typography variant="h2" fontSize={70} fontWeight={700} color="#fff">
            Contact Us
          </Typography>
          <Typography variant="p1" color="#fff" fontSize={30}>
            Holla There We Wish To Hear From You
          </Typography>
        </header>
        <section className={classes.root}>
          <Grid
            height="100%"
            width="100vw"
            justifyContent="center"
            alignItems="center"
            container
            xs={12}
            md={12}
            lg={12}
          >
            <Grid
              item
              xs={11}
              md={4}
              lg={4}
              display="flex"
              flexDirection="column"
              gap={2}
            >
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
              <Grid height="200px">
                <Map />
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
                <Grid
                  gap={3}
                  mt={2}
                  display="flex"
                  flexDirection="column"
                  width="100%"
                >
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
                        minHeight: "150px",
                        display: "flex",
                        alignItems: "flex-start",
                        lineBreak: "auto",
                        borderRadius: 2,
                      }}
                      placeholder="Message"
                      type="text"
                    />
                  </FormControl>

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
                      size="large"
                      variant="outlined"
                      sx={{
                        width: "100%",

                        background: "#fff",
                        color: "#999",
                        minHeight: 52,
                      }}
                    >
                      Send
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Animator>
          </Grid>
          <Card1 />
        </section>
        <Footer />
      </div>
    </MainLayout>
  );
}

export default index;
