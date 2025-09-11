import ShopNowLink from '../ui/ShopNowLink';

const Hero = () => {
  return (
    <section
      id='hero'
      className='container xl:max-w-[1280px] mx-auto items-center px-4 py-10 pb-42 grid grid-cols-2 gap-32'
    >
      <div className='mt-[150px]'>
        <h1 className='font-bold text-5xl leading-18 text-indigo-950'>
          Premium{' '}
          <span className="inline-block relative after:content-[''] after:h-[2px] after:w-full after:bg-gradient-to-bl after:from-fuchsia-500 after:to-purple-500 after:absolute after:-bottom-[2.5px] after:left-0">
            T-Shirts
          </span>{' '}
          <br /> for Every Style
        </h1>
        <p className='text-lg text-neutral-500 leading-7 mt-10'>
          Explore our collection of men’s and women’s t-shirts designed for
          comfort, durability, and everyday wear. Simple fits, modern looks, and
          quality you can feel.
        </p>
        <ShopNowLink />
      </div>
      <div className='mt-[150px] relative'>
        <img
          src='./woman.png'
          alt='A Image of our best seller product'
          className='h-[420px] ml-[75px]'
        />
        <div className='bg-white px-6 py-4 rounded-2xl custom-shadow-2 -top-[30px] -right-[15px] absolute text-indigo-950 font-semibold text-2xl flex flex-col gap-1'>
          <span className='text-xs text-neutral-500 font-semibold inline-block '>
            Status:{' '}
          </span>
          Best seller
        </div>
      </div>
    </section>
  );
};

export default Hero;
