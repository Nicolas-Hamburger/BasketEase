import React, { useState } from "react";
import axios from "axios";
import { Grid, Typography, TextField, Button, Box } from "@material-ui/core";
import "../../styles/global.css";
import Navbar from "../../components/navbar/navbar";

export default function CreateInventory() {
  const [inventoryData, setInventoryData] = useState({
    producto_id: '',
    cantidad_actual: '',
    cantidad_minima: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInventoryData({
      ...inventoryData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/create/inventory', inventoryData);
      console.log(response.data);
      alert("Inventario creado exitosamente");
      setInventoryData({
        producto_id: '',
        cantidad_actual: '',
        cantidad_minima: ''
      });
    } catch (error) {
      console.error("Error creando inventario:", error);
      alert("Error creando inventario");
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
            <Typography variant="h4">Crear Inventario</Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    label="ID del Producto"
                    name="producto_id"
                    variant="standard"
                    fullWidth
                    margin="normal"
                    value={inventoryData.producto_id}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Cantidad Actual"
                    name="cantidad_actual"
                    type="number"
                    variant="standard"
                    fullWidth
                    margin="normal"
                    value={inventoryData.cantidad_actual}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Cantidad Mínima"
                    name="cantidad_minima"
                    type="number"
                    variant="standard"
                    fullWidth
                    margin="normal"
                    value={inventoryData.cantidad_minima}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary">
                    Crear Inventario
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
