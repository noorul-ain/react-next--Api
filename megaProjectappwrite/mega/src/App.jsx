// src/App.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import { Outlet } from 'react-router-dom';
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';


const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getcurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
          console.log('User fetched successfully:', userData);
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => {
        console.error('Error fetching user:', error);
        dispatch(logout());
      })
      .finally(() => {
        setLoading(false);
      });
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;

  return (
    // <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    //   <div className='w-full block'>
    //     <Header />
    //     <main>
    //       {/* <Outlet /> */}
    //     </main>
    //     <Footer />
    //   </div>
    // </div>
    <>
    <div>
      kjdsjksa
    </div>
    </>
  );
};

export default App;


