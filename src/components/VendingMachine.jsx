import { useState } from 'react';

const VendingMachine = () => {
  const [drinks, setDrinks] = useState([
    { id: 1, name: '물', price: 1000 },
    { id: 2, name: '커피', price: 2000 },
    { id: 3, name: '주스', price: 3000 },
  ]);
  const coins = [100, 500, 1000, 5000];
  // var drinks = [
  //   { id: 1, name: '물', price: 1000 },
  //   { id: 2, name: '커피', price: 2000 },
  //   { id: 3, name: '주스', price: 3000 },
  // ];

  const [currentCoin, setcurrentCoin] = useState(0);

  const handleAddCoinBtnClick = (e) => {
    let coin = parseInt(e.target.value);
    setcurrentCoin(currentCoin + coin);
  };

  const handleGetChangeClick = (e) => {
    setcurrentCoin(0);
  };

  const insertCoin = (coin) => {
    setcurrentCoin(currentCoin + coin);
  };
  const reset = () => setcurrentCoin(0);
  const buy = (price) => {
    if (!window.confirm('구매하시겠습니까?')) return; // 브라우저에 있는 기능으로, alert ,confirm, propmpt 등을 사용할 수 있음
    if (currentCoin < price) return alert('코인이 부족합니다.');
    setcurrentCoin(currentCoin - price);
  };
  const handleDeleteClick = (drinkId) => {
    let newDrinks = drinks.filter((drink, id) => drink.id != drinkId);
    setDrinks(newDrinks);
  };

  return (
    <div>
      <h2>현재 코인: {currentCoin}</h2>
      {/* <button onClick={handleAddCoinBtnClick} value='100'>
        100
      </button>
      <button onClick={handleAddCoinBtnClick} value='500'>
        500
      </button>
      <button onClick={handleAddCoinBtnClick} value='1000'>
        1000
      </button>
      <button onClick={handleAddCoinBtnClick} value='5000'>
        5000
      </button> */}
      {coins.map((coin, i) => (
        <button key={i} onClick={() => insertCoin(coin)}>
          {coin}원
        </button>
      ))}
      <br />
      <button onClick={reset}>거스름돈반환</button>
      {/* <button onClick={handleGetChangeClick}>거스름돈반환</button> */}
      {drinks.map((drink, i) => (
        <li
          key={i}
          onDoubleClick={() => {
            buy(drink.price);
          }}
        >
          {drink.name}
          <button onClick={() => handleDeleteClick(drink.id)}>삭제</button>
        </li>
      ))}
    </div>
  );
};

export default VendingMachine;
