import Navigation from './Navigation';
import Hero from './Hero';
import FeaturedProducts from './FeaturedProducts';
import Newsletter from './Newsletter';
import Footer from './Footer';

import ShopPage from './ShopPage';

const App = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <FeaturedProducts />
      <Newsletter />
      <Footer />
      {
        //<ShopPage />
      }
    </div>
  );
};

export default App;
