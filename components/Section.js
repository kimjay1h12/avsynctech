import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import Animator from "./Animator";
import Card from "../components/Card";
import Card1 from "./Card1";
import CardRight from "./CardRight";
import CardLeft from "./CardLeft";
import { Dialog, DialogTitle } from "@mui/material";
import DialogPop from "./DialogPop";
import { Close } from "@mui/icons-material";
function Section() {
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
    <div>
      <Card1 />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: 100,
        }}
      >
        <Grid contsiner justifyContent="center" textAlign="center" padding={2}>
          <Typography color="#fff" fontWeight={700} variant="h3">
            Let&apos;s See How it Works
          </Typography>
          <Typography color="#fff" mt={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Typography>
        </Grid>
        <Grid
          mt={10}
          container
          xs={12}
          md={12}
          lg={12}
          gap={3}
          alignItems="center"
          justifyContent="center"
          padding={2}
          size="large"
        >
          <Animator variant="zoom" delay={400} timeout={500}>
            <Grid
              item
              xs={12}
              md={3}
              lg={3}
              display="flex"
              flexDirection="column"
              gap={2}
              margin={0}
            >
              <img src="/img/smarthome.png" width="100%" />
              <Typography variant="h5" fontWeight={700} color="#fff">
                SMART HOME
              </Typography>
              <Typography variant="p" color="#fff" lineHeight={1.8}>
                Home entertainment system provides the whole house multi-room AV
                with most convenient way of controlling entertainment within the
                <br />
                building.
              </Typography>
              <Grid mt={4}>
                <Dialog
                  onClose={handleClose}
                  open={open}
                  fullWidth="true"
                  maxWidth="lg"
                  style={{ scrollbarWidth: "hidden" }}
                >
                  <DialogTitle>
                    <Grid container justifyContent="space-between">
                      <Typography>Detail</Typography>{" "}
                      <Close onClick={handleClose} />{" "}
                    </Grid>
                  </DialogTitle>
                  <Grid container xs={12} md={12} lg={12} height="100vh">
                    <Grid item xs={12} md={12} lg={12} height="50vh">
                      <img
                        src="/img/smarthome.png"
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
                      textAlign="center"
                      display="flex"
                      justifyContent="center"
                      padding={4}
                    >
                      <Typography>
                        {" "}
                        AVS Technologies offer a wide range of surveillance CCTV
                        security systems which are designed and installed to
                        secure you, your domestic premises and your business.
                        AVS Technologies offer a wide range of surveillance CCTV
                        security systems which are designed and installed to
                        secure you, your domestic premises and your business.
                        AVS Technologies offer a wide range of surveillance CCTV
                        security systems which are designed and installed to
                        secure you, your domestic premises and your business.
                      </Typography>
                    </Grid>
                  </Grid>
                </Dialog>
                <Button
                  onClick={handleClickOpen}
                  size="large"
                  style={{ color: "#000", background: "#fff", borderRadius: 0 }}
                >
                  Learn more
                </Button>
              </Grid>
            </Grid>
          </Animator>
          <Animator variant="zoom" delay={600} timeout={500}>
            <Grid
              xs={12}
              md={3}
              lg={3}
              item
              display="flex"
              flexDirection="column"
              gap={2}
              margin={0}
            >
              <img src="/img/smarrtoffice.png" width="100%" />
              <Typography variant="h5" color="#fff" fontWeight={700}>
                SMART OFFICE
              </Typography>
              <Typography variant="p" lineHeight={1.8} color="#fff">
                Clear and concise communication is essential in every
                organization and business. AVS Technologies design, install and
                revamp up-to-date audiovisual
                <br /> technology.
              </Typography>
              <Grid mt={4}>
                <Dialog
                  onClose={handleClose1}
                  open={open1}
                  fullWidth="true"
                  maxWidth="lg"
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
                        src="/img/smarrtoffice.png"
                        width="100%"
                        height="100%"
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={12}
                      lg={12}
                      height="50vh"
                      textAlign="center"
                      display="flex"
                      justifyContent="center"
                      padding={4}
                    >
                      <Typography>
                        {" "}
                        AVS Technologies offer a wide range of surveillance CCTV
                        security systems which are designed and installed to
                        secure you, your domestic premises and your business.
                        AVS Technologies offer a wide range of surveillance CCTV
                        security systems which are designed and installed to
                        secure you, your domestic premises and your business.
                        AVS Technologies offer a wide range of surveillance CCTV
                        security systems which are designed and installed to
                        secure you, your domestic premises and your business.
                      </Typography>
                    </Grid>
                  </Grid>
                </Dialog>
                <Button
                  onClick={handleClickOpen1}
                  size="large"
                  style={{ color: "#000", background: "#fff", borderRadius: 0 }}
                >
                  Learn more
                </Button>
              </Grid>
            </Grid>
          </Animator>
          <Animator variant="zoom" delay={800} timeout={900}>
            <Grid
              xs={12}
              md={3}
              lg={3}
              item
              gap={2}
              margin={0}
              display="flex"
              flexDirection="column"
            >
              <img src="/img/smart.png" width="100%" />
              <Typography variant="h5" color="#fff" fontWeight={700}>
                CCTV SURVEILLANCE SYSTEM
              </Typography>
              <Typography variant="p" color="#fff" lineHeight={1.8}>
                AVS Technologies offer a wide range of surveillance CCTV
                security systems which are designed and i nstalled to secure
                you, your domestic premises and your business.
              </Typography>
              <Grid mt={4}>
                <Dialog
                  onClose={handleClose2}
                  open={open2}
                  fullWidth="true"
                  maxWidth="lg"
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
                      <img src="/img/smart.png" width="100%" height="100%" />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={12}
                      lg={12}
                      height="50vh"
                      textAlign="center"
                      display="flex"
                      justifyContent="center"
                      padding={4}
                    >
                      <Typography>
                        {" "}
                        AVS Technologies offer a wide range of surveillance CCTV
                        security systems which are designed and installed to
                        secure you, your domestic premises and your business.
                        AVS Technologies offer a wide range of surveillance CCTV
                        security systems which are designed and installed to
                        secure you, your domestic premises and your business.
                        AVS Technologies offer a wide range of surveillance CCTV
                        security systems which are designed and installed to
                        secure you, your domestic premises and your business.
                      </Typography>
                    </Grid>
                  </Grid>
                </Dialog>
                <Button
                  onClick={handleClickOpen2}
                  size="large"
                  style={{ color: "#000", background: "#fff", borderRadius: 0 }}
                >
                  Learn more
                </Button>
              </Grid>
            </Grid>
          </Animator>
        </Grid>
        <CardRight
          height="100%"
          variant="grow"
          mt={8}
          title={
            <Typography variant="h3" color="#fff" fontWeight={700}>
              Procurement and <br />
              system develompent
            </Typography>
          }
          buttonvisibility="none"
          subtitle=" As an indigenous audiovisual company in Nigeria,AVS Technologies does procurement and supply ofaudiovisual equipment in a wide range and pride ourselves on the 
impartiality of our advice,the practicality of our recommendations as well as quality of our after-sales service."
          src="/img/procurement.png"
        />
        <CardLeft
          mt={8}
          height="100%"
          variant="grow"
          title={
            <Typography variant="h3" color="#fff" fontWeight={700}>
              Have Access to Safe,
              <br /> Smart and Secure life
            </Typography>
          }
          buttonvisibility="none"
          subtitle="Integer netus mollis sed id arcu diam maximus pellentesque
faucibus hac ultricies. Commodo proin eu tristique enim si.
Cras magna fermentum himenaeos conubia accumsan 
suspendisse congue tristique. Fermentum est sapien rhoncus 
quis quam velit."
          src="/img/procurement.png"
        />
      </div>
    </div>
  );
}

export default Section;
