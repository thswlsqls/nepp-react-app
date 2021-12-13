import React, { useState } from 'react';
import styled from 'styled-components';

const Carousel = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleIndex = (i) => {
    // 이전 버튼을 눌렀는데 현재 첫번째 사진이면 마지막 사진으로
    // 다음 버튼을 눌렀는데 현재 마지막 사진이면 첫번째 사진으로
    // 둘다 아니면 i값 더하기
    let nextIndex;
    // let nextIndex =
    //   i < 0 && activeIndex == 0
    //     ? data.length - 1
    //     : i > 0 && activeIndex === data.length - 1
    //     ? 0
    //     : activeIndex + i;
    if (i < 0 && activeIndex == 0) {
      //   setActiveIndex(data.length - 1);
      nextIndex = data.length - 1;
    } else if (i > 0 && activeIndex === data.length - 1) {
      //   setActiveIndex(0);
      nextIndex = 0;
    } else {
      //   setActiveIndex(activeIndex + i);
      nextIndex = activeIndex + i;
    }
    setActiveIndex(nextIndex);
  };

  return (
    <Wrapper>
      <ImageList active={activeIndex}>
        {data.map((image, index) => (
          <Image key={image} src={image} active={activeIndex == index} />
        ))}
      </ImageList>
      <BtnLeft onClick={() => handleIndex(-1)}>이전</BtnLeft>
      <BtnRight onClick={() => handleIndex(+1)}>이후</BtnRight>
      <IndexList>
        {data.map((image, index) => (
          <BtnIndex
            key={image}
            active={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          >
            {index + 1}
          </BtnIndex>
        ))}
      </IndexList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 800px;
  height: 600px;
  position: relative;
  margin: 30px;
  overflow: hidden;
`;
const ImageList = styled.div`
  position: absoute;
  display: flex;
  transform: ${({ active }) => `translateX(${active * -800}px)`};
  transition: transform 0.5s ease-in;
`;
const Image = styled.img`
  min-width: 800px;
  height: 600px;
  /* position: absolute; */
  top: 0;
  left: 0;
  /* display: ${({ active }) => !active && 'none'}; */
  /* opacity: ${({ active }) =>
    !active && '0'}; //투명도 0이면 투명 1이면 불투명 */
  transition: opacity 0.5s ease-in; //애니메이션 적용할 속성, 연속시간, 애니메이션종류
`;
const BtnLeft = styled.button`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
`;
const BtnRight = styled.button`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
`;
const IndexList = styled.div`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
`;
const BtnIndex = styled.button`
  width: 30px;
  height: 30px;
  margin: 5px;
  background-color: ${({ active }) => active && 'blue'};
  border-radius: ${({ active }) => active && '50%'};
`;

export default Carousel;
