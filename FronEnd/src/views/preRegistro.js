import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Container, Typography, Link, Box, Divider } from "@mui/material";
import styled from "@emotion/styled";
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


const PreRegistro = () => {
  return (
    <RootStyle>
      <Container maxWidth="sm">
        <ContentStyle>
          <HeadingStyle component={motion.div} {...fadeInUp}>
            <Logo />
            <Divider sx={{ my: 3 }} component={motion.div} {...fadeInUp}>
                <Typography sx={{ color: "text.secondary" }}>
                Elija el perfil con el que se quiere registrar:
                </Typography>
            </Divider>
          </HeadingStyle>

          <Typography component={motion.p} {...fadeInUp} align="center" sx={{ mt: 1 }} >
            
            <Link component={RouterLink} to="/registroAlum">
              Registrarme como Alumno 
              
            </Link>

          </Typography>

          <Typography component={motion.p} {...fadeInUp} align="center" sx={{ mt: 1 }} >
            
            <Link component={RouterLink} to="/registroProf">
              Registrarme como Profesor 
            </Link>

          </Typography>

        </ContentStyle>
      </Container>
    </RootStyle>
  );
};

export default PreRegistro;



