import Header from "../components/Header";
import {Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto py-16">
      <Outlet/>
      </main>
    </>
  );
};

export default Layout;
