import React, { useState } from "react";
import axios from "axios";
import { Grid, Typography, TextField, Button, Box } from "@material-ui/core";
import "../../styles/global.css";
import Navbar from "../../components/navbar/navbar";

export default function CreateProduct() {
  const [productData, setProductData] = useState({
    nombre: '',
    descripcion: '',
    proveedor: '',
    cantidad_disponible: '',
    cantidad_minima: '',
    precio_unitario: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/create/products', productData);
      console.log(response.data);
      alert("Producto creado exitosamente");
      setProductData({
        nombre: '',
        descripcion: '',
        proveedor: '',
        cantidad_disponible: '',
        cantidad_minima: '',
        precio_unitario: ''
      });
    } catch (error) {
      console.error("Error creando producto:", error);
      alert("Error creando producto");
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
            <Typography variant="h4">Crear Producto</Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    label="Nombre del Producto"
                    name="nombre"
                    variant="standard"
                    fullWidth
                    margin="normal"
                    value={productData.nombre}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Descripción"
                    name="descripcion"
                    variant="standard"
                    fullWidth
                    margin="normal"
                    value={productData.descripcion}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Proveedor"
                    name="proveedor"
                    variant="standard"
                    fullWidth
                    margin="normal"
                    value={productData.proveedor}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Cantidad Disponible"
                    name="cantidad_disponible"
                    type="number"
                    variant="standard"
                    fullWidth
                    margin="normal"
                    value={productData.cantidad_disponible}
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
                    value={productData.cantidad_minima}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Precio Unitario"
                    name="precio_unitario"
                    type="number"
                    variant="standard"
                    fullWidth
                    margin="normal"
                    value={productData.precio_unitario}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary">
                    Crear Producto
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
