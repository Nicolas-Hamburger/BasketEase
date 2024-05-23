import React, { useState } from "react";
import axios from "axios";
import { Grid, Typography, Button, Box, TextField } from "@material-ui/core";
import "../../styles/global.css";
import Navbar from "../../components/navbar/navbar";

export default function CreateSale() {
  const [productId, setProductId] = useState("");
  const [totalSale, setTotalSale] = useState("");

  const handleCreateSale = async () => {
    try {
      await axios.post('http://127.0.0.1:8000:puerto/post/sale', {
        producto_id: productId,
        total_venta: totalSale
      });
      alert("Venta creada exitosamente");
      setProductId("");
      setTotalSale("");
    } catch (error) {
      console.error("Error creating sale:", error);
      alert("Error creando venta");
    }
  };

  return (
    <>
      <Grid container>
        <Grid item xs={1}>
          <Navbar />
        </Grid>
        <Grid item xs={11}>
          <Box className="container-global">
            <Typography variant="h4">Crear Venta</Typography>
            <Box>
              <TextField
                label="ID del Producto"
                variant="standard"
                fullWidth
                margin="normal"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
              />
              <TextField
                label="Total de Venta"
                type="number"
                variant="standard"
                fullWidth
                margin="normal"
                value={totalSale}
                onChange={(e) => setTotalSale(e.target.value)}
              />
              <Button variant="contained" color="primary" onClick={handleCreateSale}>
                Crear Venta
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
