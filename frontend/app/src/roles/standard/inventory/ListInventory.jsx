import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Typography, Button, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@material-ui/core";
import "../../styles/global.css";
import Navbar from "../../components/navbar/navbar";

export default function ListInventory() {
  const [inventories, setInventories] = useState([]);
  const [openEditPopup, setOpenEditPopup] = useState(false);
  const [editedInventory, setEditedInventory] = useState({
    inventario_id: '',
    producto_id: '',
    cantidad_actual: '',
    cantidad_minima: '',
    fecha_ultima_actualizacion: ''
  });

  useEffect(() => {
    fetchInventories();
  }, []);

  const fetchInventories = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/get/inventory');
      setInventories(response.data['Resultado API: ']);
    } catch (error) {
      console.error("Error fetching inventories:", error);
    }
  };

  const handleEdit = (inventory) => {
    setEditedInventory(inventory);
    setOpenEditPopup(true);
  };

  const handlePopupClose = () => {
    setOpenEditPopup(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedInventory({
      ...editedInventory,
      [name]: value
    });
  };

  const handleUpdateInventory = async () => {
    try {
      await axios.put(`http://127.0.0.1:8000/update/inventory/${editedInventory.inventario_id}`, editedInventory);
      alert("Inventario actualizado exitosamente");
      fetchInventories();
      setOpenEditPopup(false);
    } catch (error) {
      console.error("Error updating inventory:", error);
      alert("Error actualizando inventario");
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
            <Typography variant="h4">Lista de Inventarios</Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID del Inventario</TableCell>
                    <TableCell>ID del Producto</TableCell>
                    <TableCell>Cantidad Actual</TableCell>
                    <TableCell>Cantidad Mínima</TableCell>
                    <TableCell>Última Actualización</TableCell>
                    <TableCell>Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {inventories.map((inventory) => (
                    <TableRow key={inventory.inventario_id}>
                      <TableCell>{inventory.inventario_id}</TableCell>
                      <TableCell>{inventory.producto_id}</TableCell>
                      <TableCell>{inventory.cantidad_actual}</TableCell>
                      <TableCell>{inventory.cantidad_minima}</TableCell>
                      <TableCell>{inventory.fecha_ultima_actualizacion}</TableCell>
                      <TableCell>
                        <Button variant="contained" color="primary" onClick={() => handleEdit(inventory)}>
                          Editar
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
        <DialogTitle>Editar Inventario</DialogTitle>
        <DialogContent>
          <TextField
            label="ID del Producto"
            name="producto_id"
            variant="standard"
            fullWidth
            margin="normal"
            value={editedInventory.producto_id}
            onChange={handleInputChange}
          />
          <TextField
            label="Cantidad Actual"
            name="cantidad_actual"
            type="number"
            variant="standard"
            fullWidth
            margin="normal"
            value={editedInventory.cantidad_actual}
            onChange={handleInputChange}
          />
          <TextField
            label="Cantidad Mínima"
            name="cantidad_minima"
            type="number"
            variant="standard"
            fullWidth
            margin="normal"
            value={editedInventory.cantidad_minima}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handlePopupClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleUpdateInventory} color="primary">
            Actualizar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
