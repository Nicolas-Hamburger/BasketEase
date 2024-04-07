import React, { useState, useEffect } from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import './style.css';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo-basketease.png';

function LoginPage() {
    const [horaActual, setHoraActual] = useState("");
    const [error, setError] = useState('');
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const navigate = useNavigate();

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
        try {
            const response = await fetch('http://127.0.0.1:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            });

            if (response.ok) {
                const userData = await response.json();
                const { tipo_usuario } = userData;
                navigate('/home', { state: { ...credentials, tipo_usuario } });
            } else {
                const errorData = await response.json();
                setError(errorData.error || 'Error de inicio de sesión');
            }
        } catch (error) {
            console.error(error);
            setError('Error de red');
        }
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
                            <img src={Logo} alt="" />
                            <Typography variant="h2">Iniciar Sesión</Typography>
                            <Typography variant='p'>Por favor digita tus credenciales asignadas para entrar al sistema.</Typography>
                            {error && <Typography variant="body2" color="error">{error}</Typography>}
                            <TextField
                                label="Usuario"
                                variant="standard"
                                fullWidth
                                margin="normal"
                                value={credentials.username}
                                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                            />
                            <TextField
                                label="Contraseña"
                                type="password"
                                variant="standard"
                                fullWidth
                                margin="normal"
                                value={credentials.password}
                                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                            />
                            <Button type="submit" variant="contained" color="primary">Iniciar Sesión</Button>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default LoginPage;
