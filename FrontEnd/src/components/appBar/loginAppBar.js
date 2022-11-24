import { AppBar, Button, Container } from "@mui/material";
import { Stack } from "@mui/system";
import { useNavigate } from "react-router-dom";
import AppLogo from "./appLogo";

function LoginAppBar(props) {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <AppBar position="sticky">
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          py={1}
        >
          <AppLogo variant="xs" />
          <AppLogo variant="md" />
          <Button variant="contained" color="secondary" onClick={handleLogin}>
            Login
          </Button>
        </Stack>
      </Container>
    </AppBar>
  );
}

export default LoginAppBar;
