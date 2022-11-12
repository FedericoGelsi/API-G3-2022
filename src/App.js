import { ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";
import * as React from "react";
import { theme } from "./components/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/login.js";
import Clases from "./views/clases";
import MisClases from "./views/mis-clases";
import Contrataciones from "./views/contrataciones";
import Notificaciones from "./views/notificaciones";
import Perfil from "./views/perfil";
import PreRegistro from "./views/preRegistro";
import RegistroProfesor from "./views/registroProfesor";
import Recupero from "./views/recupero";
import Inicio from "./views/inicio";
import { PrivateRoutes } from "./components/PrivateRoutes";
import Olvido from "./views/olvido";
import RegistroClase from "./views/registroClase";
import Clase from "./views/clase";
import { UserContext } from "./contexts/UserContext";
import { useState } from "react";
import RegistroAlumno from "./views/registroStudent";
import mock from "./data/mock.json";

function App() {
  const [user, setUser] = useState();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registroAlum" element={<RegistroAlumno />} />
            <Route path="/registroProf" element={<RegistroProfesor />} />
            <Route path="/preRegistro" element={<PreRegistro />} />
            <Route path="/recupero" element={<Recupero />} />
            <Route path="/olvido" element={<Olvido />} />
            <Route element={<PrivateRoutes />}>
              <Route
                path="/clases/:claseId"
                element={<Clase class={mock.classes[0]} />}
              />
              <Route path="/clases" element={<Clases />} />
              <Route path="/clases/new" element={<RegistroClase />} />
              <Route path="/mis-clases" element={<MisClases />} />
              <Route path="/mis-clases/:claseId" element={<Clase />} />
              <Route path="/contrataciones" element={<Contrataciones />} />
              <Route path="/notificaciones" element={<Notificaciones />} />
              <Route path="/perfil" element={<Perfil />} />
            </Route>

            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
