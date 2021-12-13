import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

const Dropdown = () => {
  const [menuActive, setmenuActive] = useState(false);

  // 1. useState로 변수 선언
  // 2. button 누르면 변수 변경
  // 3. 변수에 따라서 Menu 컴포넌트 조정
  const handleMenu = () => {
    setmenuActive(!menuActive);
  };

  var dropDownEl = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      console.log('click');
      if (dropDownEl.current && !dropDownEl.current.contains(e.target)) {
        setmenuActive(false);
      }
    };
    document.body.addEventListener('click', onClick);
    return () => {
      document.body.removeEventListner('click', onClick);
    };
  }, []);

  return (
    <Wrapper ref={dropDownEl} active={menuActive}>
      <Button onClick={() => handleMenu()}>Dropdown</Button>
      {/* {menuActive && (
        <Menu active={menuActive}>
          <Item>Item1</Item>
          <Item>Item2</Item>
          <Item>Item3</Item>
          <Item>Item4</Item>
        </Menu>
      )} */}
      <Menu active={menuActive}>
        <Item>Item1</Item>
        <Item>Item2</Item>
        <Item>Item3</Item>
        <Item>Item4</Item>
      </Menu>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  ${({ active }) =>
    active &&
    css`
      ${Button} {
        display: block;
      }
      ${Menu} {
        display: block;
      }
    `}
`;
const Button = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  color: #fff;
  background: #198765;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
const Menu = styled.ul`
  position: absolute;
  background: #fff;
  width: 150px;
  padding: 0;
  margin: 0;
  list-style: none;
  border: 1px solid #ddd;
  display: ${({ active }) => !active && 'none'};
`;
const Item = styled.li`
  padding: 10px 15px;
  cursor: pointer;
  &:hover {
    background: #efefef;
  }
`;

export default Dropdown;
