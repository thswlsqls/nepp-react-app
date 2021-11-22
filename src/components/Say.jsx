import { useState } from 'react';

const Say = () => {
  // message값을 useState로 관리

  const [message, setMessage] = useState('');
  const [color, setColor] = useState('black');
  const [style, setStyle] = useState({ color: 'white', background: 'black' });
  //   let message = '메세지';
  // useState를 사용하는 변수의 조건1 - 화면에 출력 조건2 - 변하는값
  const handleEnter = () => {
    // message = '안녕하세요';
    setMessage('안녕하세요');
  };

  const handleLeave = () => {
    // message = '안녕히 가세요';
    setMessage('안녕히 가세요');
  };

  const handleChange = (color) => {
    // const newStyle = { ...style };
    // newStyle.color = color;
    // setStyle(newStyle);
    setStyle({ ...style, color });
  };

  return (
    <>
      <div>
        <button onClick={handleEnter}>입장</button>
        <button onClick={handleLeave}>퇴장</button>
        <h1 style={style}>{message}</h1>
        <button style={{ color: 'red' }} onClick={() => handleChange('red')}>
          빨간색
        </button>
        <button
          style={{ color: 'green' }}
          onClick={() => handleChange('green')}
        >
          초록색
        </button>
        <button style={{ color: 'blue' }} onClick={() => handleChange('blue')}>
          파란색
        </button>
      </div>
    </>
  );
};

export default Say;
