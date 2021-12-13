import { useState } from 'react';

const Counter2 = () => {
  const [number, setNumber] = useState(0);

  const handlePlus = () => setNumber(number + 1);
  const handleMinus = () => setNumber(number - 1);

  // 함수 재활용
  const handleNumber = (n) => setNumber(number + n);

  return (
    <>
      <h2>현재 카운터 값은 {number}입니다.</h2>
      <button onClick={() => handleNumber(10)}>+10</button>
      <button onClick={() => handleNumber(3)}>+3</button>
      <button onClick={() => handleNumber(1)}>+1</button>
      <button onClick={() => handleNumber(-1)}>-1</button>
    </>
  );
};

export default Counter2;
