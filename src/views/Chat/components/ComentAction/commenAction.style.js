import styled from "@emotion/styled";

const TextAreaStyle = styled.textarea`
  resize: none;
  width: 100%;
  height: 100%;
  padding: 0.5rem 0.7rem;
  font: inherit;
  display: block;
  background-color: rgb(19, 47, 76);
  border: solid 1px rgb(19, 47, 76);
  color: white;
  &:focus {
    border-color: orange;
    outline-color: orange;
  }
`;

export { TextAreaStyle };
