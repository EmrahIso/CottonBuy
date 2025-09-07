const ProductCardShop = () => {
  return (
    <article className='flex flex-col items-center gap-8'>
      <a
        href='#'
        className='bg-white  inline-block border-1 border-transparent rounded-2xl hover:border-fuchsia-600'
      >
        <img src='./man.jpg' alt='img' className='h-[320px] rounded-2xl p-8' />
      </a>
      <h3 className='text-neutral-600 tracking-wider font-medium text-center'>
        Limited Edition Sneakers
      </h3>
      <span className='inline-block text-indigo-950 font-black text-xl -mt-4'>
        $125.00
      </span>
    </article>
  );
};

export default ProductCardShop;
