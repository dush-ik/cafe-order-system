import { FC } from 'react';
import { productPriceIndex } from './constants';
import { capitalize } from './utils';
import { BeverageMap } from './types';

interface BeverageProps {
  orderCount: BeverageMap;
  setCount: (beverage: string) => void;
}

const Beverage:FC<BeverageProps> = ({ orderCount, setCount }):JSX.Element => {

  const getFormattedPrice = (beverage: string): string =>
    new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(
      productPriceIndex[beverage as keyof BeverageMap],
    )

  return (
    <>
    {
      Object.keys(productPriceIndex).map(beverage => (
        <div className='beverage' key={beverage}>
          <button id={beverage} onClick={() => setCount(beverage)}>
            {capitalize(beverage)} &nbsp;&nbsp;
            {getFormattedPrice(beverage)}
          </button>
          <div id={`${beverage}-count`}>
            {orderCount[beverage as keyof BeverageMap]}
          </div>
        </div>
      ))
    }
    </>
  )
}

export default Beverage;