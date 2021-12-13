import React, { useState } from 'react';
import Accordion from './Accordion';
import Dropdown from './Dropdown';
import Carousel from './Carousel';
import Modal from './Modal';
import Backdrop from './backdrop';

const accordianData = [
  {
    id: 1,
    title: 'HEADER1',
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
      laborum quia aperiam illo architecto veniam dolores omnis excepturi.
      Ut quas fugit architecto tenetur fuga corporis quos delectus laborum
      quod dolor.`,
  },
  {
    id: 2,
    title: 'HEADER2',
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
      laborum quia aperiam illo architecto veniam dolores omnis excepturi.
      Ut quas fugit architecto tenetur fuga corporis quos delectus laborum
      quod dolor.`,
  },
  {
    id: 3,
    title: 'HEADER3',
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
      laborum quia aperiam illo architecto veniam dolores omnis excepturi.
      Ut quas fugit architecto tenetur fuga corporis quos delectus laborum
      quod dolor.`,
  },
];

const carouselData = [
  'https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_960_720.png',
  'https://og-data.s3.amazonaws.com/media/artworks/half/A0880/A0880-0016.jpg',
  'http://ojsfile.ohmynews.com/STD_IMG_FILE/2016/0516/IE001963941_STD.jpg',
  'https://t1.daumcdn.net/cfile/tistory/996333405A8280FC23',
];

const Bootstrap = () => {
  const [show, setShow] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [showModalNickName, setShowModalNickName] = useState(false);
  const [name, setName] = useState('');

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (text) => {
    setName(text);
    setShowModal(false);
  };

  const hideEveryModal = () => {
    setShowModal(false);
    setShowModalNickName(false);
  };

  return (
    <div>
      <h2>이름 : {name}</h2>
      {/* <Dropdown />
      <Accordion data={accordianData} /> */}
      <Carousel data={carouselData} />
      <button onClick={() => setShowModal(!showModal)}>이름 바꾸기</button>
      <button onClick={() => setShowModalNickName(!showModalNickName)}>
        닉네임 바꾸기
      </button>
      {showModal && (
        <Modal title='이름 변경' onClose={closeModal} onSubmit={handleSubmit} />
      )}
      {showModalNickName && (
        <Modal
          title='닉네임 변경'
          onClose={closeModal}
          onSubmit={handleSubmit}
        />
      )}
      {(showModal || showModalNickName) && (
        <Backdrop onClick={hideEveryModal}></Backdrop>
      )}
    </div>
  );
};

export default Bootstrap;
