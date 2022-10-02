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
      <Grid container justifyContent="center">
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
          item
          style={{
            backgroundImage: `url(${"/img/smarthone.png"})`,
            backgroundSize: "cover",
            borderRadius: 10,
          }}
          xs={12}
          md={2.3}
          lg={2.3}
          display="flex"
          flexDirection="column"
          padding={1}
          gap={2}
          margin={0}
          alignSelf="stretch"
        >
          <Home sx={{ fontSize: 70, color: "#f90f" }} />
          <Typography variant="h4" fontWeight={700} color="#fff">
            Smart Home
          </Typography>
          <Typography variant="caption" color="#fff">
            A smart home help with the day-to-day of life by automating tech for
            security,convenience,comfort and entertainment
            <br />
            <ButtonBase>
              <Typography
                color="blue"
                variant="caption"
                onClick={handleClickOpen}
              >
                {" "}
                Read more....
              </Typography>
            </ButtonBase>
          </Typography>
          <Grid mt={2}>
            <Dialog
              onClose={handleClose}
              open={open}
              fullWidth="true"
              maxWidth="sm"
              style={{ scrollbarWidth: "hidden" }}
            >
              <DialogTitle>
                <Grid container justifyContent="space-between">
                  <Typography>Detail</Typography>{" "}
                  <Close onClick={handleClose} />
                </Grid>
              </DialogTitle>
              <Grid container xs={12} md={12} lg={12} height="100vh">
                <Grid item xs={12} md={12} lg={12} height="50vh">
                  <img
                    src="/img/P9.jpg"
                    width="100%"
                    height="100%"
                    alt="logo"
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={12}
                  lg={12}
                  height="50vh"
                  display="flex"
                  justifyContent="center"
                  padding={1}
                >
                  <Typography>
                    {" "}
                    A Smart Home help with the day-to-day of life by automating
                    tech for security, convenience, comfort and entertainment.
                    However, devices can “talk” to one another in your home,
                    creates a unique ecosystem that makes your life easier where
                    appliances and devices communicates seamlessly via home
                    network server. These appliances include; audio and video
                    systems, lighting, HVAC, curtain and blinds, security system
                    and so much more. AVS Technologies Ltd are professional
                    system integrator and a solution provider for your home with
                    intuitive, easy to use and user friendly. Our team has the
                    expertise and capability to design and install a customized
                    system specific to your needs, desires and budget friendly
                    solutions either for new building or revamping an existing
                    project
                  </Typography>
                </Grid>
              </Grid>
            </Dialog>
          </Grid>
        </Grid>

        <Grid
          xs={12}
          md={2.3}
          lg={2.3}
          style={{
            backgroundImage: `url(${"/img/smartoffice.png"})`,
            backgroundSize: "cover",
            borderRadius: 10,
          }}
          item
          display="flex"
          flexDirection="column"
          padding={1}
          gap={2}
          margin={0}
          alignSelf="stretch"
        >
          <Business sx={{ fontSize: 70, color: "#f90f" }} />
          <Typography variant="h4" fontWeight={700} color="#fff">
            Smart Office
          </Typography>
          <Typography variant="caption" color="#fff">
            A Smart Office integrates systems and devices altogether for
            effective communication to work intelligently;
            <br />
            <ButtonBase>
              <Typography
                color="blue"
                variant="caption"
                onClick={handleClickOpen1}
              >
                {" "}
                Read more....
              </Typography>
            </ButtonBase>
          </Typography>
          <Grid mt={2}>
            <Dialog
              onClose={handleClose1}
              open={open1}
              fullWidth="true"
              maxWidth="sm"
              style={{ scrollbarWidth: "hidden" }}
            >
              <DialogTitle>
                <Grid container justifyContent="space-between">
                  <Typography>Detail</Typography>{" "}
                  <Close onClick={handleClose1} />{" "}
                </Grid>
              </DialogTitle>
              <Grid container xs={12} md={12} lg={12} height="100vh">
                <Grid item xs={12} md={12} lg={12} height="50vh">
                  <img
                    src="/img/P9.jpg"
                    width="100%"
                    height="100%"
                    alt="logo"
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={12}
                  lg={12}
                  height="50vh"
                  display="flex"
                  justifyContent="center"
                  padding={1}
                >
                  <Typography>
                    {" "}
                    A Smart Home help with the day-to-day of life by automating
                    tech for security, convenience, comfort and entertainment.
                    However, devices can “talk” to one another in your home,
                    creates a unique ecosystem that makes your life easier where
                    appliances and devices communicates seamlessly via home
                    network server. These appliances include; audio and video
                    systems, lighting, HVAC, curtain and blinds, security system
                    and so much more. AVS Technologies Ltd are professional
                    system integrator and a solution provider for your home with
                    intuitive, easy to use and user friendly. Our team has the
                    expertise and capability to design and install a customized
                    system specific to your needs, desires and budget friendly
                    solutions either for new building or revamping an existing
                    project
                  </Typography>
                </Grid>
              </Grid>
            </Dialog>
          </Grid>
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
            Smart Services at AVS Technologies Ltd offers you proactive advice,
            remedies and building competitive advantage in your business.
            <br />
            <ButtonBase>
              <Typography
                color="blue"
                variant="caption"
                onClick={handleClickOpen2}
              >
                {" "}
                Read more....
              </Typography>
            </ButtonBase>
          </Typography>

          <Grid mt={2}>
            <Dialog
              onClose={handleClose2}
              open={open2}
              fullWidth="true"
              maxWidth="sm"
              style={{ scrollbarWidth: "hidden" }}
            >
              <DialogTitle>
                <Grid container justifyContent="space-between">
                  <Typography>Detail</Typography>{" "}
                  <Close onClick={handleClose2} />{" "}
                </Grid>
              </DialogTitle>
              <Grid container xs={12} md={12} lg={12} height="100vh">
                <Grid item xs={12} md={12} lg={12} height="50vh">
                  <img
                    src="/img/P9.jpg"
                    width="100%"
                    height="100%"
                    alt="logo"
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={12}
                  lg={12}
                  height="50vh"
                  display="flex"
                  justifyContent="center"
                  padding={1}
                >
                  <Typography>
                    {" "}
                    A Smart Home help with the day-to-day of life by automating
                    tech for security, convenience, comfort and entertainment.
                    However, devices can “talk” to one another in your home,
                    creates a unique ecosystem that makes your life easier where
                    appliances and devices communicates seamlessly via home
                    network server. These appliances include; audio and video
                    systems, lighting, HVAC, curtain and blinds, security system
                    and so much more. AVS Technologies Ltd are professional
                    system integrator and a solution provider for your home with
                    intuitive, easy to use and user friendly. Our team has the
                    expertise and capability to design and install a customized
                    system specific to your needs, desires and budget friendly
                    solutions either for new building or revamping an existing
                    project
                  </Typography>
                </Grid>
              </Grid>
            </Dialog>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Card1;
