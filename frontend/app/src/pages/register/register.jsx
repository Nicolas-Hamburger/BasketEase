"use client"
import React, { useState, useEffect } from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import '../../styles/login-register.css';
import Logo from '../../assets/logo-basketease.png';

function RegisterPage() {
    const [horaActual, setHoraActual] = useState("");

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

    const handleSubmit = async (event) => {
        event.preventDefault();
    };

    return (
        <div className='container-login'>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <div className='bg-login'>
                        <div className='text'>
                            <h2>Bienvenido</h2>
                            <p>{horaActual}</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} style={{ padding: "30px" }}>
                    <div className='container-forms'>
                        <form onSubmit={handleSubmit} className='login-form'>
                            <img src={Logo} alt="Basketease" title='Basketease' />
                            <Typography variant="h2">Registro de Usuario</Typography>
                            <Typography variant='p'>Por favor ingresa los datos solicitados para registrarte en el sistema.</Typography>
                            <TextField
                                label="Nombre"
                                variant="standard"
                                fullWidth
                                margin="normal"
                                value=""
                                onChange=""
                            />
                            <TextField
                                label="Correo Electrónico"
                                type="email"
                                variant="standard"
                                fullWidth
                                margin="normal"
                                value=""
                                onChange=""
                            />
                            <TextField
                                label="Contraseña"
                                type="password"
                                variant="standard"
                                fullWidth
                                margin="normal"
                                value=""
                                onChange=""
                            />
                            <Button type="submit" variant="contained" color="primary">Registrarse</Button>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default RegisterPage;
