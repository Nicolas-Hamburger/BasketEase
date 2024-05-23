import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Typography, Button, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@material-ui/core";
import "../../styles/global.css";
import Navbar from "../../components/navbar/navbar";

export default function ListSales() {
  const [sales, setSales] = useState([]);
  const [editSaleId, setEditSaleId] = useState(null);
  const [editProductId, setEditProductId] = useState("");
  const [editTotalSale, setEditTotalSale] = useState("");
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [deleteSaleId, setDeleteSaleId] = useState(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  useEffect(() => {
    fetchSales();
  }, []);

  const fetchSales = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/get/sales');
      setSales(response.data['Resultado API: ']);
    } catch (error) {
      console.error("Error fetching sales:", error);
    }
  };

  const handleEdit = (sale) => {
    setEditSaleId(sale.venta_id);
    setEditProductId(sale.producto_id);
    setEditTotalSale(sale.total_venta);
    setOpenEditDialog(true);
  };

  const handleEditSubmit = async () => {
    try {
      await axios.put(`http://127.0.0.1:8000/update/sale/${editSaleId}`, {
        producto_id: editProductId,
        total_venta: editTotalSale
      });
      alert("Venta actualizada exitosamente");
      setOpenEditDialog(false);
      fetchSales();
    } catch (error) {
      console.error("Error updating sale:", error);
      alert("Error actualizando venta");
    }
  };

  const handleDelete = (saleId) => {
    setDeleteSaleId(saleId);
    setOpenDeleteDialog(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      await axios.delete(`http://127.0.0.1:8000/delete/sale/${deleteSaleId}`);
      alert("Venta eliminada exitosamente");
      setOpenDeleteDialog(false);
      fetchSales();
    } catch (error) {
      console.error("Error deleting sale:", error);
      alert("Error eliminando venta");
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
            <Typography variant="h4">Lista de Ventas</Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID de Venta</TableCell>
                    <TableCell>Fecha de Venta</TableCell>
                    <TableCell>ID de Producto</TableCell>
                    <TableCell>ID de Usuario</TableCell>
                    <TableCell>Total de Venta</TableCell>
                    <TableCell>Fecha de Registro</TableCell>
                    <TableCell>Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {sales.map((sale) => (
                    <TableRow key={sale.venta_id}>
                      <TableCell>{sale.venta_id}</TableCell>
                      <TableCell>{sale.fecha_venta}</TableCell>
                      <TableCell>{sale.producto_id}</TableCell>
                      <TableCell>{sale.usuario_id}</TableCell>
                      <TableCell>{sale.total_venta}</TableCell>
                      <TableCell>{sale.fecha_registro}</TableCell>
                      <TableCell>
                        <Button variant="contained" color="primary" onClick={() => handleEdit(sale)}>
                          Editar
                        </Button>
                        <Button variant="contained" color="secondary" onClick={() => handleDelete(sale.venta_id)}>
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
      <Dialog open={openEditDialog} onClose={() => setOpenEditDialog(false)}>
        <DialogTitle>Editar Venta</DialogTitle>
        <DialogContent>
          <TextField
            label="ID del Producto"
            variant="standard"
            fullWidth
            margin="normal"
            value={editProductId}
            onChange={(e) => setEditProductId(e.target.value)}
          />
          <TextField
            label="Total de Venta"
            type="number"
            variant="standard"
            fullWidth
            margin="normal"
            value={editTotalSale}
            onChange={(e) => setEditTotalSale(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEditDialog(false)} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleEditSubmit} color="primary">
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openDeleteDialog} onClose={() => setOpenDeleteDialog(false)}>
        <DialogTitle>Confirmar Eliminación</DialogTitle>
        <DialogContent>
          ¿Estás seguro que deseas eliminar esta venta?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDeleteDialog(false)} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleDeleteConfirm} color="secondary">
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
