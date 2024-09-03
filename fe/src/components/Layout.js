import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import ProductManagement from './ProductManagement';
import OrderDetails from './OrderDetails';
import Navbar from './Navbar';
import axios from 'axios';
import Dashboard from './Dashboard'; // Import the Dashboard component

const Layout = ({ loggedIn, onLoginSuccess, onLogout }) => {
  const [hasNewOrderData, setHasNewOrderData] = useState(false);

  useEffect(() => {
    const checkForNewOrderData = async () => {
      try {
        const response = await axios.get('https://sufiyakhanum.vercel.app/api/orders/new-data');
        if (response.data.hasNewData) {
          setHasNewOrderData(true);
        } else {
          setHasNewOrderData(false);
        }
      } catch (error) {
        console.error('Error fetching new order data', error);
      }
    };

    checkForNewOrderData();

    const intervalId = setInterval(checkForNewOrderData, 30000); // Poll every 30 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Navbar hasNewOrderData={hasNewOrderData} /> {/* Navbar with notification */}
      <Routes>
        <Route
          path="/login"
          element={
            loggedIn ? (
              <Navigate to="/dashboard" />
            ) : (
              <Login onLoginSuccess={() => onLoginSuccess(true)} />
            )
          }
        />
        <Route
          path="/dashboard"
          element={loggedIn ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/admin"
          element={loggedIn ? <ProductManagement onLogout={() => onLogout(false)} /> : <Navigate to="/login" />}
        />
        <Route
          path="/order"
          element={loggedIn ? <OrderDetails /> : <Navigate to="/login" />}
        />
        <Route
          path="*"
          element={<Navigate to={loggedIn ? "/dashboard" : "/login"} />}
        />
      </Routes>
    </>
  );
};

export default Layout;
