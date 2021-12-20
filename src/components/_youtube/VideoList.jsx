import React from "react";
import styled from "styled-components";

const videoList = [
  {
    thumbnail:
      "https://i.ytimg.com/vi/Jm5v-dZnYCs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBI0BqvpZc49b60-e8Q41bF0n_MKg",
    title:
      "겨울에 공부하기 좋은 음악 | 3 hour lofi hip hop ~ lofi study / beat to relax",
    hit: "조회수 18만회",
    createAt: "3주 전",
    channel: {
      image:
        "https://yt3.ggpht.com/ytc/AKedOLTUh5DI9RQkZcNRxzVqXMfyO2jB99F1k49ttgFbrA=s68-c-k-c0x00ffffff-no-rj",
      name: "Lofi 코딩",
    },
  },
  {
    thumbnail:
      "https://i.ytimg.com/vi/Jm5v-dZnYCs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBI0BqvpZc49b60-e8Q41bF0n_MKg",
    title:
      "겨울에 공부하기 좋은 음악 | 3 hour lofi hip hop ~ lofi study / beat to relax",
    hit: "조회수 18만회",
    createAt: "3주 전",
    channel: {
      image:
        "https://yt3.ggpht.com/ytc/AKedOLTUh5DI9RQkZcNRxzVqXMfyO2jB99F1k49ttgFbrA=s68-c-k-c0x00ffffff-no-rj",
      name: "Lofi 코딩",
    },
  },
  {
    thumbnail:
      "https://i.ytimg.com/vi/Jm5v-dZnYCs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBI0BqvpZc49b60-e8Q41bF0n_MKg",
    title:
      "겨울에 공부하기 좋은 음악 | 3 hour lofi hip hop ~ lofi study / beat to relax",
    hit: "조회수 18만회",
    createAt: "3주 전",
    channel: {
      image:
        "https://yt3.ggpht.com/ytc/AKedOLTUh5DI9RQkZcNRxzVqXMfyO2jB99F1k49ttgFbrA=s68-c-k-c0x00ffffff-no-rj",
      name: "Lofi 코딩",
    },
  },
];

const VideoList = () => {
  return (
    <List>
      {videoList.map(
        ({ thumbnail, title, hit, createAt, channel: { image, name } }) => (
          <Item>
            <ThumbnailWrapper>
              <ThumbnailImage src={thumbnail} />
            </ThumbnailWrapper>
            <Bottom>
              <Left>
                <ChannelImage src={image} />
              </Left>
              <Right>
                <Title>{title}</Title>
                <ChannelName>{name}</ChannelName>
                <Hit>{hit}</Hit>
                <Date>{createAt}</Date>
              </Right>
            </Bottom>
          </Item>
        )
      )}
    </List>
  );
};

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 30px;
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;
const Item = styled.div``;
const ThumbnailWrapper = styled.div``;
const ThumbnailImage = styled.img`
  width: 100%;
`;
const Bottom = styled.div`
  display: flex;
`;
const Left = styled.div``;
const ChannelImage = styled.img`
  border-radius: 50%;
  width: 36px;
  height: 36px;
  margin-top: 12px;
  margin-right: 12px;
`;
const Right = styled.div``;
const Title = styled.p`
  margin-top: 12px;
  margin-bottom: 6px;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;
const ChannelName = styled.div`
  font-size: 12px;
  color: #606060;
`;
const Hit = styled.span`
  font-size: 12px;
  color: #606060;
`;
const Date = styled.span`
  font-size: 12px;
  color: #606060;
`;

export default VideoList;
