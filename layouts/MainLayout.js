import React from "react";
import {} from "@mui/material";
import Head from "next/head";

import { makeStyles } from "@mui/styles";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "../components/Toolbar";
import { Home } from "@mui/icons-material";

const useStyles = makeStyles({
  root: {
    boxShadow: "none",
    color: "black",
  },
  button: {
    background: "blue",
    color: "white",
    marginTop: "-2%",
  },
});

function MainLayout({ active, title, description, children }) {
  const classes = useStyles();

  const routes = [
    {
      href: "/",
      icon: <Home />,
      label: "home",
    },
    {
      href: "/about",
      icon: <Home />,
      label: "About",
    },
    {
      href: "/services",
      icon: <Home />,
      label: "Services",
    },
    {
      href: "/products",
      icon: <Home />,
      label: "Product",
    },
    {
      href: "/gallery",
      icon: <Home />,
      label: "Gallery",
    },
    {
      href: "/contactus",
      icon: <Home />,
      label: "Contact us",
    },
  ];
  return (
    <div>
      <Head>
        <title> {title} | AVSYNCTECH</title>
        <meta property="og:title" content={title | "AVSYNTECH"} />
        <link rel="shortcut icon" href="/img/2.jpg" />

        <meta
          property="og:image"
          content="https://avsynctech.vercel.app/img/53.jpeg"
        />
        <meta property="og:description" content={description || "SMART HOME"} />
        {/* <meta property="og:image:width" content="1200" /> */}

        {/* <meta property="og:image:height" content="630" /> */}
      </Head>
      <Toolbar active={active} routes={routes} logo="/img/logo.png" />

      {children}
    </div>
  );
}

export default MainLayout;
