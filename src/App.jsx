import Loader from 'components/Loader/Loader';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import RestictedRoute from 'components/RestictedRoute/RestictedRoute';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { selectIsLoading } from 'redux/auth/auth.selectors';

import { refreshThunk } from 'redux/auth/authThunk';

const Layout = lazy(() => import('./components/Layout/Layout'));
const HomePage = lazy(() => import('./page/HomePage'));
const WelcomePage = lazy(() => import('./page/WelcomePage'));
const RegistrationPage = lazy(() => import('./page/RegistrationPage'));
const LogInPage = lazy(() => import('./page/LoginPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<WelcomePage />} />
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <HomePage />
                </PrivateRoute>
              }
            />
            <Route
              path="/signin"
              element={
                <RestictedRoute>
                  <LogInPage />
                </RestictedRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <RestictedRoute>
                  <RegistrationPage />
                </RestictedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>

        <ToastContainer autoClose={2000} />
      </Suspense>
      {isLoading && <Loader />}
    </>
  );
};