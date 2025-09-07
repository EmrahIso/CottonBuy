const ProductCardCarousel = () => {
  return (
    <article className='flex flex-col items-center gap-10'>
      <img src='./man.jpg' alt='img' className='h-[320px]' />
      <h3 className='text-neutral-600 tracking-wider font-medium text-center'>
        Limited Edition Sneakers
        <span className='inline-block text-indigo-950 font-black text-xl mt-2'>
          $125.00
        </span>
      </h3>
    </article>
  );
};

export default ProductCardCarousel;
