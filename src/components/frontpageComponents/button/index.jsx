import React from "react";
import styled from "styled-components";
import { Marginer } from "../../marginer";
// import { Marginer } from "../../components/marginer";

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ButtonStarted = styled.button`
  border: none;
  outline: none;
  padding: 5px 1.5em;
  font-size: 18px;
  font-weight: 500;
  background: #8c30f5;
  border-radius: 6px;
  width: 156px;
  height: 48px;
  color: #fff;
  cursor: pointer;
  transition: all 400ms ease-in-out;

  &:hover {
    background-color: #000;
    color: #fff;
  }

  &:focus {
    outline: none;
  }
`;

const ButtonGetApp = styled.button`
  border: none;
  outline: none;
  padding: 5px 1.5em;
  font-size: 18px;
  font-weight: 500;
  background: #f1e4ff;
  border-radius: 6px;
  width: 156px;
  height: 48px;
  color: #8c30f5;
  margin-left: 15px;
  cursor: pointer;
  transition: all 400ms ease-in-out;

  &:hover {
    background-color: #000;
    color: #fff;
  }

  &:focus {
    outline: none;
  }
`;
export function Button(props) {
  return (
    <ButtonWrapper>
      <ButtonStarted>Get Started </ButtonStarted>
      <Marginer direction="horizontal" margin={10} />
      <ButtonGetApp>Get the App</ButtonGetApp>
    </ButtonWrapper>
  );
}
