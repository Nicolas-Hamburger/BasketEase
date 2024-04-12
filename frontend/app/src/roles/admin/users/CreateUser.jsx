import React from "react";
import { Grid, Typography, TextField, Button, Box, Modal } from "@material-ui/core";
import "../../../styles/global.css";
import { Link } from "react-router-dom";
import Navbar from "../../../components/navbar/navbar";
import Alert from '@mui/material/Alert';

export default function CreateUser() {
    const [open, setOpen] = React.useState(false);
    const [showAlert, setShowAlert] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleCreateUser = () => {
        setShowAlert(true)
        setOpen(false)

        setTimeout(() => {
            setShowAlert(false)
        }, 3000)
    }

    return (
        <>
            <Grid container>
                <Grid item xs={1}>
                    <Navbar />
                </Grid>
                <Grid item xs={11}>
                    <Box className="container-global">
                        <Box>
                            <Grid item xs={12}>
                                <Typography variant="h4" component="h1" className="titles">Gestión de Usuarios</Typography>
                                <Typography component="p">Bienvenido a la función de Gestión de Usuarios de nuestro software. Aquí, los usuarios tienen el control total sobre la creación y gestión de cuentas, brindando una experiencia personalizada y segura.</Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <Box style={{ marginTop: '10px' }}>
                                    <Button className="button-primary" style={{ marginRight: '10px' }} onClick={handleOpen} variant="contained">Crear usuario</Button>
                                    <Link to="/admin/users/list">
                                        <Button className="button-primary" variant="contained">Ver usuarios</Button>
                                    </Link>
                                </Box>
                            </Grid>
                        </Box>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box className="container-modal">
                                <Typography id="modal-modal-title" variant="h5">
                                    Formulario de creación
                                </Typography>
                                <Box className="modal-body">
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                        Por favor para crear un usuario llene los siguientes campos
                                    </Typography>

                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <TextField
                                                required
                                                label="Nombre"
                                                variant="standard"
                                                fullWidth
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                required
                                                label="Apellido"
                                                variant="standard"
                                                fullWidth
                                                margin="normal"
                                                onChange=""
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                label="Cédula"
                                                type="Number"
                                                variant="standard"
                                                fullWidth
                                                margin="normal"
                                                onChange=""
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                label="Teléfono"
                                                type="Number"
                                                variant="standard"
                                                fullWidth
                                                margin="normal"
                                                onChange=""
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                label="Correo Electrónico"
                                                type="email"
                                                variant="standard"
                                                fullWidth
                                                margin="normal"
                                                onChange=""
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                label="Contraseña"
                                                type="password"
                                                variant="standard"
                                                fullWidth
                                                margin="normal"
                                                onChange=""
                                            />
                                        </Grid>

                                        <Button className="button-primary" type="submit" variant="contained" onClick={handleCreateUser}>
                                            Crear
                                        </Button>
                                        <Grid item xs={6}></Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Modal>
                    </Box>
                </Grid>
            </Grid>
            {showAlert && (
                <Alert severity="success" variant="filled" className="alerts">
                    ¡Usuario creado exitosamente!
                </Alert>
            )}
        </>
    );
}