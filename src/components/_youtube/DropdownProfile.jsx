import React, { useRef } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import { firstMenuData, secondMenuData } from "../../data/menu";
import { useDropdownClickBody } from "../../hooks";

const DropdownProfile = ({ onClose }) => {
  const dropdownEl = useRef(null);
  useDropdownClickBody(dropdownEl, onClose);
  return (
    <Container ref={dropdownEl}>
      <Top>
        <TopLeft>
          <ImgProfile src="https://yt3.ggpht.com/3SshyAt2hdIsA4v1VpRKwmvCSr8Uw0k0HQyERY899L_vAL86hddK3XFOEgEee1rRk0O-Y0qVJw=s88-c-k-c0x00ffffff-no-rj-mo" />
        </TopLeft>
        <TopRight>
          <UserName>넵플러스아카데미</UserName>
          <LinkAccountSetting>Google 계정 관리</LinkAccountSetting>
        </TopRight>
      </Top>
      <Menu data={firstMenuData} />
      <Menu data={secondMenuData} />
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
  border: 1px solid #ddd;
  position: absolute;
  background: #fff;
  right: 0;
`;

const Top = styled.div`
  display: flex;
  padding: 16px;
  border-bottom: 1px solid #ddd;
`;
const TopLeft = styled.div``;
const ImgProfile = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 16px;
`;
const TopRight = styled.div`
  display: flex;
  flex-direction: column;
`;
const UserName = styled.span``;
const LinkAccountSetting = styled.span`
  margin-top: 8px;
  color: #065fd4;
`;

export default DropdownProfile;
