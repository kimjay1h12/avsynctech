import { Mail } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import { Player } from "video-react";
import Animator from "./Animator";
const content = [
  {
    title: "Feature Name",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa nisi, efficitur in consectetur ac, dictum sit amet massa.",
    url: "/img/11.jpg",
    icon: <Mail sx={{ fontSize: 70, color: "blue" }} />,
  },

  {
    title: "Feature Name",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa nisi, efficitur in consectetur ac, dictum sit amet massa.",
    url: "/img/2.jpg",
    icon: <Mail sx={{ fontSize: 70, color: "blue" }} />,
  },
  {
    title: "Feature Name",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa nisi, efficitur in consectetur ac, dictum sit amet massa.",
    url: "/img/6.jpeg",
    icon: <Mail sx={{ fontSize: 70, color: "blue" }} />,
  },
  {
    title: "Feature Name",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa nisi, efficitur in consectetur ac, dictum sit amet massa.",
    url: "/img/4.jpeg",
    icon: <Mail sx={{ fontSize: 70, color: "blue" }} />,
  },
  {
    title: "Feature Name",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa nisi, efficitur in consectetur ac, dictum sit amet massa.",
    url: "/img/8.jpeg",
    icon: <Mail sx={{ fontSize: 70, color: "blue" }} />,
  },
  {
    title: "Feature Name",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa nisi, efficitur in consectetur ac, dictum sit amet massa.",
    url: "/img/15.jpg",
    icon: <Mail sx={{ fontSize: 70, color: "blue" }} />,
  },
  {
    title: "Feature Name",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa nisi, efficitur in consectetur ac, dictum sit amet massa.",
    url: "/img/16.jpeg",
    icon: <Mail sx={{ fontSize: 70, color: "blue" }} />,
  },
  {
    title: "Feature Name",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa nisi, efficitur in consectetur ac, dictum sit amet massa.",
    url: "/img/19.jpg",
    icon: <Mail sx={{ fontSize: 70, color: "blue" }} />,
  },
  {
    title: "Feature Name",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa nisi, efficitur in consectetur ac, dictum sit amet massa.",
    url: "/img/17.jpg",
    icon: <Mail sx={{ fontSize: 70, color: "blue" }} />,
  },
];
function ServicesCategory() {
  const [background, setBackground] = useState("");
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginTop: 50,
      }}
    >
      <Typography variant="h3" color="#fff" fontWeight={700}>
        Our Services
      </Typography>
      <Typography color="#fff" fontSize={18} variant="body2">
        Get to know our Services
      </Typography>
      <Grid
        container
        xs={12}
        lg={12}
        md={12}
        justifyContent="center"
        sx={{
          padding: {
            xs: 1,
            md: 20,
            lg: 20,
          },
          gap: {
            xs: 2,
            md: 6,
            lg: 6,
          },
        }}
      >
        {content.map((cur, index) => (
          <Animator variant="grow" delay={100} timeout={500} key={index}>
            <Grid
              item
              xs={5.5}
              lg={3}
              md={3}
              gap={20}
              display="flex"
              onMouseEnter={() => setBackground(cur.url)}
              onMouseLeave={() => setBackground("#666")}
              padding={2}
              sx={{
                background: "#aaa",
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                width: "100%",
                borderRadius: 3,
              }}
            >
              <Box
                key={index}
                sx={{
                  display: "flex",
                  gap: { xs: 1, md: 4, lg: 4 },
                  flexDirection: "column",
                }}
              >
                <Typography color="#000">{cur.icon}</Typography>
                <Typography color="#fff" fontWeight={700} fontSize={20}>
                  {cur.title}
                </Typography>
                <Typography
                  color="#fff"
                  variant="body2"
                  sx={{ wordBreak: "break-all" }}
                >
                  {cur.details}
                </Typography>
              </Box>
            </Grid>
          </Animator>
        ))}
      </Grid>
      <Grid container sx={{ padding: { xs: 2, md: 20, lg: 20 } }}>
        <Animator variant="slide" direction="right" delay={800} timeout={1000}>
          <Grid item xs={12} md={6} lg={6}>
            <Typography color="#fff" variant="h3" fontWeight={700}>
              Have Access to Safe,
              <br /> Smart and Secure life
            </Typography>
            <Typography
              color="#fff"
              variant="body2"
              sx={{ wordBreak: "break-all" }}
              lineHeight={2}
              mt={2}
            >
              Integer netus mollis sed id arcu diam maximus pellentesque
              <br /> faucibus hac ultricies. Commodo proin eu tristique enim si.
              <br />
              Cras magna fermentum himenaeos conubia accumsan
              <br /> suspendisse congue tristique. Fermentum est sapien rhoncus
              <br /> quis quam velit.
            </Typography>
            <Grid
              container
              spacing={1}
              mt={2}
              sx={{ gap: { xs: 0, md: 13, lg: 13 } }}
            >
              <Grid item xs={6} md={3.5} lg={3.5}>
                <img src="/img/safehomeicon.png" />
                <Typography color="#fff" variant="h5" fontWeight={700}>
                  Safety Home
                </Typography>
                <Typography color="#fff" mt={2}>
                  Our product will speed up your work in creating your own
                  presentations
                </Typography>
              </Grid>
              <Grid item xs={6} md={3.5} lg={3.5}>
                <img src="/img/safehomeicon.png" />
                <Typography color="#fff" variant="h5" fontWeight={700}>
                  Safety Home
                </Typography>
                <Typography color="#fff" mt={2}>
                  Our product will speed up your work in creating your own
                  presentations
                </Typography>
              </Grid>
              <Grid item xs={6} md={3} lg={3}>
                <img src="/img/safehomeicon.png" />
                <Typography color="#fff" variant="h5" fontWeight={700}>
                  Safety Home
                </Typography>
                <Typography color="#fff" mt={2}>
                  Our product will speed up your work in creating your own
                  presentations
                </Typography>
              </Grid>
              <Grid item xs={6} md={3} lg={3}>
                <img src="/img/safehomeicon.png" />
                <Typography color="#fff" variant="h5" fontWeight={700}>
                  Safety Home
                </Typography>
                <Typography color="#fff" mt={2}>
                  Our product will speed up your work in creating your own
                  presentations
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Animator>
        <Animator variant="zoom" delay={300} timeout={500}>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            sx={{ display: { xs: "none", md: "block", lg: "block" } }}
          >
            <img src="/img/25.jpeg" width="100%" height="100%" />
          </Grid>
        </Animator>
      </Grid>
      <Grid container justifyContent="center">
        <Typography color="#fff" variant="h3" fontWeight={700}>
          {" "}
          Wish to see our Videos
        </Typography>
        <Grid container mt={3} padding={20}>
          <Grid item xs={12} md={6} lg={6} height="40vh">
            {" "}
            <video src="/img/1.mp4" controls height="100%" width="100%" />
          </Grid>
          <Grid item xs={12} md={6} lg={6} height="40vh">
            {" "}
            <video src="/img/2.mp4" controls height="100%" width="100%" />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default ServicesCategory;
