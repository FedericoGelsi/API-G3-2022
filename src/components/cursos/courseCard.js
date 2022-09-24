import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Box from '@mui/system/Box';


export default function ImgMediaCard() {
  return (
    <Box>
      <Card sx={{ maxWidth: 768 }}>
        <Grid container spacing={2}>
          <Grid xs={2}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="128"
              width="128"
              image="../../static/images/logo192.png"
            />
          </Grid>
          <Grid container xs={10}>
            <Grid container xs>
              <Grid>
                <Typography gutterBottom variant="title" component="div">
                  Clase 1
                </Typography>
              </Grid>
            </Grid>
            <Grid xs={4}></Grid>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}

<Card>
  <CardMedia
    component="img"
    alt="green iguana"
    height="140"
    image="src/static/images/logo192.png"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      Lizard
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Lizards are a widespread group of squamate reptiles, with over 6,000
      species, ranging across all continents except Antarctica
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small">Share</Button>
    <Button size="small">Learn More</Button>
  </CardActions>
</Card>;
