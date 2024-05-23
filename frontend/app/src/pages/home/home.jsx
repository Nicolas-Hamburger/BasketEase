import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Grid, Typography, Box } from "@material-ui/core";
import "../../styles/global.css";
import Navbar from "../../components/navbar/navbar";
import { UserContext } from "../../context/UserContext";

export default function Home() {
  const { user } = useContext(UserContext);

  return (
    <>
      <Grid container>
        <Grid item xs={1}>
          <Navbar />
        </Grid>
        <Grid item xs={11}>
          <Box className="container-global">
            <Typography variant="h4">Bienvenido {user ? user.nombre : 'Usuario'}</Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
