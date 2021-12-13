import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Modal = ({ title, onClose, onSubmit }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (text) => {
    alert(text);
    onSubmit(text);
  };

  return (
    <Container>
      <Header>{title}</Header>
      <Body>
        <input onChange={handleChange} />
      </Body>
      <Footer>
        <BtnClose onClick={onClose}>Close</BtnClose>
        <BtnSubmit onClick={handleSubmit}>Save changes</BtnSubmit>
      </Footer>
    </Container>
  );
};

const Container = styled.div``;
const Header = styled.div``;
const Body = styled.div``;
const Footer = styled.div``;
const BtnClose = styled.button``;
const BtnSubmit = styled.button``;

export default Modal;
