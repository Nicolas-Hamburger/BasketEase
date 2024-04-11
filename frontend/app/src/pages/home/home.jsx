import React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography, TextField, Button, Box } from "@material-ui/core";
import "../../styles/global.css";
import Navbar from "../../components/navbar/navbar";

export default function Home () {
  return (
    <>
      <Grid container>
        <Grid item xs={1}>
          <Navbar />
        </Grid>
        <Grid item xs={11}>
          <Box className="container-global">
            <Typography variant="h4">Bienvenido Usuario</Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}