import styled from "styled-components";

interface ModalContentProps {
  $isshow: string;
}

export const ModalContent = styled.div<ModalContentProps>`
  position: relative;
  background-color: #fff;
  padding: 50px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  transform: ${({ $isshow }) =>
    $isshow === "true" ? "none" : "translateY(100%)"};
  transition: 0.3s;
`;
