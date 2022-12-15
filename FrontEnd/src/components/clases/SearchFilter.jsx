import {
  TextField,
  Stack,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Checkbox,
  FormGroup,
  Rating,
  Grid,
} from "@mui/material";
import * as React from "react";
import { GET } from "../../hooks/apiCrud";
import CardClase from "./classCard";
import SearchSelectSubject from "./SearchSelectSubject";
import { useState } from "react";

function SearchFilter(props) {
  const [state, setState] = useState({
    unica: true,
    semanal: false,
    mensual: false,
  });

  const [value, setValue] = useState(2);

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { unica, semanal, mensual } = state;

  return (
    <Stack direction="column" spacing={2}>
      <TextField id="outlined-search" label="Buscar" type="search" />
      <Button onClick={props.getClasses} variant="contained">
        Buscar
      </Button>
      <SearchSelectSubject />
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormGroup>
          <FormLabel id="demo-radio-buttons-group-label">Tipo</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="individual"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="individual"
              control={<Radio />}
              label="Individual"
            />
            <FormControlLabel
              value="grupal"
              control={<Radio />}
              label="Grupal"
            />
          </RadioGroup>
        </FormGroup>
        <FormGroup>
          <FormLabel component="legend">Frecuencia</FormLabel>
          <FormControlLabel
            control={
              <Checkbox checked={unica} onChange={handleChange} name="unica" />
            }
            label="Unica"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={semanal}
                onChange={handleChange}
                name="semanal"
              />
            }
            label="Semanal"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={mensual}
                onChange={handleChange}
                name="mensual"
              />
            }
            label="Mensual"
          />
        </FormGroup>
        <FormGroup>
          <FormLabel component="legend">Calificacion</FormLabel>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </FormGroup>
      </FormControl>
      <FormControl
        sx={{ m: 3 }}
        component="fieldset"
        variant="standard"
      ></FormControl>
    </Stack>
  );
}

export default SearchFilter;
