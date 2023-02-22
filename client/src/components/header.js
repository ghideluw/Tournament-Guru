import React, { useState } from 'react';

import Home from "./home";
import ManageEvent "./ManageEvent";
import PlayerRegistraion from "./playerprofile";
import CreateEvent from "./eventRegistration";
import OrganizeEvent from "./eventDeatils";



function Header() {
    const [currentPage, handlePageChange] = useState("Home");
  
    // The renderPage method uses a switch statement to render the appropriate current page
    const renderPage = () => {
      switch (currentPage) {
        case "Home":
          return <Home />;
        case "Player Registration":
          return <PlayerRegistraion />;
        case "ManageEvent":
          return <ManageEvent />;
        case "OrganizeEvent":
          return <OrganizeEvent />;
          case "CreateEvent":
          return <CreateEvent />;
  
        default:
          return <Home />;
      }
    };
  
    return (
      <div>
        <nav className="navbar">
          <div className="navbar-brand">
            <a
              className="navbar-item"
              rel="noreferrer"
              target="_blank"
              href="https://github.com/ghideluw?tab=repositories"
            >
              <span className="content is-large">Luwam Ghide</span>
            </a>
          </div>
        </nav>
        {/* Pass the state value and the setter as props to NavTabs */}
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
        {/* Call the renderPage function passing in the currentPage */}
        <main>
          <div>{renderPage(currentPage)}</div>
        </main>
      </div>
    );
  }
  
  export default Header;