import { Box, Container } from "@mui/material";
import ResponsiveAppBar from "../components/appBar/appBar";

function Inicio(props) {
    return ( <Box>
        <ResponsiveAppBar/>
        <Container>
            <h1>Inicio</h1>
        </Container>
    </Box> );
}

export default Inicio;