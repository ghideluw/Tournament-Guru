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
    <div className="flex-column justify-flex-start min-100-vh">
      <Header></Header>
      <Footer></Footer>
  </div>
  );
}

export default App;
