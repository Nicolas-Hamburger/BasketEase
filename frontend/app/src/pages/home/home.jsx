"use cliente";
import React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import "../../styles/global.css";
import Navbar from "../../components/navbar/navbar";

function Home() {
  return (
    <>
      <Grid container>
        <Grid item xs={1}>
          <Navbar />
        </Grid>
        <Grid item xs={10}>
          <Grid className="container-global">
            <Typography variant="h1">Home</Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
