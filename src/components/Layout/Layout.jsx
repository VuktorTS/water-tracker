import { Suspense } from 'react';
import { Header } from '../Header/Header';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { isLoggedIn } from '../../redux/auth/authSelectors';
import { useSelector } from 'react-redux';

const Layout = () => {
  const isLogged = useSelector(isLoggedIn);
  const location = useLocation();
  // const endedURL = useRef(false);

  // useEffect(() => {
  //   if (!endedURL.current) {
  //     endedURL.current = true;
  //     // window.location.href += (isLogged ? '/home' : '/welcome');
  //   }
  // }, [isLogged, endedURL]);
  return (
    <>
      <Header />

      <main>
        {(location.pathname === '/' ||
          location.pathname === '/home' ||
          location.pathname === '/welcome') && <Navigate to={isLogged ? '/home' : '/welcome'} />}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
export default Layout;
