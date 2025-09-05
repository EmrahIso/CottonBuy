const Footer = () => {
  return (
    <footer className='bg-indigo-950 '>
      <div className='container xl:max-w-[1280px] mx-auto flex px-8 pt-16 justify-between'>
        <h2 className='font-black text-gray-50 text-5xl mt-12'>CottonBuy</h2>
        <nav className='flex flex-col gap-2 pb-16 pr-4'>
          <h3 className='text-sm text-gray-400'>Information: </h3>
          <a
            href='#'
            className='underline font-medium text-sm text-neutral-200 pl-1'
          >
            Contact
          </a>
          <a
            href='#'
            className='underline font-medium text-sm text-neutral-200 pl-1'
          >
            Privacy
          </a>
          <a
            href='#'
            className='underline font-medium text-sm text-neutral-200 pl-1'
          >
            Security
          </a>
          <a
            href='#'
            className='underline font-medium text-sm text-neutral-200 pl-1'
          >
            FAQ
          </a>
        </nav>
      </div>
      <div className='border-t-1 border-neutral-500'>
        <div className='container xl:max-w-[1280px] mx-auto items-center px-4 flex justify-between py-5'>
          <p className='text-neutral-400 font-medium text-base'>
            © Copyright 2025. All rights reserved.
          </p>
          <p className='text-neutral-100 font-medium text-base'>
            Project made by Emrah Isović using FakeStore API.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
