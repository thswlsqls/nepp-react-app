import { useState } from 'react';

const EventPractice = () => {
  //   const [message, setMessage] = useState('');
  //   const [username, serUsername] = useState('');

  const [form, setForm] = useState({ message: '', username: '' });
  const { username, message } = form;

  const handleChange = (e) => {
    // console.log(e.target.value);
    // setMessage(e.target.value);
    const { name, value } = e.target;
    setForm({ ...form, [name]: value }); //대괄호 없이는, 스트링으로 취급함, 변수값을 넣기 위해서는 대괄호 안에 작성해야 함
  };
  const handleClick = () => {
    const { username, message } = form;
    alert(`${username} : ${message}`);
    setForm({ message: '', username: '' });
  };
  const handleChangeName = (e) => {
    // setUsername(e.target.value);
  };
  const handleKeyPress = (e) => {
    console.log(e);
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <>
      <input
        value={username}
        placeholder='username'
        name='username'
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <input
        value={message}
        placeholder='message'
        name='message'
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleClick}>확인</button>
    </>
  );
};

export default EventPractice;
