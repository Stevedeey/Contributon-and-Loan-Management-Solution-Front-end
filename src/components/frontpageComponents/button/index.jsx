import React from "react";
import styled from "styled-components";
import { Marginer } from "../../marginer";

const ButtonWrapper = styled.div`
  border: none;
  outline: none;
  padding: ${({pad})=>(pad ? pad : "7px 30px")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ size }) =>
    size
      ? size + "px"
      : "18px"}; //if size specified, use otherwise 18 as default
  font-weight: 500;

  background-color: ${({ btnbkgColor }) =>
    btnbkgColor ? btnbkgColor : "#8c30f5"}; // same for background col

  border-radius: 6px;
  /* width: 9.75em; */
  width: ${({ wth }) => (wth ? wth : "9.75em")};

  height: ${({ heit }) => (heit ? heit : "3em")};

  color: ${({ btnFgColor }) =>
    btnFgColor ? btnFgColor : "#eee"}; // same for background col

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
  const { size, btnbkgColor, btnFgColor, wth, heit, pad } = props;

  return (
    <ButtonWrapper
      size={size}
      btnbkgColor={btnbkgColor}
      btnFgColor={btnFgColor}
      wth={wth}
      heit={heit}
      pad={pad}
    >
      {props.children}
      <Marginer direction="horizontal" margin={10} />
    </ButtonWrapper>
  );
}
