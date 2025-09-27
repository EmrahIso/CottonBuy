import Hero from '../components/layout/Hero';
import Newsletter from '../components/layout/Newsletter';
import FeaturedProducts from '../components/layout/FeaturedProducts';

const HomePage = () => {
  return (
    <main data-testid='homepage'>
      <Hero />
      <FeaturedProducts />
      <Newsletter />
    </main>
  );
};

export default HomePage;
