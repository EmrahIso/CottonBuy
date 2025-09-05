import ShopNowBtn from './ShopNowBtn';
import Carousel from './Carousel';

const FeaturedProducts = () => {
  return (
    <section className='bg-white'>
      <div className='container xl:max-w-[1280px] mx-auto px-4 py-24'>
        <div className='text-center'>
          <h2 className='text-4xl font-black text-indigo-950'>
            Featured Products
          </h2>
          <p className='text-lg text-neutral-500 leading-7 mt-10'>
            Discover our latest men’s and women’s styles — new drops every week.
          </p>
        </div>
        <div className='mt-36'>
          <Carousel />
        </div>
        <div className='flex flex-col items-center mt-16'>
          <p className='text-lg text-neutral-500 leading-7 mt-10'>
            View all of our products on — Shop page.
          </p>
          <ShopNowBtn />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
