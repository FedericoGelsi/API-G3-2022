import { Box } from "@mui/system";
import { MenuBook } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

function AppLogo(display) {
  return (
    <Box sx={{display: display}}>
      <MenuBook
        sx={{
          display: display,
          mr: 1,
          height: 32,
          width: 32,
        }}
      />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href=""
        sx={{
            mr: 1,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontWeight: 500,
            color: "inherit",
            textDecoration: "none"
          }}
      >
        FOR EDUCATION
      </Typography>
    </Box>
  );
}

export default AppLogo;

function getFlexProperties(){
    
}