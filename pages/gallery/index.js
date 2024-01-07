import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import MainLayout from "../../layouts/MainLayout";
import Footer from "../../components/Footer";
import { Dialog, DialogTitle, Grid } from "@mui/material";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function TitlebarBelowMasonryImageList() {
  const [zoom, setZoom] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <MainLayout
      active="Gallery"
      title="Gallery"
      description="View Our Previous Works"
    >
      <div style={{ marginTop: 2 }}>
        <Box
          sx={{
            width: "100%",
            height: "100%",

            background: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            container
            gap={2}
            sx={{ justifyContent: "center", width: "100%", height: "100%" }}
          >
            {itemData.map((item) => (
              <Grid item xs={12} md={3.7} lg={3.7} key={item.img}>
                <img
                  src={item.img}
                  alt={item.title}
                  onClick={handleClickOpen}
                  width="100%"
                  height="100%"
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Dialog
          onClose={handleClose}
          open={open}
          fullWidth="true"
          maxWidth="sm"
        >
          <DialogTitle></DialogTitle>
          <div style={{ width: "100%" }}>
            <Slide>
              {slideImages.map((slideImage, index) => (
                <div className="each-slide" key={index}>
                  <div>
                    <img
                      src={slideImage.img}
                      style={{
                        height: "80vh",
                        width: "100%",
                      }}
                    ></img>
                    <span>{slideImage.caption}</span>
                  </div>
                </div>
              ))}
            </Slide>
          </div>
        </Dialog>
        <Footer />
      </div>
    </MainLayout>
  );
}

const itemData = [
  {
    img: "/img/2.jpg",
    title: "Bed",
    author: "swabdesign",
  },
  {
    img: "/img/6.jpeg",
    title: "Books",
    author: "Pavel Nekoranec",
  },
  {
    img: "/img/34.jpeg",
    title: "Sink",
    author: "Charles Deluvio",
  },
  {
    img: "/img/25.jpeg",
    title: "Kitchen",
    author: "Christian Mackie",
  },
  {
    img: "/img/31.jpeg",
    title: "Blinds",
    author: "Darren Richardson",
  },
  {
    img: "/img/30.jpeg",
    title: "Chairs",
    author: "Taylor Simpson",
  },
  {
    img: "/img/67.jpeg",
    title: "Laptop",
    author: "Ben Kolde",
  },
  {
    img: "/img/74.jpg",
    title: "Doors",
    author: "Philipp Berndt",
  },
  {
    img: "/img/27.jpeg",
    title: "Coffee",
    author: "Jen P.",
  },
  {
    img: "/img/16.jpeg",
    title: "Storage",
    author: "Douglas Sheppard",
  },
  {
    img: "/img/14.jpeg",
    title: "Candle",
    author: "Fi Bell",
  },
  {
    img: "/img/49.jpeg",
    title: "Coffee table",
    author: "Hutomo Abrianto",
  },
  {
    img: "/img/59.jpeg",
    title: "Coffee",
    author: "Jen P.",
  },
  {
    img: "/img/18.jpeg",
    title: "Storage",
    author: "Douglas Sheppard",
  },
  {
    img: "/img/30.jpeg",
    title: "Candle",
    author: "Fi Bell",
  },
  {
    img: "/img/67.jpeg",
    title: "Coffee table",
    author: "Hutomo Abrianto",
  },
  {
    img: "/img/69.jpeg",
    title: "Coffee table",
    author: "Hutomo Abrianto",
  },
  {
    img: "/img/59.jpeg",
    title: "Coffee table",
    author: "Hutomo Abrianto",
  },
];
const slideImages = [
  {
    img: "/img/2.jpg",
    title: "Bed",
    author: "swabdesign",
  },
  {
    img: "/img/36.jpeg",
    title: "Books",
    author: "Pavel Nekoranec",
  },
  {
    img: "/img/34.jpeg",
    title: "Sink",
    author: "Charles Deluvio",
  },
  {
    img: "/img/25.jpeg",
    title: "Kitchen",
    author: "Christian Mackie",
  },
  {
    img: "/img/32.jpeg",
    title: "Blinds",
    author: "Darren Richardson",
  },
  {
    img: "/img/30.jpeg",
    title: "Chairs",
    author: "Taylor Simpson",
  },
  {
    img: "/img/22.jpeg",
    title: "Laptop",
    author: "Ben Kolde",
  },
  {
    img: "/img/13.jpeg",
    title: "Doors",
    author: "Philipp Berndt",
  },
  {
    img: "/img/27.jpeg",
    title: "Coffee",
    author: "Jen P.",
  },
  {
    img: "/img/16.jpeg",
    title: "Storage",
    author: "Douglas Sheppard",
  },
  {
    img: "/img/14.jpeg",
    title: "Candle",
    author: "Fi Bell",
  },
  {
    img: "/img/37.jpeg",
    title: "Coffee table",
    author: "Hutomo Abrianto",
  },
  {
    img: "/img/27.jpeg",
    title: "Coffee",
    author: "Jen P.",
  },
  {
    img: "/img/16.jpeg",
    title: "Storage",
    author: "Douglas Sheppard",
  },
  {
    img: "/img/14.jpeg",
    title: "Candle",
    author: "Fi Bell",
  },
  {
    img: "/img/37.jpeg",
    title: "Coffee table",
    author: "Hutomo Abrianto",
  },
];
