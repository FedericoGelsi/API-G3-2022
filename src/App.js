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
import Registro from "./views/registro";
import Recupero from "./views/recupero";
import Inicio from "./views/inicio";
import { PrivateRoutes } from "./components/PrivateRoutes";
import Olvido from "./views/olvido";
import RegistroClase from "./views/registroClase";
import Clase from "./views/clase";
import { UserContext } from "./contexts/UserContext";
import { useState } from "react";

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
            <Route path="registro" element={<Registro />} />
            <Route path="registroAlum" element={<RegistroAlum />} />
            <Route path="registroProf" element={<RegistroProf />} />
            <Route path="recupero" element={<Recupero />} />
            <Route path="olvido" element={<Olvido />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/clases" element={<Clases />}>
                <Route path="/clases/:claseId" element={<Clase />} />
                <Route path="/clases/new" element={<Clase />} />
              </Route>
              <Route path="mis-clases" element={<MisClases />}>
                <Route path="mis-clases/:claseId" element={<Clase />} />
              </Route>
              <Route path="contrataciones" element={<Contrataciones />} />
              <Route path="notificaciones" element={<Notificaciones />} />
              <Route path="perfil" element={<Perfil />} />
            </Route>

            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
