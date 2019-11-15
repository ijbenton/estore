import styled from "styled-components";
import CustomButton from "../../components/custom-button/custom-button.component";

export const DescriptionPageContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const ItemDescriptionContainer = styled.div`
  width: 50%;
  display: flex;
  flex-flow: row wrap;
`;
export const ItemNameContainer = styled.h2`
  width: 100%;
  font-size: 50px;
  text-decoration: underline;
  margin: 0;
`;

export const ItemImageContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`;

export const ItemPriceContainer = styled.span`
  width: 100%;
  font-style: italic;
  font-size: 34px;
  margin: 0;
`;
export const AddButton = styled(CustomButton)`
  width: 60%;
  opacity: 0.7;
`;

export const LineBreak = styled.div`
  width: 100%;
`;

export const QuantityContainer = styled.div`
  display: flex;

  div {
    cursor: pointer;
  }

  span {
    margin: 0 10px;
  }
`;
