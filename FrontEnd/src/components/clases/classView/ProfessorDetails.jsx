import * as React from "react";
import Typography from "@mui/material/Typography";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Divider,
} from "@mui/material";
import { Stack } from "@mui/system";
import { ExpandMore } from "@mui/icons-material";

function ProfessorDetails(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  let professor = props.professor;
  return (
    <Accordion
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
      elevation={0}
    >
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
        sx={{ p: 0 }}
      >
        <Stack direction="row" spacing={2} width="100%" alignItems="center">
          <Avatar>
            {professor.name}
            {professor.lastName}
          </Avatar>
          <Typography variant="body1" color="secondary" flexGrow={1}>
            Profesor - {professor.name + " " + professor.lastName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Ver mas
          </Typography>
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        <Stack>
          <Typography flexGrow={1}>{professor.experience}</Typography>
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}
export default ProfessorDetails;
