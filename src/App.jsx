import Loader from 'components/Loader/Loader';
import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { isLoggedIn } from './redux/auth/authSelectors';
import { useSelector } from 'react-redux';

import { getToken } from './redux/auth/authSelectors';
import { setAuthHeader } from './redux/auth/authOperations';

// import { useDispatch, useSelector } from 'react-redux';

import Layout from 'components/Layout/Layout';
import WelcomePage from 'pages/WelcomePage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import HomePage from 'pages/HomePage';
import ModalPage from './pages/ModalPage';

// const Layout = lazy(() => import('./components/Layout/Layout'));
// const HomePage = lazy(() => import('./pages/HomePage'));
// const WelcomePage = lazy(() => import('./pages/WelcomePage'));
// const SignupPage = lazy(() => import('./pages/SignupPage'));
const NotLoggedOrY = lazy(() => import('./components/NotLoggedOrY/NotLoggedOrY'));
const LoggedInOrNot = lazy(() => import('./components/LoggedInOrNot/LoggedInOrNot'));

export const App = () => {
  const isLogged = useSelector(isLoggedIn);
  const token = useSelector(getToken);

  if (token) { 
    setAuthHeader(token)
  };
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
                <SigninPage />
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
