import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Animator from "../../components/Animator";
import Footer from "../../components/Footer";
import ServicesCategory from "../../components/ServicesCategory";
import MainLayout from "../../layouts/MainLayout";

function index() {
  return (
    <MainLayout>
      <div className="" style={{ background: "#000" }}>
        <header
          style={{
            minHeight: "80vh",

            backgroundImage: `url(${"/img/service.png"})`,
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
            Our Services
          </Typography>
          <Animator variant="grow" delay={100} timeout={500}>
            <Typography
              sx={{ padding: { xs: 2, md: 6, lg: 6 } }}
              variant="p1"
              color="#fff"
              fontSize={25}
            >
              AVS Technologies Ltd offers a full range of services as we access
              our requirements, collect relevant technical info for a particular
              project. Hence, we design a solution based and build all relevant
              smart devices altogether before installation and programming for
              both residential and commercial projects.
            </Typography>
          </Animator>
        </header>
        <section>
          <Grid
            container
            md={12}
            lg={12}
            gap={5}
            width="100vw"
            sx={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              minHeight: "30vh",
              flexDirection: "row",
              padding: {
                lg: 20,
                md: 20,
                xs: 0,
              },
            }}
          >
            <Grid item xs={12} md={3.5} lg={3.5}>
              <Box sx={{ padding: { xs: 2 } }}>
                <Typography color="blue">WHAT WE OFFER</Typography>
                <Typography color="#fff" variant="h3" mt={2}>
                  An Efforts to Make a Reliable House
                </Typography>
                <Typography color="#fff" variant="body2" lineHeight={2}>
                  Primis consectetur est velit magnis molestie. Per pharetra
                  tortor neque ligula dictumst cras lorem dignissim tellus.
                  Senectus eget nunc consectetur nullam tempor consequat dolor
                  pellentesque metus sed vivamus.
                </Typography>
              </Box>
            </Grid>
            <Grid
              container
              xs={12}
              md={8}
              lg={8}
              sx={{
                padding: {
                  xs: 1,
                  lg: 0,
                  md: 0,
                },
                justifyContent: {
                  xs: "flex-start",
                  lg: "flex-end",
                  md: "flex-end",
                },
              }}
            >
              <Animator variant="grow" delay={100} timeout={500}>
                <Grid item xs={6} md={2.7} lg={2.7}>
                  <Box
                    sx={{
                      background: "#999",
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      gap: 2,
                      flexDirection: "column",
                      padding: 2,
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="h3" color="#000" fontWeight={700}>
                      1.
                    </Typography>
                    <Typography variant="h4" color="blue">
                      Planning
                    </Typography>
                    <Typography>
                      Volutpat sed lobortis congue habitant ac erat. Diam
                      nascetur pulvinar elementum sed ligula tortor faucibus
                      dapibus lorem.
                    </Typography>
                  </Box>
                </Grid>
              </Animator>
              <Animator variant="grow" delay={300} timeout={500}>
                <Grid item xs={6} md={2.7} lg={2.7}>
                  <Box
                    sx={{
                      background: "#777",
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      gap: 2,
                      flexDirection: "column",
                      padding: 2,
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="h3" color="#000" fontWeight={700}>
                      2.
                    </Typography>
                    <Typography variant="h4" color="blue">
                      Design
                    </Typography>
                    <Typography>
                      Volutpat sed lobortis congue habitant ac erat. Diam
                      nascetur pulvinar elementum sed ligula tortor faucibus
                      dapibus lorem.
                    </Typography>
                  </Box>
                </Grid>
              </Animator>
              <Animator variant="grow" delay={500} timeout={500}>
                <Grid item xs={6} md={2.7} lg={2.7}>
                  <Box
                    sx={{
                      background: "#555",
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      gap: 2,
                      flexDirection: "column",
                      padding: 2,
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="h3" color="#000" fontWeight={700}>
                      3.
                    </Typography>
                    <Typography variant="h4" color="blue">
                      Built Up
                    </Typography>
                    <Typography>
                      Volutpat sed lobortis congue habitant ac erat. Diam
                      nascetur pulvinar elementum sed ligula tortor faucibus
                      dapibus lorem.
                    </Typography>
                  </Box>
                </Grid>
              </Animator>
              <Grid
                item
                xs={6}
                md={2.7}
                lg={2.7}
                sx={{
                  display: {
                    xs: "block",
                    lg: "none",
                    md: "none",
                  },
                }}
              >
                <Box
                  sx={{
                    background: "#aaa",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    gap: 2,
                    flexDirection: "column",
                    padding: 2,
                    justifyContent: "center",
                  }}
                >
                  <img src="/img/2.jpg" width="100%" height="100%" />
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <ServicesCategory />
        </section>

        <Footer />
      </div>
    </MainLayout>
  );
}

export default index;
