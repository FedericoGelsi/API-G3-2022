import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Container, Typography, Link, Box, Divider } from "@mui/material";
import styled from "@emotion/styled";
import RegistroFormAlum from "../components/login/registroAlumForm";
import FechaNacimiento from "../components/login/bornDate";
import Logo from "../components/login/loginLogo";
import { motion } from "framer-motion";

//////////////////////////////////
const RootStyle = styled("div")({
  background: "rgb(249, 250, 251)",
  height: "100vh",
  display: "grid",
  placeItems: "center",
});

const HeadingStyle = styled(Box)({
  textAlign: "center",
});

const ContentStyle = styled(Box)({
  maxWidth: 480,
  padding: 25,
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  background: "#fff",
});

let easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  initial: {
    y: 40,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};






const RegistroAlum = ({ setAuth }) => {
    return (
      <RootStyle>
        <Container maxWidth="sm">
          <ContentStyle>
            <HeadingStyle component={motion.div} {...fadeInUp}>
              <Logo />
              <Divider sx={{ my: 3 }} component={motion.div} {...fadeInUp}>
                  <Typography sx={{ color: "text.secondary" }}>
                  Ingrese los siguientes datos:
                  </Typography>
              </Divider>
            </HeadingStyle>
            <RegistroFormAlum setAuth={setAuth} />
            <FechaNacimiento/>
            <Typography
              component={motion.p}
              {...fadeInUp}
              variant="body2"
              align="center"
              sx={{ color: "text.secondary", mt: 2 }}
            >
              Al registrarme, acepto los siguientes:{" "}
              <Link underline="always" color="text.primary" href="#">
                Terminos de Servicio
              </Link>{" "}
              &{" "}
              <Link underline="always" color="text.primary" href="#">
                Politica de Privacidad
              </Link>
              .
            </Typography>
  
            <Typography
              component={motion.p}
              {...fadeInUp}
              variant="body2"
              align="center"
              sx={{ mt: 3 }}
            >
              Ya posee una cuenta?{" "}
              <Link variant="subtitle2" component={RouterLink} to="/login">
                Login
              </Link>
            </Typography>
          </ContentStyle>
        </Container>
      </RootStyle>
    );
  };
  
export default RegistroAlum