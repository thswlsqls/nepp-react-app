import React, { useState } from "react";
import Accordion from "./Accordion";
import Carousel from "./Carousel";
import Dropdown from "./Dropdown";
import Modal from "./Modal";
import Backdrop from "./backdrop";
import asdf, { accordionData, imageList } from "./data";

const Bootstrap = () => {
  const [showModal, setShowModal] = useState(false);

  const hideModal = () => {
    setShowModal(false);
  };

  return (
    <div style={{ margin: 20, width: 800 }}>
      {/* 모달 나오게하는 버튼 만들기 */}
      <button onClick={() => setShowModal(true)}>모달나와라</button>
      {showModal && <Modal onClose={hideModal} />}
      {showModal && <Backdrop onClick={() => setShowModal(false)} />}
      <Carousel imageList={imageList} />
    </div>
  );
};

export default Bootstrap;
