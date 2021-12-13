// 211125

import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

const Todo = () => {
  const [text, setText] = useState('');
  const [todoList, setTodoList] = useState([
    { id: 1, text: '할 일1', isDone: false },
    { id: 2, text: '할 일2', isDone: false },
  ]);

  const nextId = useRef(3);
  const inputEl = useRef(null);

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  const handleInputChanged = (e) => {
    let inputText = e.target.value;
    console.log(inputText);
    setText(inputText);
  };

  const handleBtnAddClicked = () => {
    setTodoList((prev) => [
      ...prev,
      { id: nextId.current, text: text, isDone: false },
    ]);
    nextId.current += 1;
    console.log(todoList);
    setText('');
    inputEl.current.focus();
  };

  const handleBtnDelClicked = (todoId) => {
    const newTodos = todoList.filter((todo) => todo.id !== todoId);
    setTodoList(newTodos);
    inputEl.current.focus();
  };

  const handleDone = (e, todoId) => {
    console.log(e.target.checked);
    const { checked } = e.target;
    const newTodoList = todoList.map((todo) =>
      todo.id === todoId ? { ...todo, isDone: checked } : todo
    );
    setTodoList(newTodoList);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleBtnAddClicked();
    }
  };

  return (
    <div>
      <Component>
        <Title>일정관리</Title>
        <InputWrapper>
          <Input
            type='text'
            id='input'
            name='input'
            value={text}
            onKeyPress={handleInputKeyPress}
            onChange={(e) => handleInputChanged(e)}
            ref={inputEl}
          />
          <BtnAdd id='btnAdd' name='btnAdd' onClick={handleBtnAddClicked}>
            등록
          </BtnAdd>
        </InputWrapper>
        <TodoList>
          {todoList.map((todo) => (
            <TodoItem key={todo.id} isDone={todo.isDone}>
              <label>
                <input
                  type='checkbox'
                  name='inputChk'
                  id='inputChk'
                  onChange={(e) => handleDone(e, todo.id)}
                />
                <TodoContent>{todo.text}</TodoContent>
              </label>
              <BtnDelete
                id='btnDel'
                name='btnDel'
                onClick={() => handleBtnDelClicked(todo.id)}
              >
                삭제
              </BtnDelete>
            </TodoItem>
          ))}
        </TodoList>
      </Component>
    </div>
  );
};

const Component = styled.div`
  width: 500px;
  margin: 10px auto;
  background: #fecdcd;
`;
const Title = styled.div`
  padding: 10px;
  text-align: center;
  font-weight: bold;
  font-size: 25px;
`;
const InputWrapper = styled.div`
  display: flex;
  padding: 10px;
`;
const Input = styled.input`
  flex: 1;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
`;

const Button = styled.button`
  margin-left: 10px;
  border: none;
  background: #fff;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
`;

const BtnAdd = styled(Button)`
  margin-left: 10px;
  border: none;
  background: #fff;
  border-radius: 4px;
  padding: 5px 10px;
`;
const TodoList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  /* background: #efefef; */
  padding: 10px;
  label {
    display: flex;
    align-items: center;
  }
`;
const TodoItem = styled.li`
  background: ${({ isDone }) => (isDone ? 'black' : 'white')};
  color: ${(props) => (props.isDone ? 'white' : 'black')};
  padding: 10px;
  display: flex;
  justify-content: space-between;
  & + & {
    margin-top: 10px;
  }
`;
const TodoContent = styled.span`
  margin-left: 10px;
`;
const BtnDelete = styled(Button)`
  background: red;
  color: #fff;
`;

export default Todo;
