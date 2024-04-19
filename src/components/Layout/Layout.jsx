import { Suspense } from 'react';
import { Header } from '../Header/Header';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { isLoggedIn } from '../../redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { StyleSheetManager } from 'styled-components';

import DailyNormaModal from '../DailyNormaModal/DailyNormaModal';

const Layout = () => {
  const isLogged = useSelector(isLoggedIn);
  const location = useLocation();

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
