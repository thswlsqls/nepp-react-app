import React from "react";
import styled, { keyframes } from "styled-components";

const Modal = ({ onClose }) => {
  return (
    <Container>
      <Header>
        <Title>Modal heading</Title>
        <BtnX onClick={onClose} />
      </Header>
      <Body>Woohoo, you're reading this text in a modal!</Body>
      <Footer>
        <BtnClose onClick={onClose}>Close</BtnClose>
        <BtnSave>Save Changes</BtnSave>
      </Footer>
    </Container>
  );
};

const modalSlide = keyframes`
  from {
    transform: translate(-50%, -30px);
  }
  to {
    transform: translate(-50%, 0);
  }
`;

const Container = styled.div`
  animation: ${modalSlide} 0.3s ease-out;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #ddd;
  position: fixed;
  z-index: 100;
`;

const Header = styled.div`
  padding: 16px;
  font-size: 24px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.div``;
const BtnX = styled.button`
  width: 32px;
  height: 32px;
  cursor: pointer;
  border: none;
  background: transparent
    url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3E%3Cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3E%3C/svg%3E")
    50%/1em auto no-repeat;
`;
const Body = styled.div`
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  padding: 16px;
`;
const Footer = styled.div`
  padding: 12px;
  display: flex;
  justify-content: flex-end;
`;

const Btn = styled.button`
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  line-height: 1.5;
  font-size: 16px;
  margin: 4px;
  cursor: pointer;
`;

const BtnClose = styled(Btn)`
  background: #6c757d;
  color: #fff;
`;
const BtnSave = styled(Btn)`
  background: #0d6efd;
  color: #fff;
`;

export default Modal;
