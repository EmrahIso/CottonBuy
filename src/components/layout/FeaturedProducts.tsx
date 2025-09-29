import ShopNowLink from '../ui/ShopNowLink';
import Carousel from '../ui/Carousel';

const FeaturedProducts = () => {
  return (
    <section className='bg-white' data-testid='featured-products'>
      <div className='container xl:max-w-[1280px] mx-auto px-4 py-24'>
        <div className='text-center'>
          <h2 className='text-4xl font-black text-indigo-950'>
            Featured Products
          </h2>
          <p className='sm:text-lg text-base text-neutral-500 leading-7 mt-10'>
            Discover our latest men’s and women’s styles — new drops every week.
          </p>
        </div>
        <div className='mt-36'>
          <Carousel />
        </div>
        <div className='flex flex-col items-center mt-16'>
          <p className='sm:text-lg text-base text-neutral-500 leading-7 mt-10 text-center'>
            View all of our products on — Shop page.
          </p>
          <ShopNowLink />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
