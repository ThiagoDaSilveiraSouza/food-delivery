import styled from "styled-components";

interface ModalContainerProps {
  $isshow: string;
}

export const ModalContainer = styled.div<ModalContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: ${({ $isshow }) => ($isshow === "true" ? "visibile" : "hidden")};
  opacity: ${({ $isshow }) => ($isshow === "true" ? "1" : "0")};
  transition: 0.3s;
  z-index: 1000;
`;
