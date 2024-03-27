import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import './style.css';

function LoginPage() {
    return (
        <div className='container-login'>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <div className='bg-login'>
                <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla blanditiis iure quibusdam excepturi a modi earum ratione officiis nobis est. Eius dolores quisquam ipsum mollitia libero magni voluptas saepe corporis.</Typography>
                </div>
            </Grid>
            <Grid item xs={6}>
                <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum suscipit veritatis eum placeat optio accusamus magni enim quo, accusantium quod. Omnis totam, ullam est id enim quibusdam consequatur dolor officiis.</Typography>
            </Grid>
        </Grid>
        </div>
    );
}

export default LoginPage;
