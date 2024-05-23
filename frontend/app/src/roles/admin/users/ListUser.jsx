import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Typography, Button, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@material-ui/core";
import "../../styles/global.css";
import Navbar from "../../components/navbar/navbar";

const ListUsers = () => {
  const [users, setUsers] = useState([]);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editedUser, setEditedUser] = useState({
    nombre: "",
    apellido: "",
    tipo_usuario: "",
    numero_cedula: "",
    telefono: "",
    email: "",
    password: ""
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/get/users');
      setUsers(response.data['Resultado API: ']);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setEditedUser({
      nombre: user.nombre,
      apellido: user.apellido,
      tipo_usuario: user.tipo_usuario,
      numero_cedula: user.numero_cedula,
      telefono: user.telefono,
      email: user.email,
      password: user.password
    });
    setOpenEditDialog(true);
  };

  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
    setSelectedUser(null);
    setEditedUser({
      nombre: "",
      apellido: "",
      tipo_usuario: "",
      numero_cedula: "",
      telefono: "",
      email: "",
      password: ""
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSaveEdit = async () => {
    try {
      await axios.put(`http://127.0.0.1:8000/update/users/${selectedUser.user_id}`, editedUser);
      alert("Usuario actualizado exitosamente");
      fetchUsers();
      handleCloseEditDialog();
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Error actualizando usuario");
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
            <Typography variant="h4">Lista de Usuarios</Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID de Usuario</TableCell>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Apellido</TableCell>
                    <TableCell>Tipo de Usuario</TableCell>
                    <TableCell>Número de Cédula</TableCell>
                    <TableCell>Teléfono</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.user_id}>
                      <TableCell>{user.user_id}</TableCell>
                      <TableCell>{user.nombre}</TableCell>
                      <TableCell>{user.apellido}</TableCell>
                      <TableCell>{user.tipo_usuario}</TableCell>
                      <TableCell>{user.numero_cedula}</TableCell>
                      <TableCell>{user.telefono}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        <Button variant="contained" color="primary" onClick={() => handleEdit(user)}>
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

      {/* Edit Dialog */}
      <Dialog open={openEditDialog} onClose={handleCloseEditDialog}>
        <DialogTitle>Editar Usuario</DialogTitle>
        <DialogContent>
          <TextField
            label="Nombre"
            name="nombre"
            value={editedUser.nombre}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Apellido"
            name="apellido"
            value={editedUser.apellido}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Tipo de Usuario"
            name="tipo_usuario"
            value={editedUser.tipo_usuario}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Número de Cédula"
            name="numero_cedula"
            value={editedUser.numero_cedula}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Teléfono"
            name="telefono"
            value={editedUser.telefono}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            value={editedUser.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Contraseña"
            name="password"
            type="password"
            value={editedUser.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditDialog} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleSaveEdit} color="primary">
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ListUsers;
