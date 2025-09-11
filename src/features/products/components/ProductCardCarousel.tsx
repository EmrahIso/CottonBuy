import { Link } from 'react-router';
import { type Product } from '../../../types/Product';

type ProductCardCarouselProps = {
  productData: Product;
};

const ProductCardCarousel = ({ productData }: ProductCardCarouselProps) => {
  return (
    <Link to='shop/card-details' className='flex flex-col items-center gap-10'>
      <img
        src={productData.image}
        alt={productData.title + 'image'}
        className='h-[320px]'
      />
      <h3 className='text-neutral-600 tracking-wider font-medium text-center flex flex-col'>
        {productData.title}
        <span className='inline-block text-indigo-950 font-black text-xl mt-2'>
          {'$' + productData.price}
        </span>
      </h3>
    </Link>
  );
};

export default ProductCardCarousel;
