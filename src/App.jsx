import Loader from 'components/Loader/Loader';
import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { isLoggedIn } from './redux/auth/authSelectors';
import { useSelector } from 'react-redux';

import { getToken } from './redux/auth/authSelectors';

import Layout from 'components/Layout/Layout';
import WelcomePage from 'pages/WelcomePage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import { setAuthHeader } from './services/api';

const NotLoggedOrY = lazy(() => import('./components/NotLoggedOrY/NotLoggedOrY'));
const LoggedInOrNot = lazy(() => import('./components/LoggedInOrNot/LoggedInOrNot'));

export const App = () => {
  const isLogged = useSelector(isLoggedIn);
  const token = useSelector(getToken);

  if (token) { 
    setAuthHeader(token)
  };
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/welcome' element={
              <LoggedInOrNot redirectTo='/home' component={<WelcomePage />}/>
            } />
            <Route
              path="/home"
              element={
                  <NotLoggedOrY redirectTo='/welcome' component={<HomePage />}/>
              }
            />
            <Route
              path="/signin"
              element={
                <LoggedInOrNot redirectTo='/home' component={<SigninPage />}/>

              }
            />
            <Route
              path="/signup"
              element={
                <LoggedInOrNot redirectTo='/home' component={<SignupPage />}/>
              }
            />
            <Route
              path="/modal"
              element={
                  <ModalPage />
              }
            />
            <Route path="*" element={<Navigate to={isLogged ? '/home' : '/welcome'} replace />} />
          </Route>
        </Routes>
        <ToastContainer autoClose={2000} />
      </Suspense>
      {/* TODO: реалізувати логіку лоудера */}
      {/* {isLoading && <Loader />} */}
    </>
  );
};
