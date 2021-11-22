import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';

function App() {
  const name = 0;
  // -- falsy --
  // 0 -0 "" null NaN undefined
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 48,
    fontWeight: 'bold',
    padding: '16px',
  };

  const classList = ['react', 'react2'].join(' ');
  return (
    // p62 실습
    // 리액트 앱이 리턴하는 컴포넌트는 반드시 하나의 태그 내부로 수렴되어야 함
    // 태그 내부에 속성을 정의하여 사용할 때에는, Fragment를 사용함
    // 자료형까지 비교할 때는 === 을 사용함
    // 내용물이 없는 태그는 반드시 셀프클로징 해야함
    <>
      <input />
      <br />
      this is dev branch
      <div style={style}>{name}</div>
      <div className={classList}>{name}</div>
      {name === '리액트' ? <h1>리액트입니다.</h1> : <h2>리액트가 아닙니다.</h2>}
      {name === '리액트' && <h1>리액트입니다.</h1>}
      {name === '리액트' ? <h1>리액트입니다.</h1> : <></>}
      {name || 'name값은 falsy합니다.'}
      {/* {showModal && <Modal/>} */}
      {/* <h1>{name} 안녕</h1>
      <h2>잘 작동하니?</h2> */}
    </>
    // create-react-app에는 js hot reload 라이브러리가 적용되어 있음, 코드가 변결될 때, 새로고침되지 않고 바뀐 부분만 변경된다.
  );
}

export default App;
