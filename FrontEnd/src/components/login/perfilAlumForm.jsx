import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";



export const PerfilAlum = (props) => {
  const userContext = useContext(UserContext);
  return (
    <Card {...props}>
      <CardContent>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Avatar
            src={userContext.user.avatar}
            sx={{
              height: 128,
              mb: 2,
              width: 128,
            }}
          />
          <Typography color="textPrimary" gutterBottom variant="h5">
            {userContext.user.name + " " + userContext.user.lastName}
          </Typography>
          <Typography color="textSecondary" variant="body2">
            {`${"Buenos Aires - "} ${"Argentina"}`}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button color="primary" fullWidth variant="text">
          Cargar Foto
        </Button>
      </CardActions>
    </Card>
  );
};
