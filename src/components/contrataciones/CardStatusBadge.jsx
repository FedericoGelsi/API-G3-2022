import * as React from "react";
import { Chip, Stack, Typography } from "@mui/material";


function CardStatusBadge(props) {
    function Capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function getBadgeColor(){
        let badgeColor;
        switch (props.status) {
            case "cancelada":
                badgeColor="error";
                break;
            case "finalizada":
                badgeColor="success";
                break;
            case "aceptada":
                badgeColor="primary";
                break;
            default:
                badgeColor ="info";
                break;
        }
        return badgeColor;
    };

  return (
    <Stack direction="row" spacing={1} pr={1.2}>
        <Typography>
            Estado:
        </Typography>
        <Chip label={Capitalize(props.status)} color={getBadgeColor()} size="small"/>
    </Stack>
  );
}

export default CardStatusBadge;
