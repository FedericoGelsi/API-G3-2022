import { ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";
import * as React from "react";
import { theme } from "./components/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/login.js";
import Inicio from "./views/inicio";
import MisCursos from "./views/mis-cursos";
import Contrataciones from "./views/contrataciones";
import Notificaciones from "./views/notificaciones";
import Perfil from "./views/perfil";
import Registro from "./views/registro";
import Recupero from "./views/recupero";
import { PrivateRoutes } from "./components/PrivateRoutes";
import Olvido from "./views/olvido";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Inicio />} />
            <Route path="mis-cursos" element={<MisCursos />} />
            <Route path="contrataciones" element={<Contrataciones />} />
            <Route path="notificaciones" element={<Notificaciones />} />
            <Route path="perfil" element={<Perfil />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="registro" element={<Registro />} />
          <Route path="recupero" element={<Recupero />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
          <Route path="olvido" element={<Olvido />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
