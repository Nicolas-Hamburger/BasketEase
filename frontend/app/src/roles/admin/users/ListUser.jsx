import React from "react";
import { Grid, Typography, TextField, Button, Box, Modal } from "@material-ui/core";
import "../../../styles/global.css";
import Navbar from "../../../components/navbar/navbar";
import Alert from '@mui/material/Alert';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ListUser() {
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
                                <Typography variant="h4" component="h1" className="titles">Usuarios en BasketEase (1)</Typography>
                                <Typography component="p" className="texts">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit perspiciatis explicabo libero, sint fugiat magnam placeat voluptate praesentium doloribus accusamus necessitatibus eos? Atque in modi voluptate. Soluta quos vel sed.</Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Nombre</TableCell>
                                                <TableCell>Apellido</TableCell>
                                                <TableCell>Tipo de Usuario</TableCell>
                                                <TableCell>Cédula</TableCell>
                                                <TableCell>Teléfono</TableCell>
                                                <TableCell>Correo</TableCell>
                                                <TableCell>Fecha de Registro</TableCell>
                                                <TableCell>Acción</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>

                                            <TableRow
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                <TableCell>
                                                    1
                                                </TableCell>
                                                <TableCell>
                                                    2
                                                </TableCell>
                                                <TableCell>
                                                    3
                                                </TableCell>
                                                <TableCell>
                                                    4
                                                </TableCell>
                                                <TableCell>
                                                    5
                                                </TableCell>
                                                <TableCell>
                                                    6
                                                </TableCell>
                                                <TableCell>
                                                    7
                                                </TableCell>
                                                <TableCell>
                                                    <a> 
                                                        <ModeEditIcon sx={{ fontSize: 20}} />
                                                    </a>
                                                    <a> 
                                                        <DeleteIcon sx={{ fontSize: 20}} />
                                                    </a>
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>

                                    </Table>
                                </TableContainer>
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
    )
}