import { ArrowBack } from "@mui/icons-material";
import { Stack, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function BackButtonBar() {
  let navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  return (
    <Stack justifyContent="flex-end" alignItems="flex-start">
      <Button color="primary" onClick={goBack}>
        <ArrowBack />
        <Typography>Volver</Typography>
      </Button>
    </Stack>
  );
}

export default BackButtonBar;
