import React, { useState } from "react";
import axios from "axios";
import { Grid, Typography, TextField, Button, Box } from "@material-ui/core";
import "../../styles/global.css";
import Navbar from "../../components/navbar/navbar";

const CreateUser = () => {
  const [newUser, setNewUser] = useState({
    nombre: "",
    apellido: "",
    tipo_usuario: "",
    numero_cedula: "",
    telefono: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/post/users", newUser);
      alert("Usuario creado exitosamente");
      setNewUser({
        nombre: "",
        apellido: "",
        tipo_usuario: "",
        numero_cedula: "",
        telefono: "",
        email: "",
        password: ""
      });
    } catch (error) {
      console.error("Error creating user:", error);
      alert("Error creando usuario");
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
            <Typography variant="h4">Crear Usuario</Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Nombre"
                name="nombre"
                value={newUser.nombre}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Apellido"
                name="apellido"
                value={newUser.apellido}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Tipo de Usuario"
                name="tipo_usuario"
                value={newUser.tipo_usuario}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Número de Cédula"
                name="numero_cedula"
                value={newUser.numero_cedula}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Teléfono"
                name="telefono"
                value={newUser.telefono}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Email"
                name="email"
                value={newUser.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Contraseña"
                name="password"
                type="password"
                value={newUser.password}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <Button type="submit" variant="contained" color="primary">
                Crear Usuario
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default CreateUser;
