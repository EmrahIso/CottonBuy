const Newsletter = () => {
  return (
    <section className='bg-white' data-testid='newsletter'>
      <div className='container xl:max-w-[1280px] mx-auto px-4 py-16 flex items-center lg:flex-row flex-col justify-between lg:gap-5 gap-15 border-t-1 border-neutral-200'>
        <div>
          <h2 className='font-bold text-3xl leading-12  lg:text-left text-center text-indigo-950'>
            Get T-shirt drops & restocks
          </h2>
          <p className='text-base text-neutral-500 lg:text-left text-center  leading-7 lg:mt-3 mt-8'>
            No spam. Just fresh men’s & women’s tees, early access, and
            discounts.
          </p>
        </div>
        <div>
          <form
            action='#'
            onSubmit={(e) => e.preventDefault()}
            className='border-1 flex items-center rounded-4xl border-fuchsia-600 h-[60px]'
          >
            <label htmlFor='email' className='sr-only'>
              Enter your email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Your email here'
              autoComplete='true'
              className='p-4 lg:text-lg w-full text-base h-full rounded-l-3xl'
            />
            <button
              type='submit'
              className='text-neutral-100 relative lg:text-xl text-base cursor-pointer font-medium rounded-full bg-gradient-to-bl from-fuchsia-500 to-purple-500 px-7 py-3.5 shadow-sm hover:from-neutral-100  hover:to-neutral-100 hover:text-indigo-950 transition-colors h-full'
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
