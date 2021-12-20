import React, { useState } from "react";
import styled from "styled-components";
import DropdownProfile from "./DropdownProfile";
import imgHamburger from "../../assets/images/hamburger.png";
import imgLogo from "../../assets/images/logo.png";

const Topbar = ({ onOpenSidebar }) => {
  const [showDropdownProfile, setShowDropdownProfile] = useState(false);
  return (
    <>
      <Container>
        <ImgHamburger
          onClick={onOpenSidebar}
          src={imgHamburger}
          alt="hamburger"
        />
        <ImgLogo src={imgLogo} alt="logo" />
        <SearchWrapper>
          <InputSearch placeholder="검색" />
          <BtnSearch>검색</BtnSearch>
        </SearchWrapper>
        <DropdownWrapper>
          <BtnProfile
            onClick={() => setShowDropdownProfile(!showDropdownProfile)}
          >
            <ImgProfile src="https://yt3.ggpht.com/3SshyAt2hdIsA4v1VpRKwmvCSr8Uw0k0HQyERY899L_vAL86hddK3XFOEgEee1rRk0O-Y0qVJw=s88-c-k-c0x00ffffff-no-rj-mo" />
          </BtnProfile>
          {showDropdownProfile && (
            <DropdownProfile onClose={() => setShowDropdownProfile(false)} />
          )}
        </DropdownWrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 56px;
  padding: 0 20px;
  box-sizing: border-box;
  background: #fff;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
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

const SearchWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin: 0 20px;
`;
const InputSearch = styled.input`
  flex: 1;
  max-width: 600px;
  height: 40px;
  padding: 10px;
  box-sizing: border-box;
`;
const BtnSearch = styled.button`
  width: 64px;
`;

const DropdownWrapper = styled.div`
  position: relative;
`;
const BtnProfile = styled.button`
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
`;
const ImgProfile = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export default Topbar;
