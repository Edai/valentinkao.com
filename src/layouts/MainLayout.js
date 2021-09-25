import Footer from '@/components/footer';
import Navigation from '@/components/navigation';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
