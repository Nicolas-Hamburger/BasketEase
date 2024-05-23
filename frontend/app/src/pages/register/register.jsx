import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import "../../styles/login-register.css";
import "../../styles/global.css";
import Logo from "../../assets/logo-basketease.png";

export default function RegisterPage() {
  const [horaActual, setHoraActual] = useState("");
  const [userData, setUserData] = useState({
    nombre: '',
    apellido: '',
    numero_cedula: '',
    telefono: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    const intervalo = setInterval(() => {
      const fechaActual = new Date();
      setHoraActual(formatearHora(fechaActual));
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const formatearHora = (fechaActual) => {
    const hora = fechaActual.getHours();
    const minutos = fechaActual.getMinutes();
    const segundos = fechaActual.getSeconds();
    const horaFormateada = hora < 10 ? `0${hora}` : hora;
    const minutosFormateados = minutos < 10 ? `0${minutos}` : minutos;
    const segundosFormateados = segundos < 10 ? `0${segundos}` : segundos;

    return `${horaFormateada}:${minutosFormateados}:${segundosFormateados}`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/usuarios', userData);
      alert("Usuario registrado exitosamente");
    } catch (error) {
      console.error("Error registrando usuario:", error);
      alert("Error registrando usuario");
    }
  };

  return (
    <div className="container-login">
      <Grid container>
        <Grid item xs={12} md={6}>
          <div className="bg-login">
            <div className="text">
              <h2>Bienvenido</h2>
              <p>{horaActual}</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} style={{ padding: "30px" }}>
          <div className="container-forms">
            <form onSubmit={handleSubmit} className="login-form">
              <img src={Logo} alt="Basketease" title="Basketease" />
              <Typography variant="h2">Registro de Usuario</Typography>
              <Typography variant="body1">
                Por favor ingresa los datos solicitados para registrarte en el
                sistema.
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    required
                    label="Nombre"
                    name="nombre"
                    variant="standard"
                    fullWidth
                    margin="normal"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    label="Apellido"
                    name="apellido"
                    variant="standard"
                    fullWidth
                    margin="normal"
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
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={6}></Grid>
              </Grid>

              <Button type="submit" variant="contained" color="primary">
                Registrarse
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
