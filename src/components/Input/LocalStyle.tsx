
import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  margin: 20px 0;
  width: 100%;
  max-width: 400px;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 10px 10px 10px 0;
  font-size: 16px;
  border: none;
  border-bottom: 2px solid #ccc;
  background: none;
  outline: none;

  &:focus {
    border-bottom: 2px solid #6200ee;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: -14px;
    left: 0;
    font-size: 12px;
    color: #6200ee;
  }
`;

export const InputLabel = styled.label`
  position: absolute;
  top: 10px;
  left: 0;
  font-size: 16px;
  color: #aaa;
  transition: 0.3s ease all;
  pointer-events: none; /* No permite interacción del mouse */
`;