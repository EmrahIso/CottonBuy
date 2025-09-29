import ShopNowLink from '../ui/ShopNowLink';

const Hero = () => {
  return (
    <section
      id='hero'
      className='container xl:max-w-[1280px] mx-auto items-center px-5 py-10 pb-42 grid lg:grid-cols-2 lg:gap-32 grid-cols-1'
      data-testid='hero'
    >
      <div className='lg:mt-[150px] sm:mt-[50px] mt-[25px] lg:w-auto md:w-[60%] sm:w-[75%] w-[97.5%] lg:block justify-center justify-self-center flex flex-col items-center'>
        <h1 className='font-bold sm:text-5xl text-4xl sm:leading-18 leading-14 text-indigo-950 lg:text-left text-center'>
          Premium{' '}
          <span className="inline-block relative after:content-[''] after:h-[2px] after:w-full after:bg-gradient-to-bl after:from-fuchsia-500 after:to-purple-500 after:absolute after:-bottom-[2.5px] after:left-0">
            T-Shirts
          </span>{' '}
          <br />
          for Every Style
        </h1>
        <p className='sm:text-lg text-base text-neutral-500 leading-7 mt-10 lg:text-left text-center'>
          Explore our collection of men’s and women’s t-shirts designed for
          comfort, durability, and everyday wear. Simple fits, modern looks, and
          quality you can feel.
        </p>
        <ShopNowLink />
      </div>
      <div className='mt-[150px] lg:block flex justify-center relative'>
        <img
          src='./woman.webp'
          loading='lazy'
          alt='A Image of our best seller product'
          className='sm:h-[420px] sm:w-[370px] h-[320px] w-[280px] lg:ml-[75px]'
          height='420px'
          width='370px'
        />
        <div className='bg-white px-6 py-4 rounded-2xl custom-shadow-2 sm:-top-[30px] lg:left-0 lg:right-auto sm:right-[125px] sm:bottom-auto right-[50%] bottom-0 -translate-x-[-50%] -translate-y-[-55%]  absolute text-indigo-950 font-semibold sm:text-2xl text-xl flex flex-col gap-1'>
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
