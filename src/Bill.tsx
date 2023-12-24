import { FC } from 'react';
import { BeverageMap } from './types';
import { productPriceIndex } from './constants';

interface BillProps {
  orderCount: BeverageMap;
}

const Bill: FC<BillProps> = ({ orderCount }):JSX.Element => {

  const getTotalCount = ():number => Object.keys(orderCount).reduce(
    (totalCount, beverage) => totalCount += orderCount[beverage as keyof BeverageMap]
  , 0);
  
  const getTotalPrice = ():number => Object.keys(orderCount).reduce(
    (totalPrice, beverage) => (totalPrice += 
      (orderCount[beverage as keyof BeverageMap] * productPriceIndex[beverage as keyof BeverageMap])
  ), 0);

  return (
    <section className='bill'>
      <h2>Your bill</h2>
      <hr />
      <p className='bill__total-item'>
        <span id="count">Item ordered: {getTotalCount()}</span>
      </p>
      <p className='bill__total-price'>
        <span id="price">Total price: {getTotalPrice()}</span>
      </p>
    </section>
  )
}

export default Bill;