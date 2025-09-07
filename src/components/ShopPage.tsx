import Navigation from './Navigation';
import Footer from './Footer';
import { ProductCardShop, ProductCardDetail } from './ProductCard';

const ShopPage = () => {
  return (
    <div>
      <Navigation />
      <div className='container xl:max-w-[1280px] mx-auto py-10 grid grid-cols-3 my-32 px-16 gap-y-32 gap-x-32'>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((key: number) => (
          <ProductCardShop key={key} />
        ))}
      </div>
      {/*<ProductCardDetail />*/}
      <Footer />
    </div>
  );
};

export default ShopPage;
