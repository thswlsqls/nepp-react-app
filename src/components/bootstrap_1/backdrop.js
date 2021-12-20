import styled from "styled-components";

const Backdrop = styled.div`
  background: #000;
  opacity: 0.5;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
`;

export default Backdrop;
