import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';
import ScrollToTop from './ScrollToTop';

const AppLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Toaster position="top-center" />
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
