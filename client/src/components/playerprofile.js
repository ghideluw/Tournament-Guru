import React from "react";
import { useQuery } from '@apollo/client';



const Profile = () => {
//Get enrolled tournament data
const { loading, data } = useQuery(QUERY_TOURNEYS, {
    fetchPolicy: "no-cache"
});

const tourneyList = data?.tourneys || [];

    return (
<div class='profile'>
    <h1 id="profile">Welcome {Username}!</h1>
    <nav>
    <button id="signoutbtn">Sign Out</button>
    <button id="reportbtn">Report Player</button>
    <Link to="/">
    <button id="homebtn">Home</button>
    </Link>
    </nav>
    <h2>Enrolled Tournaments!</h2>
    {loading ? (
        <div>Loading...</div>
    ) : (
        <ul className="tourneys">
            <li>
                //API Call data required
            </li>
        </ul>
    )}




</div>
    );
}

export default Profile;