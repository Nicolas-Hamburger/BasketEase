import React, { useContext, useState } from "react";
import { Grid, Typography, TextField, Button, Box } from "@material-ui/core";
import axios from "axios";
import "../../styles/global.css";
import Navbar from "../../components/navbar/navbar";

export default function Home() {
  const { user, setUser } = useContext(UserContext);
  const [userData, setUserData] = useState(user);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`http://127.0.0.1:8000/update/users/${userData.user_id}`, userData);
      console.log(response.data);
      alert("Usuario actualizado exitosamente");
      setUser(userData);
    } catch (error) {
      console.error("Error actualizando usuario:", error);
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
            <Typography variant="h4">Configuración General</Typography>
            {user && (
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      label="Nombre"
                      name="nombre"
                      variant="standard"
                      fullWidth
                      margin="normal"
                      value={userData.nombre}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Apellido"
                      name="apellido"
                      variant="standard"
                      fullWidth
                      margin="normal"
                      value={userData.apellido}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Cédula"
                      name="numero_cedula"
                      type="number"
                      variant="standard"
                      fullWidth
                      margin="normal"
                      value={userData.numero_cedula}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Teléfono"
                      name="telefono"
                      type="number"
                      variant="standard"
                      fullWidth
                      margin="normal"
                      value={userData.telefono}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Correo Electrónico"
                      name="email"
                      type="email"
                      variant="standard"
                      fullWidth
                      margin="normal"
                      value={userData.email}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Contraseña"
                      name="password"
                      type="password"
                      variant="standard"
                      fullWidth
                      margin="normal"
                      value={userData.password}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                      Actualizar
                    </Button>
                  </Grid>
                </Grid>
              </form>
            )}
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
