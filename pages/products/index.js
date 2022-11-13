import { Button, ButtonBase, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import React from "react";
import Footer from "../../components/Footer";
import MainLayout from "../../layouts/MainLayout";
const products = [
  {
    title: "AudioSource",
    url: "/img/products/audiosource.png",
    link: "",
  },
  {
    title: "Chief",
    url: "/img/products/chief.png",
    link: "https://www.chief-tech.com/en/",
  },
  {
    title: "Denon",
    url: "/img/products/denon.png",
    link: "https://www.denon.com/en-us/",
  },
  {
    title: "Hik-vision",
    url: "/img/products/hikvision.svg",
    link: "https://www.hikvision.com/africa/",
  },
  {
    title: "Jvs",
    url: "/img/products/jvc.png",
    link: "https://www.jvc.com/",
  },
  {
    title: "Lux",
    url: "/img/products/lux.png",
    link: "https://www.luxelectronic.com/en",
  },
  {
    title: "Honeywell-Home",
    url: "/img/products/honeywellhome.svg",
    link: "https://www.hikvision.com/africa/",
  },
  {
    title: "Lg",
    url: "/img/products/lg.png",
    link: "https://www.lg.com/africa",
  },
  {
    title: "Samsung",
    url: "/img/products/samsung.png",
    link: "https://www.samsung.com/us/",
  },
  {
    title: "Luxul",
    url: "/img/products/luxul.png",
    link: "https://www.luxul.com.au/",
  },
  {
    title: "Yamaha",
    url: "/img/products/yahama.svg",
    link: "https://www.yamaha.com/",
  },

  {
    title: "Sonance",
    url: "/img/products/sonance.png",
    link: "https://www.sonance.com/",
  },
  {
    title: "Sony",
    url: "/img/products/sony.png",
    link: "https://www.sony.net/",
  },
  {
    title: "Jbl",
    url: "/img/products/jbl.webp",
    link: "https://www.jbl.com/on/demandware.store/Sites-JB-US-Site/en_US/CountrySelector-ViewFullList?geoip=false",
  },
  {
    title: "Lux",
    url: "/img/products/lux.png",
    link: "https://www.samsung.com/us/",
  },
  {
    title: "Savant",
    url: "/img/products/savant.png",
    link: "https://www.savant.com/",
  },
  {
    title: "Osd",
    url: "/img/products/osd.png",
    link: "https://www.osdaudio.com/",
  },
  {
    title: "Sonos",
    url: "/img/products/sonos.png",
    link: "https://www.sonos.com/en/home",
  },
  {
    title: "Lutron",
    url: "/img/products/lurton.gif",
    link: "https://www.lutron.com/en-US/pages/default.aspx",
  },
  {
    title: "Urc",
    url: "/img/products/urc.png",
    link: "https://www.urc-automation.com/",
  },
  {
    title: "Iport",
    url: "/img/products/iport.png",
    link: "https://www.iportproducts.com/",
  },
  {
    title: "Apple",
    url: "/img/products/apple.png",
    link: "https://www.apple.com/home-app/",
  },
  {
    title: "J-tech Digital",
    url: "/img/products/jtech.png",
    link: "https://jtechdigital.com/",
  },
  {
    title: "Nest",
    url: "/img/products/nest.png",
    link: "https://nest-electronics.com/start/",
  },
  {
    title: "Ring",
    url: "/img/products/ring.svg",
    link: "https://ring.com/",
  },
  {
    title: "Rti",
    url: "/img/products/rti.png",
    link: "https://www.rticontrol.com/",
  },
];
function Index() {
  return (
    <div className="root">
      <MainLayout>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 55,
          }}
        >
          <Typography variant="h2" fontSize={50} fontWeight={700} color="#fff">
            Products
          </Typography>
          <Typography variant="caption" fontSize={18} color="#fff">
            Top products we use for our services
          </Typography>
        </div>
        <Grid
          container
          spacing={6}
          sx={{ padding: { xs: 2, md: 7 } }}
          justifyContent="center"
        >
          {products.map((cur, index) => (
            <Grid item xs={14} md={2.3} key={index}>
              <Link href={cur.link}>
                <Box
                  p={2}
                  bgcolor="#fff"
                  borderRadius={2}
                  display="flex"
                  height={200}
                  justifyContent="space-around"
                  alignItems="center"
                  flexDirection="column"
                >
                  <img
                    src={cur.url}
                    width="100%"
                    height="100px"
                    style={{ objectFit: "contain" }}
                  ></img>
                  <Typography
                    variant="caption"
                    mt={2}
                    fontSize={18}
                    fontWeight={700}
                  >
                    {cur.title}
                  </Typography>
                  <Link href={cur.link}>
                    <Button
                      sx={{
                        color: "#fff",
                        fontSize: 10,
                        background: "#000",
                      }}
                    >
                      Visit Site
                    </Button>
                  </Link>
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>

        <Footer />
      </MainLayout>
    </div>
  );
}

export default Index;
