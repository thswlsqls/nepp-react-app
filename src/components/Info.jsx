import { useState, useEffect, useReducer } from 'react';

// p 202

const Info = () => {
  //   const [name, setName] = useState('');
  //   const [nickName, setNickName] = useState('');

  //   const handleNameChange = ({ target }) => {
  //     const { value } = target;
  //     setName(value);
  //   };

  //   const handleNickNameChange = ({ target }) => {
  //     const { value } = target;
  //     setNickName(value);
  //   };

  //   useEffect(() => {
  //     console.log('렌더링 완료'); //마운팅 될 때, 실행됨
  //     // document.body.addEventListener();
  //     return () => {
  //       console.log('완전히 제거되었다.'); //언마운트 될때
  //       //   document.body.removeEventListener();
  //     };
  //   }, []); //둘째 인자로 넘긴 상태값이 변할 때마다, 재랜더링 됨

  //   useEffect(() => {
  //     console.log('nickName이 변경되었다.');
  //     return () => {
  //       console.log('nickName이 변경되어 다시 랜더링 되기 전');
  //     };
  //   }, [nickName]);

  //   useEffect(() => {
  //     console.log('name이 변경되었다.');
  //     return () => {
  //       console.log('name이 변경되어 다시 랜더링 되기 전');
  //     };
  //   }, [name]);

  function reducer(state, action) {
    return { ...state, [action.name]: action.value };
  }

  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickName: '',
    address: '',
    address2: '',
  });
  const { name, nickName, address, address2 } = state;
  const onChange = (e) => dispatch(e.target);

  return (
    <>
      <div>
        <input
          placeholder='이름입력'
          name='name'
          value={name}
          onChange={onChange}
        />
        <input
          placeholder='닉네임입력'
          name='nickName'
          value={nickName}
          onChange={onChange}
        />
        <input
          placeholder='주소입력'
          name='adress'
          value={address}
          onChange={onChange}
        />
        <input
          placeholder='닉네임입력'
          name='adress2'
          value={address2}
          onChange={onChange}
        />
      </div>
      <h3>이름: {name}</h3>
      <h3>닉네임: {nickName}</h3>
    </>
  );
};

export default Info;
