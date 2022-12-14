import React from "react";
import { useParams } from "react-router-dom";
import data from "../../../data/data.js";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addItem } from "../../../redux/bagSlice/bagSlice.js";

export function ProductDetail() {
  const { productId } = useParams();

  const product = data.find((p) => p.id == productId); // strick equalitiyle undefined dönüyo
  const dispatch = useDispatch();

  return (
    <StyledWrapper>
      <Left src={`/public/images/${product.img}`} />
      <Right>
        <Name>{product.name}</Name>
        <Price>{product.price}</Price>
        <Detail>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad repellat
          minus laudantium ducimus iure, quae doloribus consectetur fugiat,
          delectus repudiandae placeat enim nam omnis. Velit fugit maxime ullam
          accusamus delectus.
        </Detail>
        <Btn onClick={() => dispatch(addItem())}>ADD TO CARD</Btn>
      </Right>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Left = styled.img`
  width: 50vw;
  padding: 50px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  padding: 50px;
  gap: 20px;
`;

const Name = styled.h3`
  font-size: 30px;
`;
const Price = styled.h5`
  font-size: 20px;
`;

const Detail = styled.p`
  font-size: 15px;
`;
const Btn = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  padding: 10px;
  height: 40px;
  font-size: 15px;
  font-weight: 700;
  border-style: none;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.primary};
  }
`;
