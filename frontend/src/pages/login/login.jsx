import React, { useState, useEffect } from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import './style.css';

function LoginPage() {

    const [horaActual, setHoraActual] = useState("");
    const [error, setError] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const intervalo = setInterval(() => {
            const fechaActual = new Date();
            const hora = fechaActual.getHours();
            const minutos = fechaActual.getMinutes();
            const segundos = fechaActual.getSeconds();

            const horaFormateada = hora < 10 ? `0${hora}` : hora;
            const minutosFormateados = minutos < 10 ? `0${minutos}` : minutos;
            const segundosFormateados = segundos < 10 ? `0${segundos}` : segundos;

            setHoraActual(`${horaFormateada}:${minutosFormateados}:${segundosFormateados}`);
        }, 1000);

        return () => clearInterval(intervalo);
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === 'usuario' && password === 'contraseña') {
            window.location.href = '/home';
        } else {
            setError('Usuario o contraseña incorrectos');
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
                <Grid item xs={12} md={6} style={{ padding:"30px" }}>
                    <form handleSubmit={handleSubmit} className='login-form'>
                        <Typography variant="h4" gutterBottom>Iniciar Sesión</Typography>
                        {error && <Typography variant="body2" color="error">{error}</Typography>}
                        <TextField
                            label="Usuario"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                            label="Contraseña"
                            type="password"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button type="submit" variant="contained" color="primary" fullWidth>Iniciar Sesión</Button>
                    </form>
                </Grid>
            </Grid>
        </div>
    );
}

export default LoginPage;
