import { ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";
import * as React from "react";
import ResponsiveAppBar from "./components/appBar/appBar";
import { theme } from "./components/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/login.js";
import Inicio from "./views/inicio";
import Registrarse from "./views/registrarse";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="registrarse" element={<Registrarse/>}/>
          <Route path="inicio" element={<Inicio/>}/>
          <Route path="mis-cursos" element={<h1>Mis Cursos</h1>}/>
          <Route path="contrataciones" element={<h1>Contrataciones</h1>}/>
          <Route path="notificaciones" element={<h1>Notificaciones</h1>}/>
          <Route path="perfil" element={<h1>Perfil</h1>}/>
          {/* <Route path="*" element={<h1>404 Not Found</h1>}/> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
