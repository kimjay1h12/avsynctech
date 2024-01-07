import ReactReadMoreReadLess from "react-read-more-read-less";
import {
  Business,
  Home,
  SettingsAccessibility,
  ArrowForward,
  CalendarMonth,
  Close,
  DeliveryDining,
  People,
  Settings,
} from "@mui/icons-material";
import {
  Grid,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  ButtonBase,
} from "@mui/material";
import React from "react";
import Animator from "./Animator";

function Card1() {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: 20,
        padding: 10,
      }}
    >
      <Grid
        container
        justifyContent="center"
        sx={{ marginTop: { xs: "150px", lg: 0 } }}
      >
        <Typography color="#fff" fontWeight={700} variant="h4" fontSize={40}>
          Control your entire space with one App
        </Typography>
        <Grid container justifyContent="center" mt={2}>
          <Grid item lg={9} justifyContent="center">
            <Typography
              color="#fff"
              lineHeight={1.5}
              variant="caption"
              fontSize={14}
            >
              With a control user interface your home or office truly connectd
              the global smart technologies to control, automate and monitor all
              your smart devices in a few simple steps
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        mt={10}
        container
        xs={12}
        md={12}
        lg={12}
        gap={8}
        alignItems="center"
        justifyContent="center"
      >
        <Grid
          xs={12}
          md={2.3}
          lg={2.3}
          style={{
            backgroundImage: `url(${"/img/41.jpeg"})`,
            backgroundSize: "cover",
            opacity: 1,
            borderRadius: 10,
          }}
          item
          padding={1}
          gap={1}
          margin={0}
          display="flex"
          flexDirection="column"
        >
          <Home sx={{ fontSize: 70, color: "#fff" }} />
          <Typography variant="h4" color="#fff" fontWeight={700}>
            Smart Home
          </Typography>
          <Typography variant="caption" color="#fff">
            <ReactReadMoreReadLess
              charLimit={160}
              readMoreText={"Read more ▼"}
              readLessText={"Read less ▲"}
              readLessStyle={{ color: "blue", fontSize: "10px" }}
              readMoreStyle={{ color: "blue", fontSize: "10px" }}
            >
              A Smart Home help with the day-to-day of life by automating tech
              for security, convenience, comfort and entertainment. However,
              devices can “talk” to one another in your home, creates a unique
              ecosystem that makes your life easier where appliances and devices
              communicates seamlessly via home network server. These appliances
              include; audio and video systems, lighting, HVAC, curtain and
              blinds, security system and so much more. AVS Technologies Ltd are
              professional system integrator and a solution provider for your
              home with intuitive, easy to use and user friendly. Our team has
              the expertise and capability to design and install a customized
              system specific to your needs, desires and budget friendly
            </ReactReadMoreReadLess>
          </Typography>
        </Grid>

        <Grid
          xs={12}
          md={2.3}
          lg={2.3}
          style={{
            backgroundImage: `url(${"/img/office.jpeg"})`,
            backgroundSize: "cover",
            opacity: 1,
            borderRadius: 10,
          }}
          item
          padding={1}
          gap={1}
          margin={0}
          display="flex"
          flexDirection="column"
        >
          <Business sx={{ fontSize: 70, color: "#fff" }} />
          <Typography variant="h4" color="#fff" fontWeight={700}>
            Smart Office
          </Typography>
          <Typography variant="caption" color="#fff">
            <ReactReadMoreReadLess
              charLimit={170}
              readMoreText={"Read more ▼"}
              readLessText={"Read less ▲"}
              readLessStyle={{ color: "blue", fontSize: "10px" }}
              readMoreStyle={{ color: "blue", fontSize: "10px" }}
            >
              A Smart Office integrates systems and devices altogether for
              effective communication to work intelligently; enabling
              monitoring, controlling and putting management system in place
              with smart technology using touch screen panel, iOS and other
              smart devices. AVS Technologies Ltd offers trusted smart solutions
              to control Audiovisual, teleconferencing, digital signate systems,
              security, IT infrastructure, access control and time attendance
              biometric systems. As a business owner or facility manager you
              have enough to worry about without letting the technology of
              business operations distract you. we can give you competitive
              advantage by improving your operating efficiencies. Sets your
              lighting, HVAC, music and video to greet your customers with the
              perfect welcome.
            </ReactReadMoreReadLess>
          </Typography>
        </Grid>

        <Grid
          xs={12}
          md={2.3}
          lg={2.3}
          style={{
            backgroundImage: `url(${"/img/beautifyliving.png"})`,
            backgroundSize: "cover",
            opacity: 1,
            borderRadius: 10,
          }}
          item
          padding={1}
          gap={1}
          margin={0}
          display="flex"
          flexDirection="column"
        >
          <SettingsAccessibility sx={{ fontSize: 70, color: "#fff" }} />
          <Typography variant="h4" color="#fff" fontWeight={700}>
            Smart Services
          </Typography>
          <Typography variant="caption" color="#fff">
            <ReactReadMoreReadLess
              charLimit={100}
              readMoreText={"Read more ▼"}
              readLessText={"Read less ▲"}
              readLessStyle={{ color: "blue", fontSize: "10px" }}
              readMoreStyle={{ color: "blue", fontSize: "10px" }}
            >
              Smart Services at AVS Technologies Ltd offers you proactive
              advice, remedies and building competitive advantage in your
              business. Our smart services experts engage your office on a
              regular basis to understand your challenges and opportunities at
              any given time, whether you are a small business or a large
              enterprise, your network and IT infrastructure provides the
              backbone of your entire business operations. AVS Technologies Ltd
              delivers smart services extends to procurement, supply of all ELV
              equipment in a wide range and product recommendations as well as
              quality of after-sales-service.
            </ReactReadMoreReadLess>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Card1;
