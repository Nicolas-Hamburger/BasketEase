"use client"
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import '../../styles/login-register.css';
import '../../styles/global.css';


import Logo from '../../assets/logo-basketease.png';

function LoginPage() {
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
                            <Typography variant="h2">Iniciar Sesión</Typography>
                            <Typography variant='p'>Por favor digita tus credenciales asignadas para entrar al sistema.</Typography>
                            <TextField
                                label="Usuario"
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
                            <Typography variant='p'>
                                <Link to="/register" className='p-register'>
                                    Registrate aquí
                                </Link>
                            </Typography>
                            <Button type="submit" variant="contained" color="primary">Iniciar Sesión</Button>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default LoginPage;
