import { Link } from 'react-router';

const NotFoundPage: React.FC = () => {
  return (
    <section className='lg:pt-50 pt-6 flex gap-16 flex-col items-center'>
      <h1 className='sr-only'>CottonBuy NotFound Page</h1>
      <div className='flex lg:flex-row flex-col items-center lg:gap-36 gap-18'>
        <div className=' lg:block flex flex-col items-center'>
          <h2 className='text-indigo-950 uppercase text-8xl flex flex-col gap-3'>
            <span>Sorry</span>
            <span className='text-3xl text-fuchsia-500'>Page not Found :(</span>
          </h2>
          <Link
            to='/'
            data-testid='not-found-page-link-to-homepage'
            className='text-neutral-100 relative text-xl inline-block cursor-pointer font-medium rounded-full bg-gradient-to-bl from-fuchsia-500 to-purple-500 px-7 py-3.5 shadow-lg mt-24 hover:-translate-1 custom-shadow transition-all'
            onClick={() => window.scrollTo(0, 0)}
          >
            Go to Home Page
          </Link>
        </div>
        <div className=' lg:block flex flex-col items-center'>
          <h3 className=' pl-2 text-indigo-950 text-xl '>404 Error!</h3>
          <img
            src='/404.jpg'
            className='sm:h-[300px] h-[210px] block rounded-3xl mt-6 lg:translate-[30px]'
            alt='404 Error Image'
            title='Photo by Romson Preechawit on Unsplash.com'
          />
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
