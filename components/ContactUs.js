import { Mail, Message, Rowing } from "@mui/icons-material";
import emailjs from "@emailjs/browser";
import { getDatabase, ref, set } from "firebase/database";
import { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
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
import { initializeApp } from "firebase/app";
import { makeStyles } from "@mui/styles";
import Iframe from "react-iframe";
import React from "react";
import Map from "../components/Map";
import Animator from "./Animator";
import { firebaseConfig } from "../Backend/Firebase";
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
  const [country, setCountry] = useState("Country");
  const options = useMemo(() => countryList().getData(), []);
  const changeHandler = (country) => {
    setCountry(country);
  };
  const [showButton, setShowButton] = React.useState(true);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const form = React.useRef();
  const app = initializeApp(firebaseConfig);
  const countryset = country.label;
  function writeUserData() {
    const db = getDatabase(app);
    set(ref(db, "users/" + name), {
      name,
      email,
      message,
      countryset,
    });
    alert("Your Messages will be delivered");
  }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wkr80os",
        "template_tw0xx35",
        form.current,
        "cfb2n4hwNsmbzyQDB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {}
      );
  };
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
          <Grid flexDirection="column">
            <form
              ref={form}
              style={{
                gap: 10,
                mt: 50,
                display: "flex",
                flexDirection: "column",
              }}
              onSubmit={sendEmail}
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
                  name="name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
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
                  name="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
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
                  name="message"
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
              </FormControl>

              <Select
                options={options}
                value={country}
                placeholder="Select Country"
                onChange={changeHandler}
              />

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
                  type="submit"
                  variant="outlined"
                  onClick={writeUserData}
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
            </form>
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
