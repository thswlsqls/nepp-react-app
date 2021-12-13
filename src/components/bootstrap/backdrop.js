import styled from 'styled-components';

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  /* background: rgba(0, 0, 0, 1); //rgba의 마지막 값은 */
  background: #000;
  opacity: 0.7;
  position: fixed;
  top: 0;
  left: 0;
`;

export default Backdrop;

//atomic design
