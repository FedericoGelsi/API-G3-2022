import GridPage from "../components/GridPage";
import { Box, Container, Grid, Typography } from '@mui/material';
import { PerfilProf } from '../components/login/perfilProfForm';
import { PerfilDetalleProf } from '../components/login/perfilProfFormDet';
import { PerfilAlum } from '../components/login/perfilAlumForm';
import { PerfilDetalleAlum} from '../components/login/perfilAlumFormDet';


const Perfil = () => (
  <>
    <GridPage>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{ mb: 3 }}
          variant="h4"
        >
          Perfil
        </Typography>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            context.user.role==="professor"? <PerfilProf />: <PerfilAlum/>
            
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            context.user.role==="professor"? <PerfilDetalleProf />: <PerfilDetalleAlum/>
          </Grid>
        </Grid>
      </Container>
    </Box>
    </GridPage>
  </>
  
);

export default Perfil;