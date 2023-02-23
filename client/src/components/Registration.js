import React from "react";
import { useQuery } from '@apollo/client';



const Registration = () => {


const tourneyList = data?.tourneys || [];

    return (
<div class='profile'>
    <h1 id="profile">Welcome {Username}</h1>
    <nav>
    <button id="signoutbtn">Sign Out</button>
    <button id="reportbtn">Add a Tournament</button>
    <Link to="/">
    <button id="homebtn">Home</button>
    </Link>
    </nav>

API data for tournaments

</div>
    );
}

export default Registration;