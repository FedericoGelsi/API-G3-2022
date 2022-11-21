import { Box } from "@mui/system";
import Logo from "../../assets/icon_logoWhite.png";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

function AppLogo(props) {
  function getTextVariant() {
    const TextMd = {
      mr: 2,
      display: { xs: "none", md: "flex" },
      fontWeight: 500,
      color: "inherit",
      textDecoration: "none",
    };
    const TextXs = {
      mr: 1,
      display: { xs: "flex", md: "none" },
      flexGrow: 1,
      fontWeight: 500,
      color: "inherit",
      textDecoration: "none",
    };

    return props.variant === "xs" ? TextXs : TextMd;
  }

  function getLogoVariant() {
    const LogoXs = {
      display: { xs: "flex", md: "none" },
      mr: 1,
      height: 32,
      width: 32,
    };
    const LogoMd = {
      mr: 2,
      display: { xs: "none", md: "flex" },
      fontWeight: 500,
      color: "inherit",
      textDecoration: "none",
      height: 32,
      width: 32,
    };
    return props.variant === "xs" ? LogoXs : LogoMd;
  }

  return (
    <Stack direction="row" spacing={1} flexGrow={{xs:1, md:0}}>
      <Box sx={getLogoVariant()}>
        <img src={Logo} alt="for-education-logo"/>
      </Box>
      <Typography variant="h6" noWrap component="a" sx={getTextVariant()}>
        FOR EDUCATION
      </Typography>
    </Stack>
  );
}

export default AppLogo;
