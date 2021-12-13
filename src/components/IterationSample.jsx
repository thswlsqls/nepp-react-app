import { useRef, useState } from 'react';

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);
  //   const [inputValue, setinputValue] = useState('');
  const [inputValues, setInputValues] = useState({ input1: '', input2: '' });
  //   const newArray = names.map((e, i) => {
  //     return <li>{`${e}은 ${i} 번째 요소입니다`}</li>;
  //   });
  //   console.log(newArray);
  const { input1, input2 } = inputValues;
  const [text, setText] = useState('');
  // const [nextId, setnextId] = useState(5);
  const nextId = useRef(5);

  const handleAddbtnClick = () => {
    // alert(`1. ${inputValues.input1} 2. ${inputValues.input2}`);
    // setInputValues({ input1: '', input2: '' });
    // if (input1 === '') {
    //   setNames(names.concat([inputValues.input2]));
    // } else if (input2 === '') {
    //   setNames(names.concat([inputValues.input1]));
    // } else {
    //   setNames(names.concat([inputValues.input1, inputValues.input2]));
    // }
    // 1.
    // const newNames = [...names, text];
    // setNames(newNames);
    // 2.
    // setNames((prev) => [...prev, text]);
    // setNames((prev) => [...prev, { id: nextId, text: text }]);
    setNames((prev) => [...prev, { id: nextId.current, text: text }]);
    setText('');
    // setnextId(nextId + 1);
    nextId.current++;
  };

  const handleInputChange = (e) => {
    // const { name, value } = e.target;
    // setInputValues({ ...inputValues, [name]: value });

    const value = e.target.value;
    setText(value);
    // setText('');
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddbtnClick();
    }
  };

  const handleDelete = (id) => {
    const newNames = names.filter((name, i) => name.id !== id);
    setNames(newNames);
  };

  return (
    <div>
      {/* <input
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
      /> */}
      <input
        value={text}
        name='text'
        onChange={handleInputChange}
        onKeyPress={handleInputKeyPress}
      />
      <button onClick={handleAddbtnClick}>추가</button>
      <ul>
        {names.map(({ id, text }) => (
          <li key={id} onDoubleClick={() => handleDelete(id)}>
            {text}입니다
          </li>
          //화살표 함수를 전달하는 것과, 실행된 함수를 전달하는 것을 구분해야함
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
