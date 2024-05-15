import styled from "styled-components";

interface ValidationMessageProps {
  $type?: "success" | "error";
}

export const FormValidationMessage = styled.p<ValidationMessageProps>`
  color: ${({ $type = "success" }) =>
    $type === "success" ? "#007bff" : "#a80319"};
`;
