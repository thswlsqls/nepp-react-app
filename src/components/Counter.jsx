import react, { useState } from 'react';

const Counter = () => {
  const a = 1;
  const [number, setNumber] = useState(a);
  const [arr, setArr] = useState([1, 2, 3]);

  // 배열을 비구조화 할당힘. 즉, useState함수가 배열을 리턴힘

  /*
  const number = useState(0)[0];
  const setNumber = useState(0)[1];

  const useState = (default) => {
    const state = default;
    const setState = () => {
      // ...
     }

    return [state, setState]
  }
  */

  const handleClick = () => {
    // number = number + 1;
    setNumber(number + 1);
    console.log(number);
  };
  // state가 변하면, 해당 함수도 재선언됨, 이것을 방지하는 훅이 있음
  return (
    <div style={{ padding: 50 }}>
      <h1>{number}</h1>
      <button onClick={handleClick}>+1</button>
    </div>
  );
};

export default Counter;
