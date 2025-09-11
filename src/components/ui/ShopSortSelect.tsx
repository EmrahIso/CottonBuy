import { type sortType } from '../../pages/ShopPage';

type ShopSortSelectProps = {
  selectSortValue: sortType;
  selectSortChangeHandler: React.ChangeEventHandler<HTMLSelectElement>;
};

const ShopSortSelect = ({
  selectSortValue,
  selectSortChangeHandler,
}: ShopSortSelectProps) => {
  return (
    <div className='px-24 flex gap-8 mt-16 justify-between'>
      <label
        htmlFor='sort-products'
        className='inline-block text-lg font-medium text-neutral-600'
      >
        Sort Products:{' '}
      </label>
      <select
        name='sort-products'
        id='sort-products'
        value={selectSortValue}
        className='px-6 py-3'
        onChange={selectSortChangeHandler}
      >
        <option value='price'>Price</option>
        <option value='popularity'>Popularity</option>
      </select>
    </div>
  );
};

export default ShopSortSelect;
