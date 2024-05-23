import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import '../../styles/login-register.css';
import '../../styles/global.css';
import Logo from '../../assets/logo-basketease.png';

export default function LoginPage() {
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
            const response = await fetch('http://127.0.0.1:8000/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: credentials.username,
                    password: credentials.password,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.access_token);
                navigate('/home');
            } else {
                setError('Nombre de usuario o contraseña incorrectos');
            }
        } catch (error) {
            console.error('Error de red:', error);
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
                            <img src={Logo} alt="Basketease" title='Basketease' />
                            <Typography variant="h2">Iniciar Sesión</Typography>
                            <Typography variant='p'>Por favor digita tus credenciales asignadas para entrar al sistema.</Typography>
                            {error && <Typography variant="body2" color="error">{error}</Typography>}
                            <TextField
                                label="Correo electrónico"
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
                            <Typography variant='p'>
                                <Link to="/register" className='p-register'>
                                    Registrate aquí
                                </Link>
                            </Typography>
                            <Button type="submit" variant="contained" className='button-primary'>Iniciar Sesión</Button>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
