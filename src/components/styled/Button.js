 import styled from "styled-components";
 
 export const Button = styled.button`
  color: white;
  min-width: 220px;
  padding: 10px 18px;
  border-radius: 5px;
  background: #000;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: 0.4s background ease-in;


  &:hover{
    background-color: #d09595;
    transition: 0.3s background ease-in;
    border: 1px solid;
  }
`;
 export const OutlineButton = styled(Button)`
 background-color: white;
 color: black;
 border: 1px solid;
   &:hover{
    background-color: black;
 color: white;
    border: 1px solid transparent;
  }
 `;
