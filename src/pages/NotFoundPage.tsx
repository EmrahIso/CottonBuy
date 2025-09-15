import { Link } from 'react-router';

const NotFoundPage = () => {
  return (
    <section className='pt-50 flex gap-16 flex-col items-center'>
      <div className='flex gap-36'>
        <div>
          <h2 className='text-indigo-950 uppercase text-8xl flex flex-col gap-3'>
            <span>Sorry</span>
            <span className='text-3xl text-fuchsia-500'>Page not Found :(</span>
          </h2>
          <Link
            to='/'
            className='text-neutral-100 relative text-xl inline-block cursor-pointer font-medium rounded-full bg-gradient-to-bl from-fuchsia-500 to-purple-500 px-7 py-3.5 shadow-lg mt-24 hover:-translate-1 custom-shadow transition-all'
          >
            Go to Home Page
          </Link>
        </div>
        <div>
          <h3 className=' pl-2 text-indigo-950 text-xl '>404 Error!</h3>
          <img
            src='/404.jpg'
            className='h-[300px] block rounded-3xl mt-6 translate-[30px]'
            alt='404 Error Image'
            title='Photo by Romson Preechawit on Unsplash.com'
          />
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
