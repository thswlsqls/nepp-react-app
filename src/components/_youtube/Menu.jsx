import React, { useState } from "react";
import styled from "styled-components";

const Menu = ({ data, title, defaultCount = 999 }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <List>
      {title && <Title>{title}</Title>}
      {data
        .filter((e, index) => defaultCount > index)
        .map(({ image, name }) => (
          <Item key={name}>
            <ImgItem src={image} />
            <ItemName>{name}</ItemName>
          </Item>
        ))}
      {showMore &&
        data
          .filter((e, index) => defaultCount <= index)
          .map(({ image, name }) => (
            <Item key={name}>
              <ImgItem src={image} />
              <ItemName>{name}</ItemName>
            </Item>
          ))}
      {defaultCount < data.length && (
        <Item onClick={() => setShowMore(!showMore)}>
          <ImgItem
            src={
              showMore
                ? "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-up-256.png"
                : "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-down-256.png"
            }
          />
          <ItemName>{showMore ? "간략히 보기" : "더보기"}</ItemName>
        </Item>
      )}
    </List>
  );
};

const List = styled.ul`
  list-style: none;
  padding: 8px 0;
  border-bottom: 1px solid #ddd;
`;
const Title = styled.div`
  padding: 8px 16px;
  font-size: 14px;
  color: #606060;
`;
const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 0 36px 0 16px;
  height: 40px;
  cursor: pointer;
  :hover {
    background: #eee;
  }
`;
const ImgItem = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 16px;
`;
const ItemName = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export default Menu;
