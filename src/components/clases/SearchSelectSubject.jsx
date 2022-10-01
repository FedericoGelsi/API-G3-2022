import * as React from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";

function SearchSelectSubject(props) {
  const [subject, setSubject] = React.useState([]);
  const subjects = [
    "React",
    "Matematicas",
    "Literatura",
    "Testing"
  ];
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSubject(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <FormControl>
      <InputLabel id="demo-multiple-chip-label">Materias</InputLabel>
      <Select
        labelId="demo-multiple-chip-label"
        id="demo-multiple-chip"
        multiple
        value={subject}
        onChange={handleChange}
        input={<OutlinedInput id="select-multiple-chip" label="Materias" />}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value} label={value} color="secondary"/>
            ))}
          </Box>
        )}
      >
        {subjects.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SearchSelectSubject;
