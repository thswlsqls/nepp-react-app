import { useState } from 'react';

const IterationSample = () => {
  const [names, setNames] = useState(['눈사람', '얼음', '눈', '바람']);
  //   const [inputValue, setinputValue] = useState('');
  const [inputValues, setInputValues] = useState({ input1: '', input2: '' });
  //   const newArray = names.map((e, i) => {
  //     return <li>{`${e}은 ${i} 번째 요소입니다`}</li>;
  //   });
  //   console.log(newArray);
  const { input1, input2 } = inputValues;

  const handleAddbtnClick = () => {
    alert(`1. ${inputValues.input1} 2. ${inputValues.input2}`);
    setInputValues({ input1: '', input2: '' });
    if (input1 === '') {
      setNames(names.concat([inputValues.input2]));
    } else if (input2 === '') {
      setNames(names.concat([inputValues.input1]));
    } else {
      setNames(names.concat([inputValues.input1, inputValues.input2]));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddbtnClick();
    }
  };

  return (
    <div>
      <input
        value={input1}
        name='input1'
        onChange={handleInputChange}
        onKeyPress={handleInputKeyPress}
      />
      <input
        value={input2}
        name='input2'
        onChange={handleInputChange}
        onKeyPress={handleInputKeyPress}
      />
      <button onClick={handleAddbtnClick}>추가</button>
      <ul>
        {names.map((name, i) => (
          <li key={i}>{name}입니다</li>
        ))}
        {/* 재랜더링시, 키값으로 변경사항을 감지하므로, 키값을 요구함 */}
        {/* {newArray} */}
        {/* <li>눈사람</li>
      <li>얼음</li>
      <li>눈</li>
      <li>바람</li> */}
      </ul>
    </div>
  );
};

export default IterationSample;
