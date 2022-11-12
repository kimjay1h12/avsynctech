import {
  AppBar,
  Hidden,
  Backdrop,
  IconButton,
  Grow,
  Toolbar,
} from "@mui/material";
import { CloseOutlined, Menu } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import Link from "next/link";

const useStyles = makeStyles({
  toolbar: {
    color: "#fff",
    padding: "0px 20px",
    // borderBottom: "1px solid #ddd",
    transition: "all 0.3s",
    ["@media (min-width : 1200px)"]: {},
    "&.scrolled": {
      "& .icon": {
        color: "#fff",
      },
      boxShadow: "0 5px 5px #0001",
      background: "#111a",
      "& a": {
        color: "#fff",
      },
    },

    "& ul": {
      listStyle: "none",
      display: "flex",
      margin: 0,
      marginLeft: "auto",

      "& a": {
        display: "flex",
        alignItems: "center",
        padding: "20px 20px",
        textTransform: "capitalize",
        color: "#333",
        textDecoration: "none",

        "&:hover ,&.active": {
          color: "#fff",
          borderBottom: "2px solid #A45729",
        },
      },
    },

    ["@media  (min-width : 1200px)"]: {
      padding: "0px 10vw",
    },
  },
  menu: {
    marginLeft: "auto",
  },
  logo: {
    height: 50,
    transition: "all 0.3s",
    margin: "10px 0",
  },
  "& .icon": {
    color: "#fff",
  },
  drawer: {
    zIndex: 1500,
    background: "linear-gradient(to bottom, #000,  #fff)",
    position: "fixed",
    top: 0,
    left: 0,
    padding: 10,
    paddingTop: 40,
    width: "100%",

    "& ul": {
      display: "flex",
      listStyle: "none",
      padding: 0,
      flexDirection: "column",
      "& a": {
        width: "100%",
        display: "flex",
        alignItems: "center",
        textTransform: "capitalize",
        color: "#000a",
        padding: 15,
      },
      "& .icon": {
        color: "#fff",
      },
      "& .css-i4bv87-MuiSvgIcon-root": {
        color: "inherit",
      },
      "& li ": {
        "& span": {
          paddingLeft: 15,
        },
        "& a:hover , & a:active , & a.active": {
          background: "#fff",
          color: "#fff",
          fontWeight: 700,
        },
      },
    },
  },
});

function AppToolbar({ active, routes = [], logo }) {
  const classes = useStyles();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const Drawer = (
    <div className={classes.drawer}>
      <img
        src={logo}
        style={{ marginLeft: 10, width: "250px", objectFit: "cover" }}
      />

      <ul>
        {routes.map((cur) => (
          <li key={cur.href}>
            <Link href={cur.href}>
              <a className={active === cur.label ? "active" : ""}>
                {cur.icon}
                <span>{cur.label}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
  const watchScrolled = () => {
    const top = document.documentElement.scrollTop;
    if (top > 100) setScrolled(true);
    else setScrolled(false);
  };
  React.useEffect(() => {
    watchScrolled();
    window.addEventListener("scroll", watchScrolled);
  }, []);

  return (
    <AppBar
      elevation={0}
      style={{
        position: "sticky",
        background: "#111a",
      }}
    >
      <Hidden lgUp>
        <Backdrop open={menuOpen} onClick={() => setMenuOpen(false)} />
        <Grow in={menuOpen}>{Drawer}</Grow>
      </Hidden>
      <Toolbar
        variant="dense"
        className={[classes.toolbar, scrolled ? "scrolled" : ""].join(" ")}
      >
        <img className={classes.logo} src={logo} />
        <Hidden lgUp>
          <IconButton
            onClick={() => setMenuOpen(!menuOpen)}
            className={classes.menu}
          >
            {menuOpen ? (
              <CloseOutlined />
            ) : (
              <Menu className="icon" sx={{ color: "#fff" }} />
            )}
          </IconButton>
        </Hidden>

        <Hidden mdDown>
          <ul>
            {routes.map((cur) => (
              <li key={cur.href}>
                <Link href={cur.href}>
                  <a
                    style={{ color: "#fff" }}
                    className={active === cur.label ? "active" : ""}
                  >
                    {/* {cur.icon} */}
                    <span>{cur.label}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

export default AppToolbar;
