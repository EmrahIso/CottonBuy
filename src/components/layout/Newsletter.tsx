const Newsletter = () => {
  return (
    <section className='bg-white'>
      <div className='container xl:max-w-[1280px] mx-auto px-4 py-16 flex items-center gap-40 border-t-1 border-neutral-200'>
        <div>
          <h2 className='font-bold text-3xl leading-18 text-indigo-950'>
            Get T-shirt drops & restocks
          </h2>
          <p className='text-base text-neutral-500 leading-7 mt-3'>
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
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Your email here'
              autoComplete='true'
              className='p-4 text-lg h-full rounded-l-3xl'
            />
            <button
              type='submit'
              className='text-neutral-100 relative text-xl cursor-pointer font-medium rounded-full bg-gradient-to-bl from-fuchsia-500 to-purple-500 px-7 py-3.5 shadow-sm hover:from-neutral-100  hover:to-neutral-100 hover:text-indigo-950 transition-colors h-full'
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
