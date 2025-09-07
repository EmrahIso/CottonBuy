import AddToCartButton from '../AddToCartButton';
import QuantityPicker from '../QuantityPicker';

const ProductCardDetail = () => {
  return (
    <section className='container xl:max-w-[1280px] mx-auto py-32 px-4 grid grid-cols-2 gap-32'>
      <div className='p-16 bg-white rounded-4xl shadow-sm'>
        <img src='./man.jpg' alt='img' className='h-full rounded-2xl p-8' />
      </div>
      <div className='flex flex-col justify-center'>
        <div>
          <p className='font-semibold tracking-wider text-sm uppercase text-neutral-500'>
            Category Gory
          </p>
          <h3 className='text-indigo-950 text-4xl font-bold mt-4'>
            Fall Limited Edition Sneakers
          </h3>
        </div>
        <p className='text-gray-500 font-regular text-sm mt-12 leading-5.75 tracking-wide'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          delectus sapiente doloribus incidunt quos, necessitatibus dignissimos
          fugiat labore aperiam. Id repellat beatae minima perspiciatis esse
          labore. Laboriosam accusamus libero possimus.
        </p>
        <span className='inline-block text-indigo-950 font-black text-3xl mt-6'>
          $125.00
        </span>
        <div className='mt-16 grid grid-cols-2 gap-16'>
          <QuantityPicker />
          <AddToCartButton />
        </div>
      </div>
    </section>
  );
};

export default ProductCardDetail;
