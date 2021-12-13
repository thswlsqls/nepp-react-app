import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleIndex = (index) => {
    // 1. 이미 열린 item을 클릭하였는가?
    // -> 모든 item의 active를 false로.
    // 2. 아니면 activeIndex값을 index로.

    const nextIndex = activeIndex === index ? -1 : index;
    setActiveIndex(nextIndex);
  };

  return (
    <List>
      {data.map(({ id, title, content }, index) => (
        <Item key={id} active={index === activeIndex ? true : false}>
          <Header onClick={() => handleIndex(index)}>{title}</Header>
          {activeIndex === index && <Body>{content}</Body>}
        </Item>
      ))}
    </List>
  );
};

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  border: 1px solid #ddd;
  margin: 20px;
  width: 800px;
  border-radius: 4px;
`;
const Item = styled.li`
  & + & {
    border-top: 1px solid #ddd;
  }
  ${({ active }) =>
    active &&
    css`
      ${Header} {
        background: #e7f1ff;
        color: #0c63e4;
      }
      ${Body} {
        display: block;
      }
    `}
`;
const Header = styled.div`
  padding: 10px 15px;
  cursor: pointer;
`;
const Body = styled.div`
  padding: 10px 15px;
  border-top: 1px solid #ddd;
  display: ${({ active }) => (active ? 'black' : 'none')};
`;

export default Accordion;
