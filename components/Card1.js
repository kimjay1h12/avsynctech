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
              fontSize={16}
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
          <SettingsAccessibility sx={{ fontSize: 70, color: "#f90F" }} />
          <Typography variant="h4" color="#fff" fontWeight={700}>
            Smart Home
          </Typography>
          <Typography variant="caption" color="#fff">
            <ReactReadMoreReadLess
              charLimit={100}
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
          <SettingsAccessibility sx={{ fontSize: 70, color: "#f90F" }} />
          <Typography variant="h4" color="#fff" fontWeight={700}>
            Smart Office
          </Typography>
          <Typography variant="caption" color="#fff">
            <ReactReadMoreReadLess
              charLimit={100}
              readMoreText={"Read more ▼"}
              readLessText={"Read less ▲"}
              readLessStyle={{ color: "blue", fontSize: "10px" }}
              readMoreStyle={{ color: "blue", fontSize: "10px" }}
            >
              So what is a smart office? A smart office or a smart office
              solution is an office space that incorporates modern technology to
              increase and boost employee productivity, experience, and
              efficiency by optimizing the office environment while
              simultaneously keeping the office space environmentally friendly
              and cost-efficient. This is usually managed in two different ways,
              firstly by introducing tools that support employees in finding,
              using, and collaborating in their office space, secondly by
              providing analytic capabilities and tools for facility managers to
              optimize space usage with smart systems.
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
          <SettingsAccessibility sx={{ fontSize: 70, color: "#f90F" }} />
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
              If the intelligent residential system is installed in the
              residence, the user can experience a safe, convenient and
              intelligent service system. The home is the main place of use of
              the intelligent residential system. In the process of use, it will
              involve automatic control, Internet and wiring technology, etc.
              The intelligent residential system design has the characteristics
              of high safety and easy operation, which can effectively The
              combination of electrical facilities and management system
              provides users with a comfortable living environment and promotes
              the development of interior design.
            </ReactReadMoreReadLess>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Card1;
