import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Typography, Button, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@material-ui/core";
import "../../styles/global.css";
import Navbar from "../../components/navbar/navbar";

export default function ListProducts() {
  const [products, setProducts] = useState([]);
  const [openEditPopup, setOpenEditPopup] = useState(false);
  const [editedProduct, setEditedProduct] = useState({
    producto_id: '',
    nombre: '',
    descripcion: '',
    proveedor: '',
    cantidad_disponible: '',
    cantidad_minima: '',
    precio_unitario: '',
    fecha_ultima_actualizacion: ''
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/get/products');
      setProducts(response.data['Resultado API: ']);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/delete/products/${id}`);
      alert("Producto eliminado exitosamente");
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Error eliminando producto");
    }
  };

  const handleEdit = (product) => {
    setEditedProduct(product);
    setOpenEditPopup(true);
  };

  const handlePopupClose = () => {
    setOpenEditPopup(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({
      ...editedProduct,
      [name]: value
    });
  };

  const handleUpdateProduct = async () => {
    try {
      await axios.put(`http://127.0.0.1:8000/update/products/${editedProduct.producto_id}`, editedProduct);
      alert("Producto actualizado exitosamente");
      fetchProducts();
      setOpenEditPopup(false);
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Error actualizando producto");
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
            <Typography variant="h4">Lista de Productos</Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID del Producto</TableCell>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Descripción</TableCell>
                    <TableCell>Proveedor</TableCell>
                    <TableCell>Cantidad Disponible</TableCell>
                    <TableCell>Cantidad Mínima</TableCell>
                    <TableCell>Precio Unitario</TableCell>
                    <TableCell>Última Actualización</TableCell>
                    <TableCell>Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products.map((product) => (
                    <TableRow key={product.producto_id}>
                      <TableCell>{product.producto_id}</TableCell>
                      <TableCell>{product.nombre}</TableCell>
                      <TableCell>{product.descripcion}</TableCell>
                      <TableCell>{product.proveedor}</TableCell>
                      <TableCell>{product.cantidad_disponible}</TableCell>
                      <TableCell>{product.cantidad_minima}</TableCell>
                      <TableCell>{product.precio_unitario}</TableCell>
                      <TableCell>{product.fecha_ultima_actualizacion}</TableCell>
                      <TableCell>
                        <Button variant="contained" color="primary" onClick={() => handleEdit(product)}>
                          Editar
                        </Button>
                        <Button variant="contained" color="secondary" onClick={() => handleDelete(product.producto_id)}>
                          Eliminar
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Grid>
      </Grid>
      <Dialog open={openEditPopup} onClose={handlePopupClose}>
        <DialogTitle>Editar Producto</DialogTitle>
        <DialogContent>
          <TextField
            label="Nombre del Producto"
            name="nombre"
            variant="standard"
            fullWidth
            margin="normal"
            value={editedProduct.nombre}
            onChange={handleInputChange}
          />
          <TextField
            label="Descripción"
            name="descripcion"
            variant="standard"
            fullWidth
            margin="normal"
            value={editedProduct.descripcion}
            onChange={handleInputChange}
          />
          <TextField
            label="Proveedor"
            name="proveedor"
            variant="standard"
            fullWidth
            margin="normal"
            value={editedProduct.proveedor}
            onChange={handleInputChange}
          />
          <TextField
            label="Cantidad Disponible"
            name="cantidad_disponible"
            type="number"
            variant="standard"
            fullWidth
            margin="normal"
            value={editedProduct.cantidad_disponible}
            onChange={handleInputChange}
          />
          <TextField
            label="Cantidad Mínima"
            name="cantidad_minima"
            type="number"
            variant="standard"
            fullWidth
            margin="normal"
            value={editedProduct.cantidad_minima}
            onChange={handleInputChange}
          />
          <TextField
            label="Precio Unitario"
            name="precio_unitario"
            type="number"
            variant="standard"
            fullWidth
            margin="normal"
            value={editedProduct.precio_unitario}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handlePopupClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleUpdateProduct} color="primary">
            Actualizar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
