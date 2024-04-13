import Loader from 'components/Loader/Loader';
import { Suspense, lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// import { useDispatch, useSelector } from 'react-redux';

import Layout from 'components/Layout/Layout';
import WelcomePage from 'pages/WelcomePage';
import RegistrationPage from 'pages/RegistrationPage';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import ModalPage from './pages/ModalPage';

// const Layout = lazy(() => import('./components/Layout/Layout'));
// const HomePage = lazy(() => import('./pages/HomePage'));
// const WelcomePage = lazy(() => import('./pages/WelcomePage'));
// const RegistrationPage = lazy(() => import('./pages/RegistrationPage'));

export const App = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector();//TODO: добавити селектор

  // useEffect(() => { //TODO: добавити реалізацію
  //   dispatch();
  // }, [dispatch]);

//TODO: реалізувати логіку приватних маршрутів
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<WelcomePage />} />
            <Route
              path="/home"
              element={
                  <HomePage />
              }
            />
            <Route
              path="/signin"
              element={
                  <LoginPage />
              }
            />
            <Route
              path="/signup"
              element={
                  <RegistrationPage />
              }
            />
            <Route
              path="/modal"
              element={
                  <ModalPage />
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
        <ToastContainer autoClose={2000} />
      </Suspense>
      {/* TODO: реалізувати логіку лоудера */}
      {/* {isLoading && <Loader />} */}
    </>
  );
};