import { Suspense } from 'react';
import { Header } from '../Header/Header';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { isLoggedIn, getToken } from '../../redux/auth/authSelectors';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheetManager } from 'styled-components';
import { useEffect } from 'react';
import { setToken, setIsLoggedIn } from '../../redux/auth/authSlice.js';
import axios from 'axios';
import { getCurrUserParams } from '../../redux/auth/authOperations.js';
import { getTodayWater } from '../../redux/water/waterOperations.js';

const Layout = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector(isLoggedIn);
  const location = useLocation();

  const token = useSelector(getToken);
  const firstToken = new URLSearchParams(window.location.search).get('token');

  useEffect(() => {
    if (firstToken) {
        axios.defaults.headers.common.Authorization = `Bearer ${firstToken}`;
            dispatch(setToken(firstToken));
            dispatch(getTodayWater())
            dispatch(getCurrUserParams()).unwrap()
                .then(() => {
              dispatch(setIsLoggedIn(true));
            })
              .catch(() => {
                dispatch(setIsLoggedIn(false));
              });
    } else if (token) {
            axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      dispatch(getTodayWater());
      dispatch(getCurrUserParams())
      .unwrap()
      .then(() => {
        dispatch(setIsLoggedIn(true));
      })
      .catch(() => {
        dispatch(setIsLoggedIn(false));
      });
    } else {
      dispatch(setIsLoggedIn(false));
    }
  }, [dispatch, firstToken, token]);

  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== ''}>
      <Header />

      <main>
        {(location.pathname === '/' ||
          location.pathname === '/home' ||
          location.pathname === '/welcome') && <Navigate to={isLogged ? '/home' : '/welcome'} />}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </StyleSheetManager>
  );
};
export default Layout;