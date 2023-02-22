import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Profile from './pages/Profile';
import ManagerDash from './pages/ManagerDash';
import EventDetailsForm from '../components/eventDetails/eventDeatils';
import EventForm from '../components/eventRegistration/eventRegistration';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});


function App() {
  return (
    <Router>
      <div className="flex-column justify-center align-center min-100-vh bg-primary">
        <Routes>
          <Route 
            path="/" 
            element={<Home />} 
          />
          <Route 
            path="/profile" 
            element={<Matchup />} 
          />
          <Route 
            path="/managerDash/:id" 
            element={<Vote />} 
          />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
