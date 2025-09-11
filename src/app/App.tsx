import { Outlet } from 'react-router';

import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';

const App = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
