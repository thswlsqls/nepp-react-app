import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Backdrop from "../bootstrap/backdrop";
import Menu from "./Menu";

import imgLogo from "../../assets/images/logo.png";
import imgHamburger from "../../assets/images/hamburger.png";

import {
  sidebarMenuData1,
  sidebarMenuData2,
  sidebarMenuMoreData2,
  sidebarMenuData3,
  sidebarMenuData4,
  sidebarMenuData5,
} from "../../data/menu";

const ModalSidebar = ({ onClose }) => {
  const [collapse, setCollapse] = useState(false);
  const handleClose = () => {
    setCollapse(true);
    setTimeout(onClose, 300);
  };

  return (
    <>
      <Sidebar collapse={collapse}>
        <Top>
          <ImgHamburger
            onClick={handleClose}
            src={imgHamburger}
            alt="hamburger"
          />
          <ImgLogo src={imgLogo} alt="logo" />
        </Top>
        <Bottom>
          <Menu data={sidebarMenuData1} />
          <Menu data={sidebarMenuData2} defaultCount={5} />
          <Menu title="구독" data={sidebarMenuData3} defaultCount={7} />
          <Menu title="YOUTUBE 더보기" data={sidebarMenuData4} />
          <Menu data={sidebarMenuData5} />
        </Bottom>
      </Sidebar>
      <Backdrop collapse={collapse} onClick={handleClose} />
    </>
  );
};

const slideSidebar = keyframes`
  from {
    left: -240px;
  }
  to {
    left: 0;
  }
`;

const Sidebar = styled.div`
  animation: ${slideSidebar} 0.3s ease-out;
  width: 240px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: ${({ collapse }) => (collapse ? "-240px" : "0")};
  transition: left 0.3s ease-out;
  background: #fff;
  z-index: 100;
  display: flex;
  flex-direction: column;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 20px;
`;
const ImgHamburger = styled.img`
  width: 24px;
  height: 24px;
  margin: 10px;
  cursor: pointer;
`;
const ImgLogo = styled.img`
  height: 20px;
  cursor: pointer;
`;

const Bottom = styled.div`
  overflow: auto;
`;
export default ModalSidebar;
