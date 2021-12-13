import { useState, useMemo, useCallback, useRef } from 'react';
// useMemo 재랜더링을 최소화할 때 사용함

const getAverage = (numbers) => {
  console.log('평균값 게산 중...');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setlist] = useState([]);
  const [number, setNumber] = useState('');
  const inputEl = useRef(null);
  const fileEl = useRef(null);

  const onChange = useCallback((e) => setNumber(e.target.value), []); // 의존성을 주입하여, 두번째 인자로 전달한 상태 목록이 변할 때만 등록함

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number)); // 새로운 배열을 생성
    // list.push(number); //기존 배열에 추가
    setlist(nextList);
    setNumber('');
    inputEl.current.focus();
  }, [number, list]);

  const avg = useMemo(() => getAverage(list), [list]); // 의존성을 주입하여 두번째 인자로 전달한 상태 목록이 바뀔 때만 재랜더링 되도록 함

  const handleFileUpload = () => {
    fileEl.current.click();
  };

  return (
    <div>
      <input ref={inputEl} value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b>
        {/* {getAverage(list)} */}
        {avg}
      </div>
      <input id='file' ref={fileEl} style={{ display: 'none' }} type='file' />
      {/* <label for="file"> */}
      <button onClick={handleFileUpload}>업로드</button>
    </div>
  );
};

export default Average;
