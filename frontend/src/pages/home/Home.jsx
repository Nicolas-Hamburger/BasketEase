import React from "react";

function Home({ location }) {
    const { state } = location;
    const username = state && state.username;
    const userType = state && state.userType;

    return (
        <>
            <h1>Bienvenido Usuario {userType}</h1>
        </>
    )
}

export default Home;