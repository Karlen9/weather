import { useState } from 'react';
import classes from './Counter.module.scss'

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  return (
    <>
      <div className={classes.button}>
        counter is now {count}
      </div>

      <button onClick={increment}>
        +
      </button>

      <button onClick={decrement}>
        -
      </button>
    </>
  );
};

export default Counter;