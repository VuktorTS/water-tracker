import { Suspense } from 'react';
import { Header } from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { MainContainer, StyledMain } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <MainContainer>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </MainContainer>
      </StyledMain>
    </>
  );
};
export default Layout;
