import { FC, useState } from 'react';
import './App.css';
import Beverage from './Beverage';
import { BeverageMap } from './types';
import Bill from './Bill';

const App:FC = ():JSX.Element => {
  const [orderCount, setOrderCount] = useState<BeverageMap>({
    coffee: 0, tea: 0, milk: 0, coke: 0, beer: 0
  })

  const setCount = (beverage: string) => {
    let count = orderCount[beverage as keyof BeverageMap];
    const newOrderCount = {...orderCount, [beverage]: count + 1};
    setOrderCount(newOrderCount);
  }

  return (
    <div className="app">
      <header className='app__header'>
        <h1>Cafe Ordering</h1>
      </header>
      <main className='app__main'>
        <Beverage orderCount={orderCount} setCount={setCount} />
      </main>
      <aside className='app__aside'>
        <Bill orderCount={orderCount}/>
      </aside>
    </div>
  );
}

export default App;
