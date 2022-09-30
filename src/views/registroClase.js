import GridPage from "../components/GridPage";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Container, Typography, Link, Box, Divider } from "@mui/material";
import styled from "@emotion/styled";
import RegistroClaseForm from "../components/cursos/registroClaseForm";
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
  maxWidth: 880,
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


const RegistroClase = ({ setAuth }) => {
    return (
        <GridPage>
            
               
                    <ContentStyle>
                    
                        <HeadingStyle component={motion.div} {...fadeInUp}>   
                                <Typography  variant="h5"  sx={{color: "text.primary" , mb:2, textAlign:"left"}} >
                                    Datos necesarios para una Nueva Clase:
                                </Typography>        
                            <Divider sx={{ my: 0,mb:3 ,md:256}} component={motion.div} {...fadeInUp}>
                                
                            </Divider>
                        </HeadingStyle>


                        <RegistroClaseForm setAuth={setAuth} />

                        
                    </ContentStyle>
              
           
        </GridPage>
    );
  };
  
export default RegistroClase