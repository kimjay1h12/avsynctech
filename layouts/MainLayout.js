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
      href: "/",
      icon: <Home />,
      label: "About",
    },
    {
      href: "/",
      icon: <Home />,
      label: "Services",
    },
    {
      href: "/",
      icon: <Home />,
      label: "Product",
    },
    {
      href: "/",
      icon: <Home />,
      label: "Gallery",
    },
    {
      href: "/",
      icon: <Home />,
      label: "Contact us",
    },
  ];
  return (
    <div>
      <Head>
        <title> {title} | AVSYNCTECH</title>
        <meta property="og:title" content={title | "AVSYNTECH"} />
        <meta property="og:description" content={description || "SMART HOME"} />
      </Head>
      <Toolbar active={active} routes={routes} logo="/img/logo.png" />

      {children}
    </div>
  );
}

export default MainLayout;
